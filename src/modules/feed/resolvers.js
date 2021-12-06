// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// Get all Feeds
export async function getAll() {
    return await models.Feed.findAll({ order: [['id', 'DESC']] })
}

export async function search(parentValue, {name}) {
return await models.Feed.findAll({
    where: { 
    name: {
      [models.Sequelize.Op.like]: `%${name}%`
    } },
    limit: 4,
});
}

export async function searchAll(parentValue, {name}) {
return await models.Feed.findAll({
    where: { 
    name: {
      [models.Sequelize.Op.like]: `%${name}%`
    } }
});
}

// Get feed by slug
export async function getBySlug(parentValue, { slug }) {
  const feed = await models.Feed.findOne({ where: { slug }})

  if (!feed) {
    // Feed does not exists
    throw new Error("Il semble que le feed que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return feed
  }
}

// Get feed by ID
export async function getById(parentValue, { feedId }) {
  const feed = await models.Feed.findOne({ where: { id: feedId } })

  if (!feed) {
    // feed does not exists
    throw new Error("Il semble que le feed que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return feed
  }
}


// Get related feeds by categorie
export async function getRelatedByCategorie(parentValue, { categorieId }) {
  return await models.Feed.findAll({
    where: {
      type: categorieId
    },
    limit: 4,
    order: [['createdAt', 'DESC']],  // mock related feeds by showing random feeds
  })
}

// Get page of related feeds by categorie
export async function getRelatedByCategoriePage(parentValue, { categorieId }) {
  return await models.Feed.findAll({
    where: {
      type: categorieId
    },
    order: [['createdAt', 'DESC']],  // mock related feeds by showing random feeds
  })
}

export async function getRelatedByCategorieAndId(parentValue, { categorieId,feedId }) {
  return await models.Feed.findAll({
    where: {
      type: categorieId,
      id: { [models.Sequelize.Op.not]: feedId }
    },
    limit: 4,
    order: [['createdAt', 'DESC']],  // mock related feed by showing random feed
  })
}

// Create feed
export async function create(parentValue, { name, slug, categorie,position, gender,identity,description, image,image2,image3, departement,ville, visible, delai,date_delai,show_delai}, { auth }) {
  if((auth.user && auth.user.role === params.user.roles.admin) || (auth.user && auth.user.role === params.user.roles.basic)) {
    return await models.Feed.create({
      name,
      slug,
      categorie,
      position,
      gender,
      identity,
      description,
      image,
      image2,
      image3,
      departement,
      ville,
      visible,
      delai,
      date_delai,
      show_delai
    })
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Update feed
export async function update(parentValue, { id, name, slug, categorie,position, gender,identity,description,image,image2,image3, departement,ville, visible, delai,date_delai,show_delai }, { auth }) {
  if((auth.user && auth.user.role === params.user.roles.admin) || (auth.user && auth.user.role === params.user.roles.basic) || (auth.user && auth.user.role === params.user.roles.intermediate) || (auth.user && auth.user.role === params.user.roles.premium_v1) || (auth.user && auth.user.role === params.user.roles.premium_v2) || (auth.user && auth.user.role === params.user.roles.premium_v3) || (auth.user && auth.user.role === params.user.roles.advanced)) {
    return await models.Feed.update(
      {
        name,
      slug,
      categorie,
      position,
      gender,
      departement,
      ville,
      visible,
      identity,
      description,
      image,
      image2,
      image3,
      delai,
      date_delai,
      show_delai
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Delete Feed
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user) {
    const feed = await models.Feed.findOne({where: {id}})

    if (!feed) {
      // Feed does not exists
      throw new Error("Cet feed n'existe pas.")
    } else {
      return await models.Feed.destroy({where: {id}})
    }
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Feed types
export async function getTypes() {
  return Object.values(params.feed.types)
}

export async function getDepartementNomsTypes() {
  return Object.values(params.user.departement)
} 

export async function getVilleNomsTypes() {
  return Object.values(params.user.ville)
} 