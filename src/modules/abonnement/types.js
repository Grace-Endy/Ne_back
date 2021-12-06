// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import {UserType} from '../user/types'

// Abonnement type
const AbonnementType = new GraphQLObjectType({
  name: 'abonnement',
  description: 'Abonnement Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    nombre_de_mois: { type: GraphQLString },
    prix: { type: GraphQLString },
    user: {type: UserType},
    date_commencement: { type: GraphQLString },
    status: { type: GraphQLString },
    date_fin: { type: GraphQLString },
    date_request: { type: GraphQLString },
    phone_client: { type: GraphQLString },
    nombreProduits: { type: GraphQLString },
    nombreAdresse: { type: GraphQLString },
    nombreActivites: { type: GraphQLString },
    publicite: { type: GraphQLString },
    publiciteInfo: { type: GraphQLString },
    numberoWhatsapp: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// User Gender type
const AbonnementTypesType = new GraphQLObjectType({
  name: 'abonnementTypesType',
  description: 'User Types Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

export { AbonnementType, AbonnementTypesType }