// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { UserType, UserLoginType, UserGenderType, DepartementTypesType, VilleTypesType } from './types'
import { getAll, getById,getBySlug, login, getGenders,getDepartementNomsTypes,getVilleNomsTypes} from './resolvers'

// All
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}
// User By slug
export const userBySlug = {
  type: UserType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}
// Auth
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },
    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}

// Genders
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}

// Departement Types
export const departementNomsTypes = {
  type: new GraphQLList(DepartementTypesType),
  resolve: getDepartementNomsTypes
}

// Ville Types
export const villeNomsTypes = {
  type: new GraphQLList(VilleTypesType),
  resolve: getVilleNomsTypes
}
