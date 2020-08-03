// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    email: { type: GraphQLString },
    numero_principal: { type: GraphQLString },
    numero_whatsapp: { type: GraphQLString },
    departement: { type: GraphQLInt },
    ville: { type: GraphQLInt },
    adresse: { type: GraphQLString },
    image: { type: GraphQLString },
    type_de_compte: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// User Login type
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

// User Gender type
const UserGenderType = new GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})
// User Departement type
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

export { UserType, UserLoginType, UserGenderType, DepartementTypesType,VilleTypesType }