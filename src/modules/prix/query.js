// Imports
import { GraphQLInt,GraphQLString, GraphQLList } from 'graphql'

// App Imports

import {PrixType, PrixTypesType, DepartementTypesType, VilleTypesType } from './types' 
import { getAll, getByUser, get,getRelatedByBesoin,getRelatedByVendeurSlug, getTypes,getDepartementNomsTypes,getVilleNomsTypes } from './resolvers'

// Prixs All 
export const prixs = { 
  type: new GraphQLList(PrixType),
  resolve: getAll
}

// prix by user
export const prixsByUser = {
  type: new GraphQLList(PrixType),
  resolve: getByUser
}

// prix by besoinId
export const prixsRelatedByBesoin = {
  type: new GraphQLList(PrixType),
  args: {
    besoinId: { type: GraphQLInt }
  },
  resolve: getRelatedByBesoin
}

//prix by vendeur_slug
export const prixsRelatedByVendeurSlug = {
  type: PrixType,
  args: {
    vendeur_slug: { type: GraphQLString }
  },
  resolve: getRelatedByVendeurSlug
}

// prix By id
export const prixById = {
  type: PrixType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}

// Prix Types
export const prixTypes = {
  type: new GraphQLList(PrixTypesType),
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