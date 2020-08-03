// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import CalculateurType from './types'
import { getAll, getByUser, get } from './resolvers'

// Calculateurs All
export const calculateurs = {
  type: new GraphQLList(CalculateurType),
  resolve: getAll
}

// Calculateurs by user
export const calculateursByUser = {
  type: new GraphQLList(CalculateurType),
  resolve: getByUser
}

// Calculateur By id
export const calculateur = {
  type: CalculateurType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}