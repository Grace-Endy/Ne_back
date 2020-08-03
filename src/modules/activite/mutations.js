// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Importss
import { ActiviteType } from './types'
import { create, update, remove } from './resolvers'

// activite create
export const activiteCreate = {
  type: ActiviteType,
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
	gender: {
      name: 'gender',
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
    local: {
      name: 'local',
      type: GraphQLString
    },
    datejour1: {
      name: 'datejour1',
      type: GraphQLString
    },
    datemois1: {
      name: 'datemois1',
      type: GraphQLString
    },
    dateannee1: {
      name: 'dateannee1',
      type: GraphQLString
    },
	  datejour2: {
      name: 'datejour2',
      type: GraphQLString
    },
    datemois2: {
      name: 'datemois2',
      type: GraphQLString
    },
    dateannee2: {
      name: 'dateannee2',
      type: GraphQLString
    },
    heureheure1: {
      name: 'heureheure1',
      type: GraphQLString
    },
    heureminute1: {
      name: 'heureminute1',
      type: GraphQLString
    },
    heureterminaison1: {
      name: 'heureterminaison1',
      type: GraphQLString
    },
	 heureheure2: {
      name: 'heureheure2',
      type: GraphQLString
    },
    heureminute2: {
      name: 'heureminute2',
      type: GraphQLString
    },
    heureterminaison2: {
      name: 'heureterminaison2',
      type: GraphQLString
    },
    prix: {
      name: 'prix',
      type: GraphQLString
    },
    prix_devise: {
      name: 'prix_devise',
      type: GraphQLString
    },
    artiste: {
      name: 'artiste',
      type: GraphQLString
    },
	dj: {
      name: 'dj',
      type: GraphQLString
    },
	organisateur: {
      name: 'organisateur',
      type: GraphQLString
    },
	lieux_achat: {
      name: 'lieux_achat',
      type: GraphQLString
    },
	vue: {
      name: 'vue',
      type: GraphQLString
    },
	phone: {
      name: 'phone',
      type: GraphQLString
    },
    image: {
      name: 'image',
      type: GraphQLString
    }
  },
  resolve: create
}

// Activite update
export const activiteUpdate = {
  type: ActiviteType,
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
  gender: {
      name: 'gender',
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
    local: {
      name: 'local',
      type: GraphQLString
    },
    datejour1: {
      name: 'datejour1',
      type: GraphQLString
    },
    datemois1: {
      name: 'datemois1',
      type: GraphQLString
    },
    dateannee1: {
      name: 'dateannee1',
      type: GraphQLString
    },
    datejour2: {
      name: 'datejour2',
      type: GraphQLString
    },
    datemois2: {
      name: 'datemois2',
      type: GraphQLString
    },
    dateannee2: {
      name: 'dateannee2',
      type: GraphQLString
    },
    heureheure1: {
      name: 'heureheure1',
      type: GraphQLString
    },
    heureminute1: {
      name: 'heureminute1',
      type: GraphQLString
    },
    heureterminaison1: {
      name: 'heureterminaison1',
      type: GraphQLString
    },
   heureheure2: {
      name: 'heureheure2',
      type: GraphQLString
    },
    heureminute2: {
      name: 'heureminute2',
      type: GraphQLString
    },
    heureterminaison2: {
      name: 'heureterminaison2',
      type: GraphQLString
    },
    prix: {
      name: 'prix',
      type: GraphQLString
    },
    prix_devise: {
      name: 'prix_devise',
      type: GraphQLString
    },
    artiste: {
      name: 'artiste',
      type: GraphQLString
    },
  dj: {
      name: 'dj',
      type: GraphQLString
    },
  organisateur: {
      name: 'organisateur',
      type: GraphQLString
    },
  lieux_achat: {
      name: 'lieux_achat',
      type: GraphQLString
    },
  vue: {
      name: 'vue',
      type: GraphQLString
    },
  phone: {
      name: 'phone',
      type: GraphQLString
    },
    image: {
      name: 'image',
      type: GraphQLString
    }
  },
  resolve: update
}

// Activite remove
export const activiteRemove = {
  type: ActiviteType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}