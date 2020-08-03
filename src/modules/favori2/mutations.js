// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import Favori2Type from './types'
import { create, remove } from './resolvers'

// Favori2 create
export const favori2Create = {
  type: Favori2Type,
  args: {
    activiteId: {
      name: 'activiteId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Favori remove
export const favori2Remove = {
  type: Favori2Type,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}