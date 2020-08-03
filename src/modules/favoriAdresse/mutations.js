// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import FavoriAdresseType from './types'
import { create, remove } from './resolvers'

// FavoriAdresse create
export const favoriAdresseCreate = {
  type: FavoriAdresseType,
  args: {
    adressId: {
      name: 'adressId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// FavoriAdresse remove
export const favoriAdresseRemove = {
  type: FavoriAdresseType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}