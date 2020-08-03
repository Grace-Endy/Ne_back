// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import FavoriType from './types'
import { create, remove } from './resolvers'

// Favori create
export const favoriCreate = {
  type: FavoriType,
  args: {
    besoinId: {
      name: 'besoinId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Favori remove
export const favoriRemove = {
  type: FavoriType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}