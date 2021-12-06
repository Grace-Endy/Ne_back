// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Importss
import { ContactType } from './types'
import { getAll, getBySlug,search,searchAll, getById, getTypes } from './resolvers'

// Contact All
export const contacts = {
  type: new GraphQLList(ContactType),
  resolve: getAll
}

export const searchContacts = {
  type: new GraphQLList(ContactType),
  args: {
    name: { type: GraphQLString }
  },
  resolve: search
}

export const searchContactsALl = {
  type: new GraphQLList(ContactType),
  args: {
    name: { type: GraphQLString }
  },
  resolve: searchAll
}

// Contact By slug
export const contact = {
  type: ContactType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Contact By ID
export const contactById = {
  type: ContactType,
  args: {
    contactId: { type: GraphQLInt }
  },
  resolve: getById
}


