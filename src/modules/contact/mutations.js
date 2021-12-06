// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Importss
import { ContactType } from './types'
import { create, update, remove } from './resolvers'

// contact create
export const contactCreate = {
  type: ContactType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    slug: {
      name: 'slug',
      type: GraphQLString
    },

    adresse_abonne: {
      name: 'adresse_abonne',
      type: GraphQLString
    },

    sexe: {
      name: 'sexe',
      type: GraphQLString
    },
	  date_de_naissance: {
      name: 'date_de_naissance',
      type: GraphQLString
    },
    departement: {
      name: 'departement',
      type: GraphQLString
    },
    ville: {
      name: 'ville',
      type: GraphQLString
    },
    telephone: {
      name: 'telephone',
      type: GraphQLString
    },
	  interet: {
      name: 'interet',
      type: GraphQLString
    },
  },
  resolve: create
}

// Contact update
export const contactUpdate = {
  type: ContactType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },
slug: {
      name: 'slug',
      type: GraphQLString
    },

    adresse_abonne: {
      name: 'adresse_abonne',
      type: GraphQLString
    },

    sexe: {
      name: 'sexe',
      type: GraphQLString
    },
    date_de_naissance: {
      name: 'date_de_naissance',
      type: GraphQLString
    },
    departement: {
      name: 'departement',
      type: GraphQLString
    },
    ville: {
      name: 'ville',
      type: GraphQLString
    },
    telephone: {
      name: 'telephone',
      type: GraphQLString
    },
    interet: {
      name: 'interet',
      type: GraphQLString
    },
  },
  resolve: update
}

// Contact remove
export const contactRemove = {
  type: ContactType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}