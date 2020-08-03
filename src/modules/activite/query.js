// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Importss
import { ActiviteType, ActiviteTypesType,ActiviteCategorieTypesType,DepartementTypesType, VilleTypesType } from './types'
import { getAll, getBySlug,search,searchAll, getById,getByUser, getRelated,getRelatedByCategorie, getTypes,getActiviteCategorieTypes,getDepartementNomsTypes,getVilleNomsTypes } from './resolvers'

// Activites All
export const activites = {
  type: new GraphQLList(ActiviteType),
  resolve: getAll
}

export const searchActivites = {
  type: new GraphQLList(ActiviteType),
  args: {
    name: { type: GraphQLString }
  },
  resolve: search
}

export const searchActivitesALl = {
  type: new GraphQLList(ActiviteType),
  args: {
    name: { type: GraphQLString }
  },
  resolve: searchAll
}

// Activite By slug
export const activite = {
  type: ActiviteType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Activite By ID
export const activiteById = {
  type: ActiviteType,
  args: {
    activiteId: { type: GraphQLInt }
  },
  resolve: getById
}

// Activites by user
export const activitesByUser = {
  type: new GraphQLList(ActiviteType),
  resolve: getByUser
}
// Activites Related
export const activitesRelated = {
  type: new GraphQLList(ActiviteType),
  args: {
    activiteId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// Activites Related by categorie
export const activitesRelatedByCategorie = {
  type: new GraphQLList(ActiviteType),
  args: {
    categorieId: { type: GraphQLInt }
  },
  resolve: getRelatedByCategorie
}
// Activite Types
export const activiteTypes = {
  type: new GraphQLList(ActiviteTypesType),
  resolve: getTypes
}


// Categorie Activite Types
export const categorieActiviteTypes = {
  type: new GraphQLList(ActiviteCategorieTypesType),
  resolve: getActiviteCategorieTypes
}

// Departement Types
export const departementNomsTypes = {
  type: new GraphQLList(DepartementTypesType),
  resolve: getDepartementNomsTypes
}

// Ville Types
export const villeNomsTypes = {
  type: new GraphQLList(VilleTypesType),
  resolve: getVilleNomsTypes
}