// App Imports
import params from "../../config/params"
import models from "../../setup/models"

// Get all activites
export async function getAll() {
  return await models.Activite.findAll({
    order: [["id", "DESC"]],
    include: [{ model: models.User, as: "user" }],
  })
}

export async function getAllActivites(parentValue, {offSetId}) {
  return await models.Activite.findAll({ order: [['createdAt', 'DESC']],
   include: [
    { model: models.User, as: 'user'},
   ],
   offset: offSetId, limit: 20
   }
  )
}

export async function search(parentValue, { name }) {
  return await models.Activite.findAll({
    where: {
      name: {
        [models.Sequelize.Op.like]: `%${name}%`,
      },
    },
    limit: 4,
    include: [{ model: models.User, as: "user" }],
  })
}
export async function searchAll(parentValue, { name }) {
  return await models.Activite.findAll({
    where: {
      name: {
        [models.Sequelize.Op.like]: `%${name}%`,
      },
    },
    include: [{ model: models.User, as: "user" }],
  })
}

// Get activite by slug
export async function getBySlug(parentValue, { slug }) {
  const activite = await models.Activite.findOne({
    where: { slug },
    include: [{ model: models.User, as: "user" }],
  })

  if (!activite) {
    // Activite does not exists
    throw new Error(
      "Il semble que l'activite que vous recherchez n'existe pas ou a été retiré."
    )
  } else {
    return activite
  }
}

// Get activite by ID
export async function getById(parentValue, { activiteId }) {
  const activite = await models.Activite.findOne({
    where: { id: activiteId },
    include: [{ model: models.User, as: "user" }],
  })

  if (!activite) {
    // activite does not exists
    throw new Error(
      "Il semble que l'activite que vous recherchez n'existe pas ou a été retiré."
    )
  } else {
    return activite
  }
}
export async function getActiviteAVenir() {
  return await models.Activite.findAll({
    limit: 15,
    order: [["createdAt", "DESC"]],
    include: [{ model: models.User, as: "user" }], // mock related activites by showing random activies
  })
}
// Get activite by user
export async function getByUser(parentValue, {}, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.Activite.findAll({
      where: {
        userId: auth.user.id,
      },
      order: [["createdAt", "DESC"]],
      include: [{ model: models.User, as: "user" }],
    })
  } else {
    throw new Error("S'il vous plait, connecter pour voir vos Activites..")
  }
}
// Get related activites
export async function getRelated(parentValue, { activiteId }) {
  return await models.Activite.findAll({
    where: {
      id: { [models.Sequelize.Op.not]: activiteId },
    },
    limit: 4,
    order: [[models.Sequelize.fn("RAND")]],
    include: [{ model: models.User, as: "user" }], // mock related activites by showing random activites
  })
}
// Get page of related activites by categorie
export async function getRelatedByCategoriePage(parentValue, { categorieId }) {
  return await models.Activite.findAll({
    where: {
      type: categorieId,
    },
    order: [["createdAt", "DESC"]],
    include: [{ model: models.User, as: "user" }], // mock related activites by showing random activies
  })
}
// Get related activites by categorie
export async function getRelatedByCategorie(parentValue, { categorieId }) {
  return await models.Activite.findAll({
    where: {
      type: categorieId,
    },
    limit: 4,
    order: [["createdAt", "DESC"]],
    include: [{ model: models.User, as: "user" }], // mock related activites by showing random activies
  })
}

export async function getRelatedByCategorieAndId(
  parentValue,
  { categorieId, activiteId }
) {
  return await models.Activite.findAll({
    where: {
      type: categorieId,
      id: { [models.Sequelize.Op.not]: activiteId },
    },
    limit: 4,
    order: [["createdAt", "DESC"]],
    include: [{ model: models.User, as: "user" }], // mock related activites by showing random activies
  })
}

