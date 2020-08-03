// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'
import {ActiviteType} from '../activite/types'

// Favori2 type
const Favori2Type = new GraphQLObjectType({
  name: 'favori2',
  description: 'Favori2 Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    activite: { type: ActiviteType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default Favori2Type