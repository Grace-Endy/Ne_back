// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// Get all Contacts
export async function getAll() {
  return await models.Contact.findAll({ order: [['id', 'DESC']] })
}

export async function search(parentValue, {name}) {
return await models.Contact.findAll({
    where: { 
    name: {
      [models.Sequelize.Op.like]: `%${name}%`
    } },
    limit: 4,
});
}
export async function searchAll(parentValue, {name}) {
return await models.Contact.findAll({
    where: { 
    name: {
      [models.Sequelize.Op.like]: `%${name}%`
    } }
});
}

// Get Contact by slug
export async function getBySlug(parentValue, { slug }) {
  const contact = await models.Contact.findOne({ where: { slug }
  })

  if (!contact) {
    // Contact does not exists
    throw new Error("Il semble que le contact que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return contact
  }
}

// Get contact by ID
export async function getById(parentValue, { contactId }) {
  const contact = await models.Contact.findOne({ where: { id: contactId } })

  if (!contact) {
    // contact does not exists
    throw new Error("Il semble que le contact que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return contact
  }
}



// Create contact
export async function create(parentValue, { name, slug, adresse_abonne, sexe, date_de_naissance, departement,ville,telephone,interet }, { auth }) {
  if(1==1) {
    return await models.Contact.create({
      name,
      slug,
      adresse_abonne,
      sexe,
	  date_de_naissance,
      departement,
      ville,
      telephone,
      interet
    })
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Update contact
export async function update(parentValue, { id, name, slug, adresse_abonne, sexe, date_de_naissance, departement,ville,telephone,interet }, { auth }) {
  if(1==1) {
    return await models.Contact.update(
      {
        name,
      slug,
      adresse_abonne,
      sexe,
    date_de_naissance,
      departement,
      ville,
      telephone,
      interet
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Delete contact
export async function remove(parentValue, { id }, { auth }) {
  if(1==1) {
    const contact = await models.Contact.findOne({where: {id}})

    if (!contact) {
      // Contact does not exists
      throw new Error("Ce contact n'existe pas.")
    } else {
      return await models.Contact.destroy({where: {id}})
    }
  } else {
    throw new Error('Operation Interdite.')
  }
}

// Contact types
export async function getTypes() {
  return Object.values(params.contact.types)
}
 