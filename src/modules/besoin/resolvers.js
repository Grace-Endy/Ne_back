// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// Get all besoins
export async function getAll() {
  return await models.Besoin.findAll({ order: [['id', 'DESC']],
   include: [
    { model: models.User, as: 'user'},
   ]
   })
}

// Get Besoin by slug
export async function getBySlug(parentValue, { slug }) {
  const besoin = await models.Besoin.findOne({ where: { slug },
   include: [
    { model: models.User, as: 'user'},
   ] })

  if (!besoin) {
    // Besoin does not exists
    throw new Error("Il semble que le produit que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return besoin
  }
}

export async function search(parentValue, {name}) {
return await models.Besoin.findAll({
    where: { 
    name: {
      [models.Sequelize.Op.like]: `%${name}%`
    } },
    limit: 4,
});
}
export async function searchAll(parentValue, {name}) {
return await models.Besoin.findAll({
    where: { 
    name: {
      [models.Sequelize.Op.like]: `%${name}%`
    } }
});
}

// Get besoin by ID
export async function getById(parentValue, { besoinId }) {
  const besoin = await models.Besoin.findOne({ where: { id: besoinId },
    include: [
     { model: models.User, as: 'user'},
     ] })

  if (!besoin) {
    // Besoin does not exists
    throw new Error("Il semble que le produit que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return besoin
  }
}

// Get besoin by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Besoin.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
      ]
    })
  } else {
    throw new Error("S'il vous plait,connecter pour voir vos besoins..")
  }
}

// Get related besoins
export async function getRelated(parentValue, { besoinId }) {
  return await models.Besoin.findAll({
    where: {
      id: { [models.Sequelize.Op.not]: besoinId }
    },
    limit: 4,
    order: [[models.Sequelize.fn('RAND')]] // mock related besoins by showing random besoins
  })
}

export async function getNotificationBesoins() {
  return await models.Besoin.findAll({ order: [[models.Sequelize.fn('RAND')]],limit: 1,
   include: [
    { model: models.User, as: 'user'},
   ]
   })
}

// Get related besoins by categorie
export async function getRelatedByCategorie(parentValue, { categorieId }) {
  return await models.Besoin.findAll({
    where: {
      categorie: categorieId
    },
    limit: 4,
    order: [['likes', 'DESC']]  // mock related besoins by showing random besoins
  })
}

// Get related besoins by UserId
export async function getRelatedByUserId(parentValue, { userId }) {
  return await models.Besoin.findAll({
    where: {
      userId: userId
    },
    order: [['likes', 'DESC']]  // mock related besoins by showing random besoins
  })
}

// Create besoin
export async function create(parentValue, { name, slug, description, categorie,gender, prix_unite,prix_unite_devise, prix_stock,prix_stock_devise,stock_unite, image, image2, image3, vendeur,adresse_vendeur,phone_vendeur,departement,ville,specification,rating,vue,likes }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Besoin.create({
      name, 
      slug, 
      description,
      categorie,
      gender,   
      prix_unite,
      prix_unite_devise, 
      prix_stock, 
      prix_stock_devise,
      stock_unite,
      image, 
      image2, 
      image3, 
      vendeur,
      adresse_vendeur,
      phone_vendeur,
      departement,
      ville,
      specification,
      rating,
      vue,
      userId: auth.user.id,
      likes
    })
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Update Besoin
export async function update(parentValue, { id, name, slug, description, categorie,gender, prix_unite,prix_unite_devise, prix_stock,prix_stock_devise,stock_unite, image, image2, image3, vendeur,adresse_vendeur,phone_vendeur,departement,ville,specification,rating,vue,likes }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Besoin.update(
      {
      name, 
      slug, 
      description,
      categorie,
      gender,   
      prix_unite,
      prix_unite_devise, 
      prix_stock, 
      prix_stock_devise,
      stock_unite,
      image, 
      image2, 
      image3, 
      vendeur,
      adresse_vendeur,
      phone_vendeur,
      departement,
      ville,
      specification,
      rating,
      vue ,
      userId: auth.user.id,
      likes
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Delete Besoin
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    const besoin = await models.Besoin.findOne({where: {id}})

    if (!besoin) {
      // Besoin does not exists
      throw new Error("Ce produit n'existe pas")
    } else {
      return await models.Besoin.destroy({where: {id, userId: auth.user.id}}), await models.Favori.destroy({where: { besoinId: id}})
    }
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Besoin types
export async function getTypes() {
  return Object.values(params.besoins.categorie)
}

export async function getDepartementNomsTypes() {
  return Object.values(params.user.departement)
} 

export async function getVilleNomsTypes() {
  return Object.values(params.user.ville)
} 
