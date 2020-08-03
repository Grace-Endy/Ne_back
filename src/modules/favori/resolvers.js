// App Imports
import models from '../../setup/models'

// Get Favori by ID
export async function get(parentValue, { id }) {
  return await models.Favori.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Besoin, as: 'besoin' },
    ]
  })
}

// Get Favori by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Favori.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
        {model: models.Besoin, as: 'besoin'},
      ]
    })
  } else {
    throw new Error("S’il vous plaît connectez-vous pour afficher vos Favoris.")
  }
}

// Get all Favoris
export async function getAll() {
  return await models.Favori.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Besoin, as: 'besoin' },
    ]
  })
}

// Create Favori
export async function create(parentValue, { besoinId }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    const favori = await models.Favori.findOne({ where: {besoinId } })
     if (!favori) {
    return await models.Favori.create({
      besoinId,
      userId: auth.user.id
    })
  }else {
    // User exists
    throw new Error(`Vous avez déjà ajouté ce produit à vos favoris.`)
  } 
} 
  else {
    throw new Error("S’il vous plaît connectez-vous, ou s'inscrire pour vous abonner à ce besoin.")
  }
}

// Delete Favori
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Favori.destroy({where: {id, userId: auth.user.id}})
  } else {
    throw new Error('Operation Interdite.')
  }
}