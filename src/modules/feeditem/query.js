// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Importss
import { FeeditemType, FeeditemTypesType  } from './types'
import { getAll, getById, getRelated,getRelatedByCategorie, getRelatedByCategorieAndFeed, getRelatedByCategorieAndId, getTypes } from './resolvers'

// Feeditem All
export const feeditems = {
  type: new GraphQLList(FeeditemType),
  resolve: getAll
}

// Feeditem By ID
export const feeditemById = {
  type: FeeditemType,
  args: {
    feeditemId: { type: GraphQLInt }
  },
  resolve: getById
}

// Feeditems Related by categorie
export const feeditemsRelatedByCategorie = {
  type: new GraphQLList(FeeditemType),
  args: {
    categorieId: { type: GraphQLInt }
  },
  resolve: getRelatedByCategorie
}

export const feeditemsRelatedByCategorieAndId = {
  type: new GraphQLList(FeeditemType),
  args: {
    categorieId: { type: GraphQLInt },
    feeditemId: { type: GraphQLInt }
  },
  resolve: getRelatedByCategorieAndId
}
export const feeditemsRelatedByCategorieAndFeed = {
  type: new GraphQLList(FeeditemType),
  args: {
    categorieId: { type: GraphQLInt },
    feedId: { type: GraphQLInt }
  },
  resolve: getRelatedByCategorieAndFeed
}
// Feeditem Types
export const feeditemTypes = {
  type: new GraphQLList(FeeditemTypesType),
  resolve: getTypes
}
