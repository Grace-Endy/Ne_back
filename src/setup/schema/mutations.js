// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/mutations'
import * as adresse from '../../modules/adresse/mutations'
import * as activite from '../../modules/activite/mutations'
import * as besoin from '../../modules/besoin/mutations'
import * as crate from '../../modules/crate/mutations'
import * as subscription from '../../modules/subscription/mutations'
import * as favori from '../../modules/favori/mutations'
import * as calculateur from '../../modules/calculateur/mutations'
import * as favori2 from '../../modules/favori2/mutations'
import * as favoriAdresse from '../../modules/favoriAdresse/mutations'
// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...user,
    ...adresse,
    ...activite,
    ...besoin,
    ...crate,
	  ...favori,
    ...calculateur,
    ...favori2,
    ...favoriAdresse,
    ...subscription
  }
})

export default mutation