// Create activite
export async function create(
  parentValue,
  {
    name,
    slug,
    description,
    type,
    gender,
    departement,
    ville,
    local,
    datejour1,
    datemois1,
    dateannee1,
    datejour2,
    datemois2,
    dateannee2,
    heureheure1,
    heureminute1,
    heureterminaison1,
    heureheure2,
    heureminute2,
    heureterminaison2,
    prix,
    prix_devise,
    artiste,
    dj,
    organisateur,
    lieux_achat,
    vue,
    phone,
    image,
  },
  { auth }
) {
  if (
    (auth.user && auth.user.role === params.user.roles.admin) ||
    (auth.user && auth.user.role === params.user.roles.basic)
  ) {
    return await models.Activite.create({
      name,
      slug,
      description,
      type,
      gender,
      departement,
      ville,
      local,
      datejour1,
      datemois1,
      dateannee1,
      datejour2,
      datemois2,
      dateannee2,
      heureheure1,
      heureminute1,
      heureterminaison1,
      heureheure2,
      heureminute2,
      heureterminaison2,
      prix,
      prix_devise,
      artiste,
      dj,
      organisateur,
      lieux_achat,
      userId: auth.user.id,
      vue,
      phone,
      image,
    })
  } else {
    throw new Error("Operation Interdite.")
  }
}

// Update activite
export async function update(
  parentValue,
  {
    id,
    name,
    slug,
    description,
    type,
    gender,
    departement,
    ville,
    local,
    datejour1,
    datemois1,
    dateannee1,
    datejour2,
    datemois2,
    dateannee2,
    heureheure1,
    heureminute1,
    heureterminaison1,
    heureheure2,
    heureminute2,
    heureterminaison2,
    prix,
    prix_devise,
    artiste,
    dj,
    organisateur,
    lieux_achat,
    vue,
    phone,
    details,
    image,
  },
  { auth }
) {
  if (
    (auth.user && auth.user.role === params.user.roles.admin) ||
    (auth.user && auth.user.role === params.user.roles.basic) ||
    (auth.user && auth.user.role === params.user.roles.intermediate) ||
    (auth.user && auth.user.role === params.user.roles.premium_v1) ||
    (auth.user && auth.user.role === params.user.roles.premium_v2) ||
    (auth.user && auth.user.role === params.user.roles.premium_v3) ||
    (auth.user && auth.user.role === params.user.roles.advanced)
  ) {
    return await models.Activite.update(
      {
        name,
        slug,
        description,
        type,
        gender,
        departement,
        ville,
        local,
        datejour1,
        datemois1,
        dateannee1,
        datejour2,
        datemois2,
        dateannee2,
        heureheure1,
        heureminute1,
        heureterminaison1,
        heureheure2,
        heureminute2,
        heureterminaison2,
        prix,
        prix_devise,
        artiste,
        dj,
        organisateur,
        lieux_achat,
        userId: auth.user.id,
        vue,
        phone,
        image,
      },
      { where: { id } }
    )
  } else {
    throw new Error("Operation Interdite.")
  }
}

// Delete activite
export async function remove(parentValue, { id }, { auth }) {
  if (auth.user) {
    const activite = await models.Activite.findOne({ where: { id } })

    if (!activite) {
      // Activite does not exists
      throw new Error("Cette activité n'existe pas.")
    } else {
      return (
        await models.Activite.destroy({ where: { id, userId: auth.user.id } }),
        await models.Favori2.destroy({ where: { activiteId: id } })
      )
    }
  } else {
    throw new Error("Operation Interdite.")
  }
}

// Activite types
export async function getTypes() {
  return Object.values(params.activite.types)
}

// Categorie Activite types
export async function getActiviteCategorieTypes() {
  return Object.values(params.categorie_activite.types)
}
export async function getDepartementNomsTypes() {
  return Object.values(params.user.departement)
}

export async function getVilleNomsTypes() {
  return Object.values(params.user.ville)
}
