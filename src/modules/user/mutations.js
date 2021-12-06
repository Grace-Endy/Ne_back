// Imports
import { GraphQLString, GraphQLInt } from "graphql"

// App Imports
import { UserType } from "./types"
import {
  create,
  update,
  updatePassword,
  updateFeatures,
  updateOpt,
  updateRegistrationToken,
  updatePasswordFromOpt,
  remove,
} from "./resolvers"

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: "name",
      type: GraphQLString,
    },
    slug: {
      name: "slug",
      type: GraphQLString,
    },
    email: {
      name: "email",
      type: GraphQLString,
    },
    role: {
      name: "role",
      type: GraphQLString,
    },
    type_de_compte: {
      name: "type_de_compte",
      type: GraphQLString,
    },
    image: {
      name: "image",
      type: GraphQLString,
    },
    nombre_de_besoins: {
      name: "nombre_de_besoins",
      type: GraphQLString,
    },
    nombre_de_besoins_total: {
      name: "nombre_de_besoins_total",
      type: GraphQLString,
    },
    nombre_de_activite: {
      name: "nombre_de_besoins",
      type: GraphQLString,
    },
    nombre_de_activite_total: {
      name: "nombre_de_besoins_total",
      type: GraphQLString,
    },
    nombre_de_adresse: {
      name: "nombre_de_besoins",
      type: GraphQLString,
    },
    nombre_de_adresse_total: {
      name: "nombre_de_besoins_total",
      type: GraphQLString,
    },
    password: {
      name: "password",
      type: GraphQLString,
    },
  },
  resolve: create,
}

export const userUpdate = {
  type: UserType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt,
    },
    name: {
      name: "name",
      type: GraphQLString,
    },

    email: {
      name: "email",
      type: GraphQLString,
    },
    slug: {
      name: "slug",
      type: GraphQLString,
    },
    numero_principal: {
      name: "numero_principal",
      type: GraphQLString,
    },
    numero_whatsapp: {
      name: "numero_whatsapp",
      type: GraphQLString,
    },
    departement: {
      name: "departement",
      type: GraphQLInt,
    },
    ville: {
      name: "ville",
      type: GraphQLInt,
    },
    adresse: {
      name: "adresse",
      type: GraphQLString,
    },
    image: {
      name: "image",
      type: GraphQLString,
    },
    nombre_de_besoins: {
      name: "nombre_de_besoins",
      type: GraphQLString,
    },
    nombre_de_activite: {
      name: "nombre_de_activite",
      type: GraphQLString,
    },
    nombre_de_adresse: {
      name: "nombre_de_adresse",
      type: GraphQLString,
    },
    type_de_compte: {
      name: "type_de_compte",
      type: GraphQLString,
    },
  },
  resolve: update,
}

export const userUpdateFeatures = {
  type: UserType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt,
    },
    nombre_de_besoins: {
      name: "nombre_de_besoins",
      type: GraphQLString,
    },
  },
  resolve: updateFeatures,
}
//User Update password
export const userUpdatePassword = {
  type: UserType,
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
  resolve: updatePassword,
}

export const userUpdateOpt = {
  type: UserType,
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
  resolve: updateOpt,
}
export const userUpdateTokenCode = {
  type: UserType,
  args: {
    email: {
      name: "email",
      type: GraphQLString,
    },
    registrationToken: {
      name: "registrationToken",
      type: GraphQLString,
    },
  },
  resolve: updateRegistrationToken,
}
export const userUpdatePasswordFromOpt = {
  type: UserType,
  args: {
    email: {
      name: "email",
      type: GraphQLString,
    },
    password: {
      name: "password",
      type: GraphQLString,
    },
    opt_code: {
      name: "opt_code",
      type: GraphQLString,
    },
  },
  resolve: updatePasswordFromOpt,
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt,
    },
  },
  resolve: remove,
}
