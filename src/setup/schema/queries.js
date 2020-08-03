// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/query'
import * as adresse from '../../modules/adresse/query'
import * as activite from '../../modules/activite/query'
import * as besoin from '../../modules/besoin/query'
import * as crate from '../../modules/crate/query'
import * as favori from '../../modules/favori/query'
import * as calculateur from '../../modules/calculateur/query'
import * as favori2 from '../../modules/favori2/query'
import * as favoriAdresse from '../../modules/favoriAdresse/query'
import * as subscription from '../../modules/subscription/query'

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  fields: () => ({
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
  })
})

export default query