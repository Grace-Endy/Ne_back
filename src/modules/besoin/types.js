// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import {UserType} from '../user/types'

// Besoin type
const BesoinType = new GraphQLObjectType({
  name: 'besoin',
  description: 'Besoin Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    categorie: { type: GraphQLInt },
	  gender: { type: GraphQLInt },
    user: {type: UserType},
    prix_unite: { type: GraphQLString },
    prix_unite_devise: { type: GraphQLString },
    prix_stock: { type: GraphQLString },
    prix_stock_devise: { type: GraphQLString },
    stock_unite: { type: GraphQLString },
    image: { type: GraphQLString },
    image2: { type: GraphQLString },
    image3: { type: GraphQLString },
    vendeur: { type: GraphQLString },
    adresse_vendeur: { type: GraphQLString },
    phone_vendeur: { type: GraphQLString },
    departement: { type: GraphQLInt },
    ville: { type: GraphQLInt },
    specification: { type: GraphQLString },
    rating: { type: GraphQLString },
    vue: { type: GraphQLString },
    likes: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// User Gender type
const BesoinTypesType = new GraphQLObjectType({
  name: 'besoinTypesType',
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
export { BesoinType, BesoinTypesType,DepartementTypesType,VilleTypesType }