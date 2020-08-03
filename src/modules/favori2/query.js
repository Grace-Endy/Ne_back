// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import Favori2Type from './types'
import { getAll, getByUser, get } from './resolvers'

// Favoris2 All
export const favoris2 = {
  type: new GraphQLList(Favori2Type),
  resolve: getAll
}

// Subscriptions by user
export const favoris2ByUser = {
  type: new GraphQLList(Favori2Type),
  resolve: getByUser
}

// Subscription By id
export const favori2 = {
  type: Favori2Type,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}