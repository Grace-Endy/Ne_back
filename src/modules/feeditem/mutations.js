// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Importss
import { FeeditemType } from './types'
import { create, update, remove } from './resolvers'

// feeditem create
export const feeditemCreate = {
  type: FeeditemType,
  args: {
   
  category: {
      name: 'category',
      type: GraphQLInt
    },
	},
  resolve: create
}

// Feeditem update
export const feeditemUpdate = {
  type: FeeditemType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    category: {
      name: 'category',
      type: GraphQLInt
    },
 
  },
  resolve: update
}

// Feeditem remove
export const feeditemRemove = {
  type: FeeditemType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}