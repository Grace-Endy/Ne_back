// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { AdresseType } from './types'
import { create, update, remove } from './resolvers'

// Adresse create
export const adresseCreate = {
  type: AdresseType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    slug: {
      name: 'slug',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    },

    type: {
      name: 'type',
      type: GraphQLInt
    },
    departement: {
      name: 'departement',
      type: GraphQLInt
    },
    ville: {
      name: 'ville',
      type: GraphQLInt
    },
    adresse: {
      name: 'adresse',
      type: GraphQLString
    },
    vue: {
      name: 'vue',
      type: GraphQLString
    },
    besoinId: {
      name: 'besoinId',
      type: GraphQLString
    },
    telephone: {
      name: 'telephone',
      type: GraphQLString
    },
    email: {
      name: 'email',
      type: GraphQLString
    },
    whatsapp: {
      name: 'whatsapp',
      type: GraphQLString
    },
    facebook: {
      name: 'facebook',
      type: GraphQLString
    },
    youtube: {
      name: 'youtube',
      type: GraphQLString
    },
    twitter: {
      name: 'twitter',
      type: GraphQLString
    },
    gender: {
      name: 'gender',
      type: GraphQLInt
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
    }
  },
  resolve: create
}

// Adresse update
export const adresseUpdate = {
  type: AdresseType,
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

    description: {
      name: 'description',
      type: GraphQLString
    },

    type: {
      name: 'type',
      type: GraphQLInt
    },
    departement: {
      name: 'departement',
      type: GraphQLInt
    },
    ville: {
      name: 'ville',
      type: GraphQLInt
    },
    adresse: {
      name: 'adresse',
      type: GraphQLString
    },
    vue: {
      name: 'vue',
      type: GraphQLString
    },
    besoinId: {
      name: 'besoinId',
      type: GraphQLString
    },
    telephone: {
      name: 'telephone',
      type: GraphQLString
    },
    email: {
      name: 'email',
      type: GraphQLString
    },
    whatsapp: {
      name: 'whatsapp',
      type: GraphQLString
    },
    facebook: {
      name: 'facebook',
      type: GraphQLString
    },
    youtube: {
      name: 'youtube',
      type: GraphQLString
    },
    twitter: {
      name: 'twitter',
      type: GraphQLString
    },
    gender: {
      name: 'gender',
      type: GraphQLInt
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
    }
  },
  resolve: update
}

// Adresse remove
export const adresseRemove = {
  type: AdresseType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}