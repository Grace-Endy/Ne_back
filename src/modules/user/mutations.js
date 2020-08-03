// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create,update, remove } from './resolvers'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

export const userUpdate = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },
    slug: {
      name: 'slug',
      type: GraphQLString
    },
    numero_principal: {
      name: 'numero_principal',
      type: GraphQLString
    },
    numero_whatsapp: {
      name: 'numero_whatsapp',
      type: GraphQLString
    },
    departement: {
      name: 'departement',
      type: GraphQLInt
    },
    ville: {
      name: 'ville',
      type: GraphQLInt
    },
    adresse: {
      name: 'adresse',
      type: GraphQLString
    },
    image: {
      name: 'image',
      type: GraphQLString
    },
    type_de_compte: {
      name: 'type_de_compte',
      type: GraphQLString
    }
  },
  resolve: update
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}