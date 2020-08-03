// App Imports
import models from '../../setup/models'

// Get Calculateur by ID
export async function get(parentValue, { id }) {
  return await models.Calculateur.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Besoin, as: 'besoin' },
    ]
  })
}

// Get Calculateur by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Calculateur.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
        {model: models.Besoin, as: 'besoin'},
      ]
    })
  } else {
    throw new Error("S’il vous plaît connectez-vous pour afficher votre Calculateur.")
  }
}

// Get all Calculateur
export async function getAll() {
  return await models.Calculateur.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Besoin, as: 'besoin' },
    ]
  })
}

// Create Calculateur
export async function create(parentValue, { besoinId }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    const calculateur = await models.Calculateur.findOne({ where: {besoinId } })
     if (!calculateur) {
    return await models.Calculateur.create({
      besoinId,
      userId: auth.user.id
    })
  }else {
    // User exists
    throw new Error(`Vous avez déjà ajouté ce produit à votre Calculateur.`)
  } 
} 
  else {
    throw new Error("S’il vous plaît connectez-vous, ou s'inscrire pour vous abonner à ce besoin.")
  }
}

// Delete Calculateur
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Calculateur.destroy({where: {id, userId: auth.user.id}})
  } else {
    throw new Error('Operation Interdite.')
  }
}