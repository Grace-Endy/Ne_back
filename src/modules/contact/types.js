// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Contact typee
const ContactType = new GraphQLObjectType({
  name: 'contact',
  description: 'Contact Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    adresse_abonne: { type: GraphQLString },
	  sexe: { type: GraphQLString },
    departement: { type: GraphQLString },
    ville: { type: GraphQLString },
    date_de_naissance: { type: GraphQLString },
    telephone: { type: GraphQLString },
    interet: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})


export { ContactType }
