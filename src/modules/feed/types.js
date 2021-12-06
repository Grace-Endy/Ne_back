// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import {UserType} from '../user/types'

// Feed typee
const FeedType = new GraphQLObjectType({
  name: 'feed',
  description: 'Feed Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    categorie: { type: GraphQLInt },
	  gender: { type: GraphQLString },
    departement: { type: GraphQLInt },
    ville: { type: GraphQLInt },
    position: { type: GraphQLString },
    image: { type: GraphQLString },
    image2: { type: GraphQLString },
    image3: { type: GraphQLString },
    identity: {type: GraphQLString },
    description: { type: GraphQLString },
    visible: { type: GraphQLString },
    delai: { type: GraphQLString },
    date_delai: { type: GraphQLString },
    show_delai: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// User Gender type
const FeedTypesType = new GraphQLObjectType({
  name: 'feedTypesType',
  description: 'User Types Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})
// User Categorie Evenement type
const FeedCategorieTypesType = new GraphQLObjectType({
  name: 'feedCategorieTypesType',
  description: 'User FeedCategorie Type',

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
export { FeedType, FeedTypesType,FeedCategorieTypesType,DepartementTypesType,VilleTypesType }
