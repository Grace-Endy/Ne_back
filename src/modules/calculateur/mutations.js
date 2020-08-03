// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import CalculateurType from './types'
import { create, remove } from './resolvers'

// Calculateur create
export const calculateurCreate = {
  type: CalculateurType,
  args: {
    besoinId: {
      name: 'besoinId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Calculateur remove
export const calculateurRemove = {
  type: CalculateurType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}