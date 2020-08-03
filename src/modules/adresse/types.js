// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import {UserType} from '../user/types'

// Adresse type
const AdresseType = new GraphQLObjectType({
  name: 'adresse',
  description: 'Adresse Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    type: { type: GraphQLInt },
    departement: { type: GraphQLInt },
    ville: { type: GraphQLInt },
    adresse: { type: GraphQLString },
    vue: { type: GraphQLString },
    besoinId: { type: GraphQLString },
    user: {type: UserType},
    telephone: { type: GraphQLString },
    email: { type: GraphQLString },
    whatsapp: { type: GraphQLString },
    facebook: { type: GraphQLString},
    youtube: { type: GraphQLString },
    twitter: { type: GraphQLString },
    gender: { type: GraphQLInt },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    image2: { type: GraphQLString },
    image3: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// User Gender type
const AdresseTypesType = new GraphQLObjectType({
  name: 'adresseTypesType',
  description: 'User Types Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

const DepartementTypesType = new GraphQLObjectType({
  name: 'departementTypesType',
  description: 'User Departement Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})
// User Ville type
const VilleTypesType = new GraphQLObjectType({
  name: 'villeTypesType',
  description: 'User Ville Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

export { AdresseType, AdresseTypesType,DepartementTypesType,VilleTypesType }