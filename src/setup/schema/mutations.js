// Imports
import { GraphQLObjectType } from "graphql"

// App Imports
import * as user from "../../modules/user/mutations"
import * as adresse from "../../modules/adresse/mutations"
import * as activite from "../../modules/activite/mutations"
import * as feed from "../../modules/feed/mutations"
import * as feeditem from "../../modules/feeditem/mutations"
import * as besoin from "../../modules/besoin/mutations"
import * as contact from "../../modules/contact/mutations"
import * as abonnement from "../../modules/abonnement/mutations"
import * as notification from "../../modules/notification/mutations"
import * as crate from "../../modules/crate/mutations"
import * as commande from "../../modules/commande/mutations"
import * as subscription from "../../modules/subscription/mutations"
import * as favori from "../../modules/favori/mutations"
import * as prix from "../../modules/prix/mutations"
import * as calculateur from "../../modules/calculateur/mutations"
import * as favori2 from "../../modules/favori2/mutations"
import * as favoriAdresse from "../../modules/favoriAdresse/mutations"
// Mutation
const mutation = new GraphQLObjectType({
  name: "mutations",
  description: "API Mutations [Create, Update, Delete]",

  fields: {
    ...user,
    ...adresse,
    ...activite,
    ...feed,
    ...feeditem,
    ...besoin,
    ...contact,
    ...crate,
    ...commande,
    ...favori,
    ...prix,
    ...calculateur,
    ...favori2,
    ...favoriAdresse,
    ...abonnement,
    ...notification,
    ...subscription,
  },
})

export default mutation
