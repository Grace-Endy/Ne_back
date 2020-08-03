// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { BesoinType } from './types'
import { create, update, remove } from './resolvers'

// besoin createe
export const besoinCreate = {
  type: BesoinType,
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
    categorie: {
      name: 'categorie',
      type: GraphQLInt
    },
	  gender: {
      name: 'gender',
      type: GraphQLInt
    },

    prix_unite: {
      name: 'prix_unite',
      type: GraphQLString
    },
    
    prix_unite_devise: {
      name: 'prix_unite_devise',
      type: GraphQLString
    },
    prix_stock: {
      name: 'prix_stock',
      type: GraphQLString
    },
    prix_stock_devise: {
      name: 'prix_stock_devise',
      type: GraphQLString
    },
    stock_unite: {
      name: 'stock_unite',
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

    vendeur: {
      name: 'vendeur',
      type: GraphQLString
    },

    adresse_vendeur: {
      name: 'adresse_vendeur',
      type: GraphQLString
    },

    phone_vendeur: {
      name: 'phone_vendeur',
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

    specification: {
      name: 'specification',
      type: GraphQLString
    },

    rating: {
      name: 'rating',
      type: GraphQLString
    },

    vue: {
      name: 'vue',
      type: GraphQLString
    },

    likes: {
      name: 'likes',
      type: GraphQLString
    }
  },
  resolve: create
}

// Besoin update
export const besoinUpdate = {
  type: BesoinType,
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
   categorie: {
      name: 'categorie',
      type: GraphQLInt
    },
    gender: {
      name: 'gender',
      type: GraphQLInt
    },
    prix_unite: {
      name: 'prix_unite',
      type: GraphQLString
    },
    prix_unite_devise: {
      name: 'prix_unite_devise',
      type: GraphQLString
    },
    prix_stock: {
      name: 'prix_stock',
      type: GraphQLString
    },
    prix_stock_devise: {
      name: 'prix_stock_devise',
      type: GraphQLString
    },
    stock_unite: {
      name: 'stock_unite',
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

    vendeur: {
      name: 'vendeur',
      type: GraphQLString
    },

    adresse_vendeur: {
      name: 'adresse_vendeur',
      type: GraphQLString
    },

    phone_vendeur: {
      name: 'phone_vendeur',
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

    specification: {
      name: 'specification',
      type: GraphQLString
    },

    rating: {
      name: 'rating',
      type: GraphQLString
    },

    vue: {
      name: 'vue',
      type: GraphQLString
    },

    likes: {
      name: 'likes',
      type: GraphQLString
    }
  },
  resolve: update
}

// Besoin remove
export const besoinRemove = {
  type: BesoinType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}