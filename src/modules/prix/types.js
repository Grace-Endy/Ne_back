// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import {UserType } from '../user/types'
import {BesoinType} from '../besoin/types'
import {AdresseType} from '../adresse/types'

// Prix type
const PrixType = new GraphQLObjectType({
  name: 'prix',
  description: 'Prix Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: {type: UserType},
    adresse: { type: AdresseType },
    prix_unite: { type: GraphQLString },
    prix_unite_devise: { type: GraphQLString },
    prix_stock: { type: GraphQLString },
    prix_stock_devise: { type: GraphQLString },
    stock_unite: { type: GraphQLString },
    besoin: { type: BesoinType },
    vendeur: { type: GraphQLString },
    vendeur_slug: { type: GraphQLString },
    adresse_vendeur: { type: GraphQLString },
    phone_vendeur: { type: GraphQLString },
    departement: { type: GraphQLInt },
    ville: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

const PrixTypesType = new GraphQLObjectType({
  name: 'prixTypesType',
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
    name: { type: GraphQLString },
    departement: { type: GraphQLInt }
  })
})

export { PrixType,PrixTypesType, DepartementTypesType,VilleTypesType }