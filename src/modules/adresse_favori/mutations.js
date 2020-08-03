// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import Adresse_favoriType from './types'
import { create, remove } from './resolvers'

// Adresse_favori create
export const adresse_favoriCreate = {
  type: Adresse_favoriType,
  args: {
    adresseId: {
      name: 'adresseId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Adresse_favori remove
export const adresse_favoriRemove = {
  type: Adresse_favoriType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}