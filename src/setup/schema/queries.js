// Imports
import { GraphQLObjectType } from "graphql"

// App Imports
import * as user from "../../modules/user/query"
import * as adresse from "../../modules/adresse/query"
import * as activite from "../../modules/activite/query"
import * as besoin from "../../modules/besoin/query"
import * as feed from "../../modules/feed/query"
import * as feeditem from "../../modules/feeditem/query"
import * as abonnement from "../../modules/abonnement/query"
import * as notification from "../../modules/notification/query"
import * as crate from "../../modules/crate/query"
import * as commande from "../../modules/commande/query"
import * as contact from "../../modules/contact/query"
import * as prix from "../../modules/prix/query"
import * as favori from "../../modules/favori/query"
import * as calculateur from "../../modules/calculateur/query"
import * as favori2 from "../../modules/favori2/query"
import * as favoriAdresse from "../../modules/favoriAdresse/query"
import * as subscription from "../../modules/subscription/query"

// Query
const query = new GraphQLObjectType({
  name: "query",
  description: "API Queries [Read]",

  fields: () => ({
    ...user,
    ...adresse,
    ...activite,
    ...besoin,
    ...feed,
    ...commande,
    ...feeditem,
    ...contact,
    ...abonnement,
    ...notification,
    ...crate,
    ...favori,
    ...calculateur,
    ...favori2,
    ...prix,
    ...favoriAdresse,
    ...subscription,
  }),
})

export default query
