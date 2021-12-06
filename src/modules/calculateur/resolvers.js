// App Imports
import models from "../../setup/models"

// Get Calculateur by ID
export async function get(parentValue, { id }) {
  return await models.Calculateur.findOne({
    where: { id },
    include: [
      { model: models.User, as: "user" },
      { model: models.Besoin, as: "besoin" },
    ],
  })
}

// Get Calculateur by user
export async function getByUser(parentValue, {}, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.Calculateur.findAll({
      where: {
        userId: auth.user.id,
        devis_categorie: 1,
      },
      include: [
        { model: models.User, as: "user" },
        { model: models.Besoin, as: "besoin" },
      ],
    })
  } else {
    throw new Error(
      "S’il vous plaît connectez-vous pour afficher votre Calculateur."
    )
  }
}

// Get Calculateur by user
export async function getLastItemByUser(parentValue, {}, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.Calculateur.findAll({
      where: {
        userId: auth.user.id,
      },
      limit: 1,
      order: [["createdAt", "DESC"]],
      include: [
        { model: models.User, as: "user" },
        { model: models.Besoin, as: "besoin" },
      ],
    })
  } else {
    throw new Error(
      "S’il vous plaît connectez-vous pour afficher votre Calculateur."
    )
  }
}
// Get Panier, Devis items by devis_categorie
export async function getRelatedByDevisCategorie(
  parentValue,
  { devis_categorie },
  { auth }
) {
  if (auth.user && auth.user.id > 0) {
    return await models.Calculateur.findAll({
      where: {
        userId: auth.user.id,
        devis_categorie: devis_categorie,
      },
      include: [
        { model: models.User, as: "user" },
        { model: models.Besoin, as: "besoin" },
      ],
      order: [["createdAt", "DESC"]],
    })
  } else {
    throw new Error(
      "S’il vous plaît connectez-vous pour afficher vos elements."
    )
  }
}

// Get all Calculateur
export async function getAll() {
  return await models.Calculateur.findAll({
    include: [
      { model: models.User, as: "user" },
      { model: models.Besoin, as: "besoin" },
    ],
  })
}

// Create Calculateur
export async function create(
  parentValue,
  { besoinId, devis_categorie },
  { auth }
) {
  if (auth.user && auth.user.id > 0) {
    const calculateur = await models.Calculateur.findOne({
      where: { besoinId, userId: auth.user.id, devis_categorie },
    })
    if (!calculateur) {
      return await models.Calculateur.create({
        besoinId,
        userId: auth.user.id,
        devis_categorie,
        fournisseur:1
      })
    } else {
      // User exists
      throw new Error(`Vous avez déjà ajouté ce produit à votre Calculateur.`)
    }
  } else {
    throw new Error(
      "S’il vous plaît connectez-vous, ou s'inscrire pour pouvoir ajouter ce besoin dans le calculateur."
    )
  }
}

// Update calculateur
export async function update(
  parentValue,
  { id, quantity, unite, fournisseur, devis_categorie },
  { auth }
) {
  if (auth.user) {
    return await models.Calculateur.update(
      {
        quantity,
        unite,
        fournisseur,
        devis_categorie,
        userId: auth.user.id,
      },
      { where: { id } }
    )
  } else {
    throw new Error("Operation Interdite.")
  }
}

// Delete Calculateur
export async function remove(parentValue, { id }, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.Calculateur.destroy({
      where: { id, userId: auth.user.id },
    })
  } else {
    throw new Error("Operation Interdite.")
  }
}

export async function removeMultiple(
  parentValue,
  { devis_categorie },
  { auth }
) {
  if (auth.user && auth.user.id > 0) {
    return await models.Calculateur.destroy({
      where: { devis_categorie: devis_categorie, userId: auth.user.id },
    })
  } else {
    throw new Error("Operation Interdite.")
  }
}
