// App Imports
import models from '../../setup/models'
import params from '../../config/params'

// Get Prix by ID

export async function get(parentValue, { id }) {
  const prix = await models.Prix.findOne({ where: { id: id },
    include: [
     { model: models.User, as: 'user'}, 
     ] })

  if (!prix) {
    // Prix does not exists
    throw new Error("Il semble que le produit que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return prix
  }
}


// Get Prix by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Prix.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
        {model: models.Besoin, as: 'besoin'},
      ]
    })
  } else {
    throw new Error("S’il vous plaît connectez-vous pour afficher vos Prix.")
  }
}

// Get all Prix
export async function getAll() {
  return await models.Prix.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Besoin, as: 'besoin' },
    ]
  })
}

export async function create(parentValue, { besoinId, prix_unite,prix_unite_devise, prix_stock,prix_stock_devise,stock_unite, vendeur,vendeur_slug,adresse_vendeur,phone_vendeur,departement,ville }, { auth }) {
  if((auth.user && auth.user.role === params.user.roles.admin) || (auth.user && auth.user.role === params.user.roles.basic) || (auth.user && auth.user.role === params.user.roles.intermediate) || (auth.user && auth.user.role === params.user.roles.premium_v1) || (auth.user && auth.user.role === params.user.roles.premium_v2) || (auth.user && auth.user.role === params.user.roles.premium_v3) || (auth.user && auth.user.role === params.user.roles.advanced)) {
    return await models.Prix.create({
      besoinId,
      prix_unite,
      prix_unite_devise, 
      prix_stock, 
      prix_stock_devise,
      stock_unite,
      vendeur,
      vendeur_slug,
      adresse_vendeur,
      phone_vendeur,
      departement,
      ville,
      userId: auth.user.id,
      })
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Update Prix
export async function update(parentValue, { id, prix_unite,prix_unite_devise, prix_stock,prix_stock_devise,stock_unite, vendeur,vendeur_slug,adresse_vendeur,phone_vendeur,departement,ville}, { auth }) {
  if((auth.user && auth.user.role === params.user.roles.admin) || (auth.user && auth.user.role === params.user.roles.basic) || (auth.user && auth.user.role === params.user.roles.intermediate) || (auth.user && auth.user.role === params.user.roles.premium_v1) || (auth.user && auth.user.role === params.user.roles.premium_v2) || (auth.user && auth.user.role === params.user.roles.premium_v3) || (auth.user && auth.user.role === params.user.roles.advanced)) {
    return await models.Prix.update(
      {
      prix_unite,
      prix_unite_devise, 
      prix_stock, 
      prix_stock_devise,
      stock_unite,
      vendeur,
      vendeur_slug,
      adresse_vendeur,
      phone_vendeur,
      departement,
      ville,
      userId: auth.user.id,
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation Interdite.')
  }
}


// Delete Prix

export async function remove(parentValue, { id }, { auth }) {
  if(auth.user) {
    const prix = await models.Prix.findOne({where: {id}})

    if (!prix) {
      // prix does not exists
      throw new Error("Ce prix n'existe pas")
    } else {
      return await models.Prix.destroy({where: {id, userId: auth.user.id}})
    }
  } else {
    throw new Error('Operation Interdite.')
  }
}

export async function getRelatedByBesoin(parentValue, { besoinId }) {
  return await models.Prix.findAll({
    where: {
      besoinId: besoinId
    },
    order: [['id', 'DESC']]  // mock related prix by showing random prix
  })
}

export async function getRelatedByVendeurSlug(parentValue, { vendeur_slug }) {
  const prix = await models.Prix.findOne({ where: { vendeur_slug },
   include: [
    { model: models.User, as: 'user'},
    { model: models.Besoin, as: 'besoin' },
   ] })

  if (!prix) {
    // Prix does not exists
    throw new Error("Il semble que le prix que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return prix
  }
}

// Prix types
export async function getTypes() {
  return Object.values(params.besoins.categorie)
}

export async function getDepartementNomsTypes() {
  return Object.values(params.user.departement)
} 

export async function getVilleNomsTypes() {
  return Object.values(params.user.ville)
} 