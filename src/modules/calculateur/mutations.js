// Imports
import { GraphQLInt, GraphQLString } from "graphql"

// App Imports
import CalculateurType from "./types"
import { create, update, remove, removeMultiple } from "./resolvers"

// Calculateur create
export const calculateurCreate = {
  type: CalculateurType,
  args: {
    besoinId: {
      name: "besoinId",
      type: GraphQLInt,
    },
    devis_categorie: {
      name: "devis_categorie",
      type: GraphQLInt,
    },
  },
  resolve: create,
}

// Calculateur remove
export const calculateurRemove = {
  type: CalculateurType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt,
    },
  },
  resolve: remove,
}

export const calculateurMultipleRemove = {
  type: CalculateurType,
  args: {
    devis_categorie: {
      name: "devis_categorie",
      type: GraphQLInt,
    },
  },
  resolve: removeMultiple,
}
export const calculateurUpdate = {
  type: CalculateurType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt,
    },
    quantity: {
      name: "quantity",
      type: GraphQLInt,
    },
    unite: {
      name: "unite",
      type: GraphQLInt,
    },
    fournisseur: {
      name: "fournisseur",
      type: GraphQLString,
    },
    devis_categorie: {
      name: "devis_categorie",
      type: GraphQLInt,
    },
  },
  resolve: update,
}
