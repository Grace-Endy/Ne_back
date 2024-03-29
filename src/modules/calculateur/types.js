// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql"

// App Imports
import { UserType } from "../user/types"
import { BesoinType } from "../besoin/types"

// Calculateur type
const CalculateurType = new GraphQLObjectType({
  name: "calculateur",
  description: "Calculateur Type",

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    besoin: { type: BesoinType },
    quantity: { type: GraphQLInt },
    unite: { type: GraphQLInt },
    fournisseur: { type: GraphQLString },
    devis_categorie: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
})

export default CalculateurType
