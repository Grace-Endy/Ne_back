// App Imports
import models from '../../setup/models'

// Get Favori2 by ID
export async function get(parentValue, { id }) {
  return await models.Favori2.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Activite, as: 'activite' },
    ]
  })
}

// Get Favori2 by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Favori2.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
        {model: models.Activite, as: 'activite'},
      ]
    })
  } else {
    throw new Error("S’il vous plaît connectez-vous pour afficher vos Favoris.")
  }
}

// Get all Favoris2
export async function getAll() {
  return await models.Favori2.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Activite, as: 'activite' },
    ]
  })
}

// Create Favori2
export async function create(parentValue, { activiteId }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    const favori2 = await models.Favori2.findOne({ where: {activiteId } })
     if (!favori2) {
    return await models.Favori2.create({
      activiteId,
      userId: auth.user.id
    })
  }else {
    // User exists
    throw new Error(`Vous avez déjà ajouté cette activite à vos favoris.`)
  } 
} 
  else {
    throw new Error("S’il vous plaît connectez-vous, ou s'inscrire pour vous abonner à cette activite.")
  }
}

// Delete Favori2
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Favori2.destroy({where: {id, userId: auth.user.id}})
  } else {
    throw new Error('Operation Interdite.')
  }
}