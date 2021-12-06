// Imports
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// App Imports
import serverConfig from "../../config/server"
import params from "../../config/params"
import models from "../../setup/models"

// Create
export async function create(
  parentValue,
  {
    name,
    email,
    slug,
    role,
    type_de_compte,
    image,
    nombre_de_besoins,
    nombre_de_besoins_total,
    nombre_de_activite,
    nombre_de_activite_total,
    nombre_de_adresse,
    nombre_de_adresse_total,
    password,
  }
) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    return await models.User.create({
      name,
      email,
      slug,
      role,
      type_de_compte,
      image,
      nombre_de_besoins,
      nombre_de_besoins_total,
      nombre_de_activite,
      nombre_de_activite_total,
      nombre_de_adresse,
      nombre_de_adresse_total,
      password: passwordHashed,
    })
  } else {
    // User exists
    throw new Error(
      "Cet email est déjà enregistré. Veuillez essayer de vous s'inscrire avec un autre."
    )
  }
}

// Update User
export async function update(
  parentValue,
  {
    id,
    name,
    slug,
    email,
    numero_principal,
    nombre_de_besoins,
    nombre_de_activite,
    nombre_de_adresse,
    numero_whatsapp,
    departement,
    ville,
    adresse,
    image,
    type_de_compte,
  },
  { auth }
) {
  if (auth.user) {
    return await models.User.update(
      {
        name,
        slug,
        email,
        numero_principal,
        numero_whatsapp,
        departement,
        nombre_de_besoins,
        nombre_de_adresse,
        nombre_de_activite,
        ville,
        adresse,
        image,
        type_de_compte,
      },
      { where: { id } }
    )
  } else {
    throw new Error("Operation Interdite.")
  }
}

export async function updateRegistrationToken(
  parentValue,
  { email, registrationToken }
) {
  if (1 === 1) {
    return await models.User.update(
      {
        registrationToken: registrationToken,
      },
      { where: { email } }
    )
  } else {
    throw new Error("Operation Interdite.")
  }
}

export async function livreurLogin(parentValue, { email, password }) {
  const { Op } = require("sequelize")
  const user = await models.User.findOne({
    where: { email, role: { [Op.or]: ["ADMIN", "LIVREUR"] } },
  })
  if (!user) {
    // User does not exists
    throw new Error(
      "Nous n'avons aucun livreur enregistré avec cette adresse e-mail. Veuillez réessayer s'il vous plait."
    )
  } else {
    const userDetails = user.get()
    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)
    if (!passwordMatch) {
      // Incorrect password
      throw new Error(
        "Désolé, le mot de passe que vous avez entré est incorrect. Veuillez réessayer."
      )
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        image: userDetails.image,
        slug: userDetails.slug,
        createAt: userDetails.createAt,
        adresse: userDetails.adresse,
        debut_abonnement: userDetails.debut_abonnement,
        fin_abonnement: userDetails.fin_abonnement,
        nombre_de_besoins: userDetails.nombre_de_besoins,
        nombre_de_besoins_total: userDetails.nombre_de_besoins_total,
        nombre_de_activite: userDetails.nombre_de_activite,
        nombre_de_activite_total: userDetails.nombre_de_activite_total,
        nombre_de_adresse: userDetails.nombre_de_adresse,
        nombre_de_adresse_total: userDetails.nombre_de_adresse_total,
        ville: userDetails.ville,
        departement: userDetails.departement,
        role: userDetails.role,
      }
      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret),
      }
    }
  }
}

// Update User features
export async function updateFeatures(
  parentValue,
  { id, nombre_de_besoins },
  { auth }
) {
  if (auth.user) {
    return await models.User.updateFeatures(
      {
        nombre_de_besoins,
      },
      { where: { id } }
    )
  } else {
    throw new Error("Operation Interdite.")
  }
}

export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error(
      "Nous n'avons aucun utilisateur enregistré avec cette adresse e-mail. Inscrivez vous s'il vous plait."
    )
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(
        "Désolé, le mot de passe que vous avez entré est incorrect. Veuillez réessayer."
      )
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        image: userDetails.image,
        slug: userDetails.slug,
        createAt: userDetails.createAt,
        adresse: userDetails.adresse,
        debut_abonnement: userDetails.debut_abonnement,
        fin_abonnement: userDetails.fin_abonnement,
        nombre_de_besoins: userDetails.nombre_de_besoins,
        nombre_de_besoins_total: userDetails.nombre_de_besoins_total,
        nombre_de_activite: userDetails.nombre_de_activite,
        nombre_de_activite_total: userDetails.nombre_de_activite_total,
        nombre_de_adresse: userDetails.nombre_de_adresse,
        nombre_de_adresse_total: userDetails.nombre_de_adresse_total,
        ville: userDetails.ville,
        departement: userDetails.departement,
        role: userDetails.role,
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret),
      }
    }
  }
}
export async function updatePassword(parentValue, { id, password }, { auth }) {
  if (auth.user) {
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)
    return await models.User.update(
      {
        password: passwordHashed,
      },
      { where: { id } }
    )
  } else {
    throw new Error("Operation Interdite.")
  }
}

