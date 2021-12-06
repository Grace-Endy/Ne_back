// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { CommandeType, CommandeTypesType, } from './types'
import { getAll, getByCommandeCode,getNotificationCommandes, getByUser,getByLivreur, getById, getRelatedByCategorie,getRelatedByCategoriePage, getRelatedByUserId } from './resolvers'

// COmmandes All
export const commandes = {
  type: new GraphQLList(CommandeType),
  resolve: getAll
}

export const commandesNotifications = {
  type: new GraphQLList(CommandeType),
  resolve: getNotificationCommandes
}

// Commande By commande_id
export const commande = {
  type: CommandeType,
  args: {
    commande_code: { type: GraphQLString }
  },
  resolve: getByCommandeCode
}

// Commande By ID
export const commandeById = {
  type: CommandeType,
  args: {
    commandeId: { type: GraphQLInt }
  },
  resolve: getById
}

// Commandes by user
export const commandesByUser = {
  type: new GraphQLList(CommandeType),
  resolve: getByUser
}

export const commandesByLivreur = {
  type: new GraphQLList(CommandeType),
  resolve: getByLivreur
}

// Commandes Related by categorie
export const commandesRelatedByCategorie = {
  type: new GraphQLList(CommandeType),
  args: {
    categorieId: { type: GraphQLInt }
  },
  resolve: getRelatedByCategorie
}

// Commandes Related by categorie Page
export const commandesRelatedByCategoriePage = {
  type: new GraphQLList(CommandeType),
  args: {
    categorieId: { type: GraphQLInt }
  },
  resolve: getRelatedByCategoriePage
}

// Commandes Related by UserId
export const commandesRelatedByUserId = {
  type: new GraphQLList(CommandeType),
  args: {
    userId: { type: GraphQLInt }
  },
  resolve: getRelatedByUserId
}

