// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Importss
import { FeedType } from './types'
import { create, update, remove } from './resolvers'

// feed create
export const FeedCreate = {
  type: FeedType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    slug: {
      name: 'slug',
      type: GraphQLString
    },

    position: {
      name: 'position',
      type: GraphQLString
    },

    categorie: {
      name: 'categorie',
      type: GraphQLInt
    },
	  gender: {
      name: 'gender',
      type: GraphQLString
    },
    departement: {
      name: 'departement',
      type: GraphQLInt
    },
    ville: {
      name: 'ville',
      type: GraphQLInt
    },
    identity: {
      name: 'identity',
      type: GraphQLString
    },
    description: {
      name: 'description',
      type: GraphQLString
    },
    image: {
      name: 'image',
      type: GraphQLString
    },
    image2: {
      name: 'image2',
      type: GraphQLString
    },
    image3: {
      name: 'image3',
      type: GraphQLString
    },
    visible: {
      name: 'visible',
      type: GraphQLString
    },
    delai: {
      name: 'delai',
      type: GraphQLString
    },
    date_delai: {
      name: 'date_delai',
      type: GraphQLString
    },
	  show_delai: {
      name: 'show_delai',
      type: GraphQLString
    },
  },
  resolve: create
}

// Feed update
export const feedUpdate = {
  type: FeedType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    slug: {
      name: 'slug',
      type: GraphQLString
    },
    
    position: {
      name: 'position',
      type: GraphQLString
    },

    categorie: {
      name: 'categorie',
      type: GraphQLInt
    },
    gender: {
      name: 'gender',
      type: GraphQLString
    },
    departement: {
      name: 'departement',
      type: GraphQLInt
    },
    ville: {
      name: 'ville',
      type: GraphQLInt
    },
    identity: {
      name: 'identity',
      type: GraphQLString
    },
    description: {
      name: 'description',
      type: GraphQLString
    },
    image: {
      name: 'image',
      type: GraphQLString
    },
    image2: {
      name: 'image2',
      type: GraphQLString
    },
    image3: {
      name: 'image3',
      type: GraphQLString
    },
    visible: {
      name: 'visible',
      type: GraphQLString
    },
    delai: {
      name: 'delai',
      type: GraphQLString
    },
    dateannee1: {
      name: 'dateannee1',
      type: GraphQLString
    },
    date_delai: {
      name: 'date_delai',
      type: GraphQLString
    },
    show_delai: {
      name: 'show_delai',
      type: GraphQLString
    }
  },
  resolve: update
}

// Feed remove
export const feedRemove = {
  type: FeedType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}