// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { AdresseType, AdresseTypesType,DepartementTypesType, VilleTypesType  } from './types'
import { getAll, getBySlug,search,searchAll, getById,getByUser, getRelated, getRelatedByCategorie, getTypes,getDepartementNomsTypes,getVilleNomsTypes } from './resolvers'

// Adresses All
export const adresses = {
  type: new GraphQLList(AdresseType),
  resolve: getAll
}

// Adresses By slug
export const adresse = {
  type: AdresseType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

export const searchAdresses = {
  type: new GraphQLList(AdresseType),
  args: {
    name: { type: GraphQLString }
  },
  resolve: search
}

export const searchAdressesALl = {
  type: new GraphQLList(AdresseType),
  args: {
    name: { type: GraphQLString }
  },
  resolve: searchAll
}

// Adresse By ID
export const adresseById = {
  type: AdresseType,
  args: {
    adresseId: { type: GraphQLInt }
  },
  resolve: getById
}

// Adresses by user
export const adressesByUser = {
  type: new GraphQLList(AdresseType),
  resolve: getByUser
}
// Adresses Related
export const adressesRelated = {
  type: new GraphQLList(AdresseType),
  args: {
    adresseId: { type: GraphQLInt }
  },
  resolve: getRelated
}
// Adresse Related by categorie
export const adressesRelatedByCategorie = {
  type: new GraphQLList(AdresseType),
  args: {
    categorieId: { type: GraphQLInt }
  },
  resolve: getRelatedByCategorie
}
// Adresse Types
export const adresseTypes = {
  type: new GraphQLList(AdresseTypesType),
  resolve: getTypes
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