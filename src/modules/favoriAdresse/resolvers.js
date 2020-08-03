// App Imports
import models from '../../setup/models'

// Get FavoriAdresse by ID
export async function get(parentValue, { id }) {
  return await models.FavoriAdresse.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Adresse, as: 'adress' },
    ]
  })
}

// Get FavoriAdresse by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.FavoriAdresse.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
        {model: models.Adresse, as: 'adress'},
      ]
    })
  } else {
    throw new Error("S’il vous plaît connectez-vous pour afficher vos Favoris.")
  }
}

// Get all FavoriAdresse
export async function getAll() {
  return await models.FavoriAdresse.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Adresse, as: 'adress' },
    ]
  })
}

// Create FavoriAdresse
export async function create(parentValue, { adressId }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    const favoriAdresse = await models.FavoriAdresse.findOne({ where: {adressId } })
     if (!favoriAdresse) {
    return await models.FavoriAdresse.create({
      adressId,
      userId: auth.user.id
    })
  }else {
    // User exists
    throw new Error(`Vous avez déjà ajouté cet adresse à vos favoris.`)
  } 
} 
  else {
    throw new Error("S’il vous plaît connectez-vous, ou s'inscrire pour vous abonner à cet adresse.")
  }
}

// Delete FavoriAdresse
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.FavoriAdresse.destroy({where: {id, userId: auth.user.id}})
  } else {
    throw new Error('Operation Interdite.')
  }
}