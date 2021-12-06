// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql"

// User type
const UserType = new GraphQLObjectType({
  name: "user",
  description: "User type",

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
    debut_abonnement: { type: GraphQLString },
    fin_abonnement: { type: GraphQLString },
    nombre_de_besoins: { type: GraphQLString },
    nombre_de_besoins_total: { type: GraphQLString },
    nombre_de_activite: { type: GraphQLString },
    nombre_de_activite_total: { type: GraphQLString },
    nombre_de_adresse: { type: GraphQLString },
    nombre_de_adresse_total: { type: GraphQLString },
    type_de_compte: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    opt_code: { type: GraphQLString },
    registrationToken: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
})

// User Login type
const UserLoginType = new GraphQLObjectType({
  name: "userAuth",
  description: "User Authentication Type",

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString },
  }),
})

// User Token Code
const TokenCodeVerificationType = new GraphQLObjectType({
  name: "userTokenCode",
  description: "TokenCode Verification Type",
  fields: () => ({
    user: { type: UserType },
    messageFromServer: { type: GraphQLString },
  }),
})

// User Gender type
const UserGenderType = new GraphQLObjectType({
  name: "userGender",
  description: "User Gender Type",

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
})

// User Login type
const PasswordVerificationType = new GraphQLObjectType({
  name: "userPassword",
  description: "Password Verification Type",
  fields: () => ({
    user: { type: UserType },
    messageFromServer: { type: GraphQLString },
  }),
})
// User Email type
const EmailVerificationType = new GraphQLObjectType({
  name: "userEmail",
  description: "Email Verification Type",

  fields: () => ({
    user: { type: UserType },
    messageFromServer: { type: GraphQLString },
  }),
})

// User OptCode type
const OptCodeVerificationType = new GraphQLObjectType({
  name: "userOptCode",
  description: "OptCode Verification Type",

  fields: () => ({
    user: { type: UserType },
    messageFromServer: { type: GraphQLString },
  }),
})
// User Departement type
const DepartementTypesType = new GraphQLObjectType({
  name: "departementTypesType",
  description: "User Departement Type",

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
})
// User Ville type
const VilleTypesType = new GraphQLObjectType({
  name: "villeTypesType",
  description: "User Ville Type",

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    departement: { type: GraphQLInt },
  }),
})

export {
  UserType,
  UserLoginType,
  PasswordVerificationType,
  EmailVerificationType,
  OptCodeVerificationType,
  UserGenderType,
  DepartementTypesType,
  VilleTypesType,
}
