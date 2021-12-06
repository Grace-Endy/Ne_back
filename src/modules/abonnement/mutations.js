// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { AbonnementType } from './types'
import { create, update, remove } from './resolvers'

// abonnement create
export const abonnementCreate = {
  type: AbonnementType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    nombre_de_mois: {
      name: 'nombre_de_mois',
      type: GraphQLString
    },

    prix: {
      name: 'prix',
      type: GraphQLString
    },
    date_commencement: {
      name: 'date_commencement',
      type: GraphQLString
    },
	  date_fin: {
      name: 'date_fin',
      type: GraphQLString
    },

    date_request: {
      name: 'date_request',
      type: GraphQLString
    },
    
    phone_client: {
      name: 'phone_client',
      type: GraphQLString
    },
    
    nombreProduits: {
      name: 'nombreProduits',
      type: GraphQLString
    },
    
    nombreAdresse: {
      name: 'nombreAdresse',
      type: GraphQLString
    },
    
    nombreActivites: {
      name: 'nombreActivites',
      type: GraphQLString
    },
    
    publicite: {
      name: 'publicite',
      type: GraphQLString
    },
    
    publiciteInfo: {
      name: 'publiciteInfo',
      type: GraphQLString
    },
    
    numberoWhatsapp: {
      name: 'numberoWhatsapp',
      type: GraphQLString
    }
  },
  resolve: create
}

// Abonnement update
export const abonnementUpdate = {
  type: AbonnementType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    name: {
      name: 'name',
      type: GraphQLString
    },

    nombre_de_mois: {
      name: 'nombre_de_mois',
      type: GraphQLString
    },
    prix: {
      name: 'prix',
      type: GraphQLString
    },
    date_commencement: {
      name: 'date_commencement',
      type: GraphQLString
    },
    date_fin: {
      name: 'date_fin',
      type: GraphQLString
    },

    date_request: {
      name: 'date_request',
      type: GraphQLString
    },
    
    phone_client: {
      name: 'phone_client',
      type: GraphQLString
    },
    
    nombreProduits: {
      name: 'nombreProduits',
      type: GraphQLString
    },
    
    nombreAdresse: {
      name: 'nombreAdresse',
      type: GraphQLString
    },
    
    nombreActivites: {
      name: 'nombreActivites',
      type: GraphQLString
    },
    
    publicite: {
      name: 'publicite',
      type: GraphQLString
    },
    
    publiciteInfo: {
      name: 'publiciteInfo',
      type: GraphQLString
    },
    
    numberoWhatsapp: {
      name: 'numberoWhatsapp',
      type: GraphQLString
    }
  },
  resolve: update
}

// Abonnement remove
export const abonnementRemove = {
  type: AbonnementType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}