export async function verifyIfPassword(parentValue, { id, password }) {
  const user = await models.User.findOne({ where: { id } })
  if (!user) {
    // User does not exists
    throw new Error(
      "Votre mot de passe ne peut pas etre modifier pour l'instant. Veuillez essayer un autre moment s'il vous plait."
    )
  } else {
    const userDetails = user.get()
    const passwordMatch = await bcrypt.compare(password, userDetails.password)
    if (!passwordMatch) {
      // Incorrect password
      throw new Error(
        "Désolé, le mot de passe que vous avez entré est incorrect. Veuillez réessayer."
      )
    } else {
      const passwordVerification = "is ok"

      return {
        user: userDetails,
        messageFromServer: passwordVerification,
      }
    }
  }
}

export async function updatePasswordFromOpt(
  parentValue,
  { email, password, opt_code }
) {
  if (1 === 1) {
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)
    return await models.User.update(
      {
        opt_code: opt_code,
        password: passwordHashed,
      },
      { where: { email } }
    )
  } else {
    throw new Error("Operation Interdite.")
  }
}

export async function updateOpt(parentValue, { email, opt_code }) {
  if (1 === 1) {
    return await models.User.update(
      {
        opt_code: opt_code,
      },
      { where: { email } }
    )
  } else {
    throw new Error("Operation Interdite.")
  }
}

export async function verifyIfEmail(parentValue, { email }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error(
      "Nous n'avons aucun utilisateur enregistré avec cette adresse e-mail. Inscrivez vous s'il vous plait."
    )
  } else {
    const userDetails = user.get()

    if (1 !== 1) {
      // Incorrect email
      throw new Error(
        "Désolé, l'email que vous avez entré est incorrect. Veuillez réessayer."
      )
    } else {
      const emailVerification = "is ok"

      return {
        messageFromServer: emailVerification,
      }
    }
  }
}

export async function verifyIfOptCode(parentValue, { email, opt_code }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error(
      "Nous n'avons aucun utilisateur enregistré avec cette adresse e-mail. Inscrivez vous s'il vous plait."
    )
  } else {
    const userDetails = user.get()

    if (opt_code !== userDetails.opt_code) {
      // Incorrect email
      throw new Error(
        "Désolé, l'opt code que vous avez entré est incorrect. Veuillez réessayer avec celui qu'on a envoyé sur votre email."
      )
    } else {
      const optCodeVerification = "is ok"

      return {
        messageFromServer: optCodeVerification,
      }
    }
  }
}
// Get all users
export async function getAll() {
  return await models.User.findAll({ order: [["id", "DESC"]] })
}

// Get User by slug
export async function getBySlug(parentValue, { slug }) {
  const user = await models.User.findOne({ where: { slug } })

  if (!user) {
    // User does not exists
    throw new Error(
      "Il semble que l'utilisateur que vous recherchez n'existe pas ou a été retiré."
    )
  } else {
    return user
  }
}

// Get User by Role
export async function getUserByRole(parentValue, { role }) {
  const user = await models.User.findAll({
    where: { role },
    order: [["createdAt", "DESC"]],
  })
  if (!user) {
    // User does not exists
    throw new Error(
      "Il semble que l'utilisateur que vous recherchez n'existe pas ou a été retiré."
    )
  } else {
    return user
  }
}

export async function verifyIfTokenCode(
  parentValue,
  { email, registrationToken }
) {
  const user = await models.User.findOne({ where: { email } })
  if (!user) {
    // User does not exists
    throw new Error(
      "Nous n'avons aucun utilisateur enregistré avec cette adresse e-mail. Inscrivez vous s'il vous plait."
    )
  } else {
    const userDetails = user.get()

    if (registrationToken !== userDetails.registrationToken) {
      // Incorrect email
      throw new Error(
        "Désolé, le token que vous avez entré est incorrect. Veuillez réessayer"
      )
    } else {
      const tokenCodeVerification = "is ok"

      return {
        messageFromServer: tokenCodeVerification,
      }
    }
  }
}

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
}

// Delete
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}

// User genders
export async function getGenders() {
  return Object.values(params.user.gender)
}

// User Departement
export async function getDepartement() {
  return Object.values(params.user.departement)
}

export async function getActiviteCategorieTypes() {
  return Object.values(params.categorie_activite.types)
}
export async function getDepartementNomsTypes() {
  return Object.values(params.user.departement)
}

export async function getVilleNomsTypes() {
  return Object.values(params.user.ville)
}
