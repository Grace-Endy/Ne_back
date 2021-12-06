// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { CommandeType } from './types'
import { create,  update,updateStatus, remove } from './resolvers'

// Commande createe
export const commandeCreate = {
  type: CommandeType,
  args: {
    commande_code: {
      name: 'commande_code',
      type: GraphQLString
    },

    produits: {
      name: 'produits',
      type: GraphQLString
    },

    livreurId: {
      name: 'livreurId',
      type: GraphQLInt
    },
    userId: {
      name: 'userId',
      type: GraphQLInt
    },
	  adresse_client: {
      name: 'adresse_client',
      type: GraphQLString
    },

    adresse_vendeur: {
      name: 'adresse_vendeur',
      type: GraphQLString
    },
    
    prix_total: {
      name: 'prix_total',
      type: GraphQLString
    },
    phone1: {
      name: 'phone1',
      type: GraphQLString
    },
    phone2: {
      name: 'phone2',
      type: GraphQLString
    },
    email1: {
      name: 'email1',
      type: GraphQLString
    },

    email2: {
      name: 'email2',
      type: GraphQLString
    },

    status: {
      name: 'status',
      type: GraphQLInt
    },

    payment_status: {
      name: 'payment_status',
      type: GraphQLInt
    },

    date_arrival: {
      name: 'date_arrival',
      type: GraphQLString
    },

    comment: {
      name: 'comment',
      type: GraphQLString
    },

    departement1: {
      name: 'departement1',
      type: GraphQLInt
    },

    ville1: {
      name: 'ville1',
      type: GraphQLInt
    },
    departement2: {
      name: 'departement2',
      type: GraphQLInt
    },

    ville2: {
      name: 'ville2',
      type: GraphQLInt
    },
    payment_type: {
      name: 'payment_type',
      type: GraphQLString
    },

    livraison_cost: {
      name: 'livraison_cost',
      type: GraphQLString
    },

    system_fees: {
      name: 'system_fees',
      type: GraphQLString
    },

    livraison_duree: {
      name: 'livraison_duree',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Commande update
export const commandeUpdate = {
  type: CommandeType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    commande_code: {
      name: 'commande_code',
      type: GraphQLString
    },

    produits: {
      name: 'produits',
      type: GraphQLString
    },

    livreurId: {
      name: 'livreurId',
      type: GraphQLInt
    },
    userId: {
      name: 'userId',
      type: GraphQLInt
    },
    adresse_client: {
      name: 'adresse_client',
      type: GraphQLString
    },

    adresse_vendeur: {
      name: 'adresse_vendeur',
      type: GraphQLString
    },
    
    prix_total: {
      name: 'prix_total',
      type: GraphQLString
    },
    phone1: {
      name: 'phone1',
      type: GraphQLString
    },
    phone2: {
      name: 'phone2',
      type: GraphQLString
    },
    email1: {
      name: 'email1',
      type: GraphQLString
    },

    email2: {
      name: 'email2',
      type: GraphQLString
    },

    status: {
      name: 'status',
      type: GraphQLInt
    },

    payment_status: {
      name: 'payment_status',
      type: GraphQLInt
    },

    date_arrival: {
      name: 'date_arrival',
      type: GraphQLString
    },

    comment: {
      name: 'comment',
      type: GraphQLString
    },

    departement1: {
      name: 'departement1',
      type: GraphQLInt
    },

    ville1: {
      name: 'ville1',
      type: GraphQLInt
    },
    departement2: {
      name: 'departement2',
      type: GraphQLInt
    },

    ville2: {
      name: 'ville2',
      type: GraphQLInt
    },
    payment_type: {
      name: 'payment_type',
      type: GraphQLString
    },

    livraison_cost: {
      name: 'livraison_cost',
      type: GraphQLString
    },

    system_fees: {
      name: 'system_fees',
      type: GraphQLString
    },

    livraison_duree: {
      name: 'livraison_duree',
      type: GraphQLInt
    }
  },
  resolve: update
}

// Commande update Status
export const commandeUpdateStatus = {
  type: CommandeType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    commande_code: {
      name: 'commande_code',
      type: GraphQLString
    },

    livreurId: {
      name: 'livreurId',
      type: GraphQLInt
    },
    userId: {
      name: 'userId',
      type: GraphQLInt
    },
    email1: {
      name: 'email1',
      type: GraphQLString
    },

    email2: {
      name: 'email2',
      type: GraphQLString
    },

    status: {
      name: 'status',
      type: GraphQLInt
    },

  },
  resolve: updateStatus
}


// Commande remove
export const commandeRemove = {
  type: CommandeType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}