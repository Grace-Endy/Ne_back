// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from "graphql"

// App Imports
import {
  UserType,
  UserLoginType,
  PasswordVerificationType,
  EmailVerificationType,
  OptCodeVerificationType,
  UserGenderType,
  DepartementTypesType,
  VilleTypesType,
} from "./types"
import {
  getAll,
  getById,
  getBySlug,
  getUserByRole,
  login,
  livreurLogin,
  verifyIfPassword,
  verifyIfTokenCode,
  verifyIfEmail,
  verifyIfOptCode,
  getGenders,
  getDepartementNomsTypes,
  getVilleNomsTypes,
} from "./resolvers"

// All
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll,
}

// By ID
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getById,
}
export const userByRole = {
  type: new GraphQLList(UserType),
  args: {
    role: { type: GraphQLString },
  },
  resolve: getUserByRole,
}
// User By slug
export const userBySlug = {
  type: UserType,
  args: {
    slug: { type: GraphQLString },
  },
  resolve: getBySlug,
}

// Auth
export const userLivreurLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: "email",
      type: GraphQLString,
    },
    password: {
      name: "password",
      type: GraphQLString,
    },
    role: {
      name: "role",
      type: GraphQLString,
    },
  },
  resolve: livreurLogin,
}

// Auth
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: "email",
      type: GraphQLString,
    },
    password: {
      name: "password",
      type: GraphQLString,
    },

    role: {
      name: "role",
      type: GraphQLString,
    },
  },
  resolve: login,
}

export const userPassword = {
  type: PasswordVerificationType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt,
    },
    password: {
      name: "password",
      type: GraphQLString,
    },
  },
  resolve: verifyIfPassword,
}

export const userEmail = {
  type: EmailVerificationType,
  args: {
    email: {
      name: "email",
      type: GraphQLString,
    },
  },
  resolve: verifyIfEmail,
}

export const userOptCode = {
  type: OptCodeVerificationType,
  args: {
    email: {
      name: "email",
      type: GraphQLString,
    },
    opt_code: {
      name: "opt_code",
      type: GraphQLString,
    },
  },
  resolve: verifyIfOptCode,
}
// Genders
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders,
}

// Departement Types
export const departementNomsTypes = {
  type: new GraphQLList(DepartementTypesType),
  resolve: getDepartementNomsTypes,
}

// Ville Types
export const villeNomsTypes = {
  type: new GraphQLList(VilleTypesType),
  resolve: getVilleNomsTypes,
}
