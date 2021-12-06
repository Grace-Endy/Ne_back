// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { BesoinType, BesoinTypesType,DepartementTypesType, VilleTypesType  } from './types'
import { getAll,getAllBesoins, getBySlug,search,searchAll,getNotificationBesoins,getRelatedByCategoriePage, getByUser, getById,getAccueilBesoins,getAccueilServices,getServicesRelated, getRelated, getRelatedByCategorie, getRelatedByUserId, getRelatedByAdresse, getTypes,getDepartementNomsTypes,getVilleNomsTypes } from './resolvers'

// Besoins All
export const besoins = {
  type: new GraphQLList(BesoinType),
  resolve: getAll
}

export const listBesoins = {
  type: new GraphQLList(BesoinType),
  args: {
    offSetId: { type: GraphQLInt }
  },
  resolve: getAllBesoins
}


//Accueil Besoins List
export const accueilBesoins = {
  type: new GraphQLList(BesoinType),
  resolve: getAccueilBesoins
}

export const besoinsNotifications = {
  type: new GraphQLList(BesoinType),
  resolve: getNotificationBesoins
}

export const searchBesoins = {
  type: new GraphQLList(BesoinType),
  args: {
    name: { type: GraphQLString }
  },
  resolve: search
}

export const searchBesoinsALl = {
  type: new GraphQLList(BesoinType),
  args: {
    name: { type: GraphQLString }
  },
  resolve: searchAll
}

// Besoin By slug
export const besoin = {
  type: BesoinType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}
// Besoins Related by categorie Page  
export const besoinsRelatedByCategoriePage = {  
    type: new GraphQLList(BesoinType),  
    args: { 
      categorieId: { type: GraphQLInt } 
    },  
    resolve: getRelatedByCategoriePage  
  }
// Besoin By ID
export const besoinById = {
  type: BesoinType,
  args: {
    besoinId: { type: GraphQLInt }
  },
  resolve: getById
}

// Besoins by user
export const besoinsByUser = {
  type: new GraphQLList(BesoinType),
  resolve: getByUser
}

// Besoins Related
export const besoinsRelated = {
  type: new GraphQLList(BesoinType),
  args: {
    besoinId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// Besoins Related by categorie
export const besoinsRelatedByCategorie = {
  type: new GraphQLList(BesoinType),
  args: {
    categorieId: { type: GraphQLInt }
  },
  resolve: getRelatedByCategorie
}

// Besoins Related by UserId
export const besoinsRelatedByUserId = {
  type: new GraphQLList(BesoinType),
  args: {
    userId: { type: GraphQLInt }
  },
  resolve: getRelatedByUserId
}

// Besoins Related by UserId
export const besoinsRelatedByAdresse = {
  type: new GraphQLList(BesoinType),
  args: {
    adresseId: { type: GraphQLInt }
  },
  resolve: getRelatedByAdresse
}

export const accueilServices = {
  type: new GraphQLList(BesoinType),
  args: {
    gender: { type: GraphQLString }
  },
  resolve: getAccueilServices
}

export const servicesRelated = {
  type: new GraphQLList(BesoinType),
  args: {
    gender: { type: GraphQLString },
    categorieId: { type: GraphQLInt }
  },
  resolve: getServicesRelated
}

// Besoin Types
export const besoinTypes = {
  type: new GraphQLList(BesoinTypesType),
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