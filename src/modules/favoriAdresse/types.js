// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'
import {AdresseType} from '../adresse/types'

// FavoriAdresse type
const FavoriAdresseType = new GraphQLObjectType({
  name: 'favoriAdresse',
  description: 'FavoriAdresse Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    adress: { type: AdresseType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default FavoriAdresseType