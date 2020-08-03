// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import {UserType} from '../user/types'

// Activite typee
const ActiviteType = new GraphQLObjectType({
  name: 'activite',
  description: 'Activite Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    type: { type: GraphQLInt },
	gender: { type: GraphQLInt },
    departement: { type: GraphQLInt },
    ville: { type: GraphQLInt },
    description: { type: GraphQLString },
    local: { type: GraphQLString },
    datejour1: { type: GraphQLString },
      datemois1: { type: GraphQLString },
      dateannee1: { type: GraphQLString },
    datejour2: { type: GraphQLString },
    datemois2: { type: GraphQLString },
    dateannee2: { type: GraphQLString },
      heureheure1: { type: GraphQLString },
      heureminute1: { type: GraphQLString },
      heureterminaison1: { type: GraphQLString },
    heureheure2: { type: GraphQLString },
    heureminute2: { type: GraphQLString },
    heureterminaison2: { type: GraphQLString },
      prix: { type: GraphQLString },
      prix_devise: { type: GraphQLString },
    artiste: { type: GraphQLString },
	dj: { type: GraphQLString },
	organisateur: { type: GraphQLString },
	lieux_achat: { type: GraphQLString },
	user: {type: UserType},
	vue: { type: GraphQLString },
	phone: { type: GraphQLString },
    image: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// User Gender type
const ActiviteTypesType = new GraphQLObjectType({
  name: 'activiteTypesType',
  description: 'User Types Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})
// User Categorie Evenement type
const ActiviteCategorieTypesType = new GraphQLObjectType({
  name: 'activiteCategorieTypesType',
  description: 'User ActiviteCategorie Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})
const DepartementTypesType = new GraphQLObjectType({
  name: 'departementTypesType',
  description: 'User Departement Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})
// User Ville type
const VilleTypesType = new GraphQLObjectType({
  name: 'villeTypesType',
  description: 'User Ville Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
}) 
export { ActiviteType, ActiviteTypesType,ActiviteCategorieTypesType,DepartementTypesType,VilleTypesType }
