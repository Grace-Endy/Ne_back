// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// Get all Abonnements
export async function getAll() {
  return await models.Abonnement.findAll({ order: [['id', 'DESC']],
   include: [
    { model: models.User, as: 'user'},
   ]
   })
}

export async function search(parentValue, {name}) {
return await models.Abonnement.findAll({
    where: { 
    name: {
      [models.Sequelize.Op.like]: `%${name}%`
    } },
    limit: 4,
});
}
export async function searchAll(parentValue, {name}) {
return await models.Abonnement.findAll({
    where: { 
    name: {
      [models.Sequelize.Op.like]: `%${name}%`
    } }
});
}

// Get abonnement by ID
export async function getById(parentValue, { abonnementId }) {
  const abonnement = await models.Abonnement.findOne({ where: { id: abonnementId },
    include: [
     { model: models.User, as: 'user'},
     ] })

  if (!abonnement) {
    // Abonnement does not exists
    throw new Error("Il semble que l'abonnement que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return abonnement
  }
}

// Get Abonnement by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Abonnement.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
      ]
    })
  } else {
    throw new Error("S'il vous plait,connecter pour voir vos abonnements..")
  }
}

export async function getNotificationAbonnements() {
  return await models.Abonnement.findAll({ order: [[models.Sequelize.fn('RAND')]],limit: 1,
   include: [
    { model: models.User, as: 'user'},
   ]
   })
}


// Get related abonnements by UserId
export async function getRelatedByUserId(parentValue, { userId }) {
  return await models.Abonnement.findAll({
    where: {
      userId: userId
    },
    order: [['likes', 'DESC']]  // mock related Abonnements by showing random Abonnements
  })
}

// Create Abonnement
export async function create(parentValue, { name, nombre_de_mois, prix, date_commencement,date_fin, date_request,phone_client,nombreProduits,nombreAdresse,nombreActivites,publicite,publiciteInfo,numberoWhatsapp, }, { auth }) {
  if((auth.user && 1 === 1)) {
    return await models.Abonnement.create({
      name, 
      nombre_de_mois, 
      prix,
      date_commencement,
      date_fin,   
      date_request,
      phone_client,
      nombreProduits,
      nombreAdresse,
      nombreActivites,
      publicite,
      publiciteInfo,
      numberoWhatsapp,
      userId: auth.user.id
    })
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Update Abonnement
export async function update(parentValue, { id, name, nombre_de_mois, prix, date_commencement,date_fin, date_request,phone_client,nombreProduits,nombreAdresse,nombreActivites,publicite,publiciteInfo,numberoWhatsapp, }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Abonnement.update(
      {
      name, 
      nombre_de_mois, 
      prix,
      date_commencement,
      date_fin,   
      date_request,
      phone_client,
      nombreProduits,
      nombreAdresse,
      nombreActivites,
      publicite,
      publiciteInfo,
      numberoWhatsapp, 
      userId: auth.user.id,
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Delete Abonnement
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user) {
    const abonnement = await models.Abonnement.findOne({where: {id}})

    if (!abonnement) {
      // Abonnement does not exists
      throw new Error("Cet abonnement n'existe pas")
    } else {
      return await models.Abonnement.destroy({where: {id, userId: auth.user.id}})
    }
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Abonnement types
export async function getTypes() {
  return Object.values(params.user.roles)
}