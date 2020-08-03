// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import FavoriType from './types'
import { getAll, getByUser, get } from './resolvers'

// Favoris All
export const favoris = {
  type: new GraphQLList(FavoriType),
  resolve: getAll
}

// Subscriptions by user
export const favorisByUser = {
  type: new GraphQLList(FavoriType),
  resolve: getByUser
}

// Subscription By id
export const favori = {
  type: FavoriType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}