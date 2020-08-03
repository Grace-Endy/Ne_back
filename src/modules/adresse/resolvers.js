// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// Get all Adresses
export async function getAll() {
  return await models.Adresse.findAll({ order: [['id', 'DESC']],
  include: [
    { model: models.User, as: 'user'},
   ] })
}

// Get Adresse by slug
export async function getBySlug(parentValue, { slug }) {
  const adresse = await models.Adresse.findOne({ where: { slug },
  include: [
    { model: models.User, as: 'user'},
   ] })

  if (!adresse) {
    // Adresse does not exists
    throw new Error("Il semble que l'adresse que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return adresse
  }
}

export async function search(parentValue, {name}) {
return await models.Adresse.findAll({
    where: { 
    name: {
      [models.Sequelize.Op.like]: `%${name}%`
    } },
    limit: 4,
});
}
export async function searchAll(parentValue, {name}) {
return await models.Adresse.findAll({
    where: { 
    name: {
      [models.Sequelize.Op.like]: `%${name}%`
    } }
});
}

// Get adresse by ID
export async function getById(parentValue, { adresseId }) {
  const adresse = await models.Adresse.findOne({ where: { id: adresseId },
    include: [
     { model: models.User, as: 'user'},
     ] })

  if (!adresse) {
    // Adresse does not exists
    throw new Error("Il semble que l'adresse que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return adresse
  }
}

// Get adresse by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Adresse.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
      ]
    })
  } else {
    throw new Error("S'il vous plait,connecter pour voir vos adresses..")
  }
}
// Get related adresses
export async function getRelated(parentValue, { adresseId }) {
  return await models.Adresse.findAll({
    where: {
      id: { [models.Sequelize.Op.not]: adresseId }
    },
    limit: 4,
    order: [[models.Sequelize.fn('RAND')]] // mock related adresses by showing random adresses
  })
}
// Get related adresses by categorie
export async function getRelatedByCategorie(parentValue, { categorieId }) {
  return await models.Adresse.findAll({
    where: {
      type: categorieId
    },
    limit: 4,
    order: [['vue', 'DESC']]  // mock related adresses by showing random adresses
  })
}

// Create adresse
export async function create(parentValue, { name, slug, description, type,departement,ville,adresse,vue,besoinId,telephone,email,whatsapp,facebook,youtube,twitter, gender, image,image2,image3 }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Adresse.create({
      name,
      slug,
      description,
      type,
      departement,
      ville,
      adresse,
      vue,
      besoinId,
      userId: auth.user.id,
      telephone,
      email,
      whatsapp,
      facebook,
      youtube,
      twitter,
      gender,
      image,
      image2,
      image3
    })
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Update adresse
export async function update(parentValue, { id, name, slug, description, type,departement,ville,adresse,vue,besoinId,userId,telephone,email,whatsapp,facebook,youtube,twitter, gender, image,image2,image3 }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Adresse.update(
      {
        name,
        slug,
        description,
        type,
        departement,
        ville,
        adresse,
        vue,
        besoinId,
        userId: auth.user.id,
        telephone,
        email,
        whatsapp,
        facebook,
        youtube,
        twitter,
        gender,
        image,
        image2,
        image3
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Delete adresse
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    const adresse = await models.Adresse.findOne({where: {id}})

    if (!adresse) {
      // Adresse does not exists
      throw new Error("L'adresse n'existe pas.")
    } else {
      return await models.Adresse.destroy({where: {id, userId: auth.user.id}}), await models.FavoriAdresse.destroy({where: { adresseId: id}})
    }
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Adresse types
export async function getTypes() {
  return Object.values(params.adresse.types)
}

export async function getDepartementNomsTypes() {
  return Object.values(params.user.departement)
} 

export async function getVilleNomsTypes() {
  return Object.values(params.user.ville)
} 