// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import {UserType} from '../user/types'

// Commande type
const CommandeType = new GraphQLObjectType({
  name: 'commande',
  description: 'Commande Type',

  fields: () => ({
    id: { type: GraphQLInt }, 
    commande_code: { type: GraphQLString },
    produits: { type: GraphQLString },
    livreur: { type: UserType },
	  adresse_client: { type: GraphQLString },
    user: {type: UserType},
    adresse_vendeur: { type: GraphQLString },
    prix_total: { type: GraphQLString },
    phone1: { type: GraphQLString },
    phone2: { type: GraphQLString },
    email1: { type: GraphQLString },
    email2: { type: GraphQLString },
    status: { type: GraphQLInt },
    payment_status: { type: GraphQLInt },
    date_arrival: { type: GraphQLString },
    comment: { type: GraphQLString },
    payment_type: { type: GraphQLString },
    livraison_cost: { type: GraphQLString },
    departement1: { type: GraphQLInt },
    ville1: { type: GraphQLInt },
    departement2: { type: GraphQLInt },
    ville2: { type: GraphQLInt },
    system_fees: { type: GraphQLString },
    livraison_duree: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export { CommandeType}