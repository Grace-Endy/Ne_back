// App Imports
import models from '../../setup/models'

// Get Adresse_favori by ID
export async function get(parentValue, { id }) {
  return await models.Adresse_favori.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Adresse, as: 'adresse' },
    ]
  })
}

// Get Adresse_favori by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Adresse_favori.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
        {model: models.Adresse, as: 'adresse'},
      ]
    })
  } else {
    throw new Error("S’il vous plaît connectez-vous pour afficher vos Favoris.")
  }
}

// Get all Adresse_favori
export async function getAll() {
  return await models.Adresse_favori.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Adresse, as: 'adresse' },
    ]
  })
}

// Create Adresse_favori
export async function create(parentValue, { adresseId }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    const adresse_favori = await models.Adresse_favori.findOne({ where: {adresseId } })
     if (!adresse_favori) {
    return await models.Adresse_favori.create({
      adresseId,
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

// Delete Adresse_favori
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Adresse_favori.destroy({where: {id, userId: auth.user.id}})
  } else {
    throw new Error('Operation Interdite.')
  }
}