// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// Create
export async function create(parentValue, { name, email,slug, password }) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    return await models.User.create({
      name,
      email,
      slug,
      password: passwordHashed
    })
  } else {
    // User exists
    throw new Error("L'e-mail ${ email } est déjà enregistré. Veuillez essayer de vous connecter.")
  }
}

// Update User
export async function update(parentValue, { id, name, slug, email,numero_principal,numero_whatsapp,departement,ville,adresse,image,type_de_compte }, { auth }) {
  if(auth.user) {
    return await models.User.update(
      {
      name, 
      slug, 
      email,
      numero_principal,
      numero_whatsapp,
      departement,
      ville,
      adresse,
      image,
      type_de_compte
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation Interdite.')
  }
}

export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error("Nous n'avons aucun utilisateur enregistré avec l'adresse e-mail ${email}. Inscrivez vous s'il vous plait.")
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error("Désolé, le mot de passe que vous avez entré est incorrect. Veuillez réessayer.")
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        image: userDetails.image,
        slug:userDetails.slug,
        createAt:userDetails.createAt,
        adresse: userDetails.adresse,
        ville: userDetails.ville,
        departement: userDetails.departement,
        role: userDetails.role
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Get all users
export async function getAll() {
  return await models.User.findAll({ order: [['id', 'DESC']]
   })
}

// Get User by slug
export async function getBySlug(parentValue, { slug }) {
  const user = await models.User.findOne({ where: { slug } })

  if (!user) {
    // User does not exists
    throw new Error("Il semble que l'utilisateur que vous recherchez n'existe pas ou a été retiré.")
  } else {
    return user
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


