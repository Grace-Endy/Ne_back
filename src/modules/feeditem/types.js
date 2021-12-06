// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import {BesoinType} from '../besoin/types'
import {FeedType} from '../feed/types'
import {ActiviteType} from '../activite/types'
import {AdresseType} from '../adresse/types'

// Feeditem typee
const FeeditemType = new GraphQLObjectType({
  name: 'feeditem',
  description: 'Feeditem Type',

  fields: () => ({
    id: { type: GraphQLInt }, 
    category: { type: GraphQLInt },
    feed: { type: FeedType },
    adress: { type: AdresseType },
    besoin: { type: BesoinType },
    activite: { type: ActiviteType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// User Feeditem type
const FeeditemTypesType = new GraphQLObjectType({
  name: 'feeditemTypesType',
  description: 'User Types Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})
export { FeeditemType, FeeditemTypesType }
