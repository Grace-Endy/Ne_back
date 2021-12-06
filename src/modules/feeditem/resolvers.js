// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// Get all feeditems
export async function getAll() {
  return await models.Feeditem.findAll({ order: [['id', 'DESC']], include: [
        {model: models.Besoin, as: 'besoin'},
        {model: models.Activite, as: 'activite'},
        {model: models.Adresse, as: 'adress'},
        {model: models.Feed, as: 'feed'},
      ] })
}

// Get Feeditem by ID
export async function getById(parentValue, { feeditemId }) {
  const feeditem = await models.Feeditem.findOne({ where: { id: feeditemId }})

  if (!feeditem) {
    // feeditem does not exists
    throw new Error("Il semble que l'element que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return feeditem
  }
}

// Get related Feeditem by categorie
export async function getRelatedByCategorie(parentValue, { categorieId }) {
  return await models.Feeditem.findAll({
    where: {
      category: categorieId
    },
    limit: 10,
    order: [['createdAt', 'DESC']],  // mock related Feeditem by showing random Feeditem
  })
}

export async function getRelatedByCategorieAndId(parentValue, { categorieId, feeditemId }) {
  return await models.Feeditem.findAll({
    where: {
      category: categorieId,
      id: { [models.Sequelize.Op.not]: feeditemId }
    },
    limit: 4,
    order: [['createdAt', 'DESC']],  // mock related Feeditem by showing random Feeditem
  })
}

export async function getRelatedByCategorieAndFeed(parentValue, { categorieId, feedId }) {
  return await models.Feeditem.findAll({
    where: {
      category: categorieId,
      feedId: { [models.Sequelize.Op.not]: feedId }
    },
    limit: 10,
    order: [['createdAt', 'DESC']],  // mock related Feeditem by showing random Feeditem
  })
}

// Create Feeditem
export async function create(parentValue, { category,feedId, activiteId, besoinId, adresseId }, { auth }) {
  if((auth.user && auth.user.role === params.user.roles.admin) || (auth.user && auth.user.role === params.user.roles.basic)) {
    return await models.Feeditem.create({
    category,
    feedId,
    activiteId,
	  besoinId,
    adresseId
    })
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Update activite
export async function update(parentValue, { id, category,feedId, activiteId, besoinId, adresseId }, { auth }) {
  if((auth.user && auth.user.role === params.user.roles.admin) || (auth.user && auth.user.role === params.user.roles.basic) || (auth.user && auth.user.role === params.user.roles.intermediate) || (auth.user && auth.user.role === params.user.roles.premium_v1) || (auth.user && auth.user.role === params.user.roles.premium_v2) || (auth.user && auth.user.role === params.user.roles.premium_v3) || (auth.user && auth.user.role === params.user.roles.advanced)) {
    return await models.Feeditem.update(
      {
	  category,
    feedId,
	  activiteId,
	  besoinId,
	      adresseId
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Delete Feeditem
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user) {
    const feeditem = await models.Feeditem.findOne({where: {id}})

    if (!feeditem) {
      // Feeditem does not exists
      throw new Error("Cet element n'existe pas.")
    } else {
      return await models.Feeditem.destroy({where: {id}})
    }
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Feeditem types
export async function getTypes() {
  return Object.values(params.feeditem.types)
}
