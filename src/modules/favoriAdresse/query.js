// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import FavoriAdresseType from './types'
import { getAll, getByUser, get } from './resolvers'

// FavoriAdresse All
export const favorisAdresse = {
  type: new GraphQLList(FavoriAdresseType),
  resolve: getAll
}

// FavoriAdresse by user
export const favorisAdresseByUser = {
  type: new GraphQLList(FavoriAdresseType),
  resolve: getByUser
}

// FavoriAdresse By id
export const favoriAdresse = {
  type: FavoriAdresseType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}