// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Importss
import { FeedType, FeedTypesType,FeedCategorieTypesType,DepartementTypesType, VilleTypesType } from './types'
import { getAll, getBySlug,search,searchAll, getById,getByUser, getRelated,getRelatedByCategorie,getRelatedByCategoriePage,getFeedAVenir, getRelatedByCategorieAndId, getTypes,getFeedCategorieTypes,getDepartementNomsTypes,getVilleNomsTypes } from './resolvers'

// Feeds All
export const feeds = {
  type: new GraphQLList(FeedType),
  resolve: getAll
}

export const searchFeeds = {
  type: new GraphQLList(FeedType),
  args: {
    name: { type: GraphQLString }
  },
  resolve: search
}

export const searchFeedsALl = {
  type: new GraphQLList(FeedType),
  args: {
    name: { type: GraphQLString }
  },
  resolve: searchAll
}

// Feed By slug
export const feed = {
  type: FeedType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Feed By ID
export const feedById = {
  type: FeedType,
  args: {
    feedId: { type: GraphQLInt }
  },
  resolve: getById
}

// Feeds by user
export const feedsByUser = {
  type: new GraphQLList(FeedType),
  resolve: getByUser
}
// Feeds Related
export const feedsRelated = {
  type: new GraphQLList(FeedType),
  args: {
    feedId: { type: GraphQLInt }
  },
  resolve: getRelated
}

export const feedAVenir = {
  type: new GraphQLList(FeedType),
  resolve: getFeedAVenir
}

// Feed Related by categorie
export const feedsRelatedByCategorie = {
  type: new GraphQLList(FeedType),
  args: {
    categorieId: { type: GraphQLInt }
  },
  resolve: getRelatedByCategorie
}

// Page of Feeds Related by categorie
export const feedsRelatedByCategoriePage = {
  type: new GraphQLList(FeedType),
  args: {
    categorieId: { type: GraphQLInt }
  },
  resolve: getRelatedByCategoriePage
}

export const feedsRelatedByCategorieAndId = {
  type: new GraphQLList(FeedType),
  args: {
    categorieId: { type: GraphQLInt },
    feedId: { type: GraphQLInt }
  },
  resolve: getRelatedByCategorieAndId
}
// Feed Types
export const feedTypes = {
  type: new GraphQLList(FeedTypesType),
  resolve: getTypes
}


// Categorie Feed Types
export const categorieFeedTypes = {
  type: new GraphQLList(FeedCategorieTypesType),
  resolve: getFeedCategorieTypes
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