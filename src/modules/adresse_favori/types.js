// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'
import {AdresseType} from '../adresse/types'

// Adresse_favori type
const Adresse_favoriType = new GraphQLObjectType({
  name: 'adresse_favori',
  description: 'Adresse_favori Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    adresse: { type: AdresseType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default Adresse_favoriType