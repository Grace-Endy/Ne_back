// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'
import {BesoinType} from '../besoin/types'

// Favori type
const FavoriType = new GraphQLObjectType({
  name: 'favori',
  description: 'Favori Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    besoin: { type: BesoinType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default FavoriType