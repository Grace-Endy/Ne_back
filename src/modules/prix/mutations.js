// Imports
import { GraphQLString,GraphQLInt } from 'graphql'

// App Imports
import {PrixType} from './types'
import { create,update, remove } from './resolvers'
 
// prix create
export const prixCreate = {
  type: PrixType,
  args: {
    besoinId: {
      name: 'besoinId',
      type: GraphQLInt
    },
    adresseId: {
      name: 'adresseId',
      type: GraphQLInt
    },
    prix_unite: {
      name: 'prix_unite',
      type: GraphQLString
    },
    prix_unite_devise: {
      name: 'prix_unite_devise',
      type: GraphQLString
    },
    prix_stock: {
      name: 'prix_stock',
      type: GraphQLString
    },
    prix_stock_devise: {
      name: 'prix_stock_devise',
      type: GraphQLString
    },
    stock_unite: {
      name: 'stock_unite',
      type: GraphQLString
    },
    vendeur: {
      name: 'vendeur',
      type: GraphQLString
    },
    vendeur_slug: {
      name: 'vendeur_slug',
      type: GraphQLString
    },

    adresse_vendeur: {
      name: 'adresse_vendeur',
      type: GraphQLString
    },

    phone_vendeur: {
      name: 'phone_vendeur',
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
  },
  resolve: create
}

export const prixUpdate = {
  type: PrixType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    prix_unite: {
      name: 'prix_unite',
      type: GraphQLString
    },
    prix_unite_devise: {
      name: 'prix_unite_devise',
      type: GraphQLString
    },
    prix_stock: {
      name: 'prix_stock',
      type: GraphQLString
    },
    prix_stock_devise: {
      name: 'prix_stock_devise',
      type: GraphQLString
    },
    stock_unite: {
      name: 'stock_unite',
      type: GraphQLString
    },
    vendeur: {
      name: 'vendeur',
      type: GraphQLString
    },
    vendeur_slug: {
      name: 'vendeur_slug',
      type: GraphQLString
    },
    adresse_vendeur: {
      name: 'adresse_vendeur',
      type: GraphQLString
    },

    phone_vendeur: {
      name: 'phone_vendeur',
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
  },
  resolve: update
}
// Prix remove
export const prixRemove = {
  type: PrixType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}