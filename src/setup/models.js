// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from './database'

const models = {
  User: databaseConnection.import('../modules/user/model'),
  Adresse: databaseConnection.import('../modules/adresse/model'),
  Activite: databaseConnection.import('../modules/activite/model'),
  Besoin: databaseConnection.import('../modules/besoin/model'),
  Crate: databaseConnection.import('../modules/crate/model'),
  Subscription: databaseConnection.import('../modules/subscription/model'),
  Favori: databaseConnection.import('../modules/favori/model'),
  Calculateur: databaseConnection.import('../modules/calculateur/model'),
  Favori2: databaseConnection.import('../modules/favori2/model'),
  FavoriAdresse: databaseConnection.import('../modules/favoriAdresse/model')
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
