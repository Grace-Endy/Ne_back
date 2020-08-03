// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import Adresse_favoriType from './types'
import { getAll, getByUser, get } from './resolvers'

// Adresse_favori All
export const adresse_favoris = {
  type: new GraphQLList(Adresse_favoriType),
  resolve: getAll
}

// Adresse_favori by user
export const adresse_favorisByUser = {
  type: new GraphQLList(Adresse_favoriType),
  resolve: getByUser
}

// Adresse_favori By id
export const adresse_favori = {
  type: Adresse_favoriType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}