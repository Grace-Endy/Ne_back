// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { AbonnementType, AbonnementTypesType } from './types'
import { getAll, getBySlug,search,searchAll,getNotificationAbonnements, getByUser, getById, getRelatedByUserId,getTypes } from './resolvers'

// Abonnements All
export const abonnements = {
  type: new GraphQLList(AbonnementType),
  resolve: getAll
}

export const abonnementsNotifications = {
  type: new GraphQLList(AbonnementType),
  resolve: getNotificationAbonnements
}

export const searchAbonnements = {
  type: new GraphQLList(AbonnementType),
  args: {
    name: { type: GraphQLString }
  },
  resolve: search
}

export const searchAbonnementsALl = {
  type: new GraphQLList(AbonnementType),
  args: {
    name: { type: GraphQLString }
  },
  resolve: searchAll
}

// Abonnement By ID
export const abonnementById = {
  type: AbonnementType,
  args: {
    abonnementId: { type: GraphQLInt }
  },
  resolve: getById
}

// Abonnements by user
export const abonnementsByUser = {
  type: new GraphQLList(AbonnementType),
  resolve: getByUser
}

// Abonnements Related by UserId
export const abonnementsRelatedByUserId = {
  type: new GraphQLList(AbonnementType),
  args: {
    userId: { type: GraphQLInt }
  },
  resolve: getRelatedByUserId
}

// Abonnement Types
export const abonnementTypes = {
  type: new GraphQLList(AbonnementTypesType),
  resolve: getTypes
}
