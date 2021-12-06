// App Imports
import params from "../../config/params"
import models from "../../setup/models"
import SendEmailFunc from "../../setup/SendEmailFunc"
import SendCustomNotification from "../../setup/SendCustomNotification"

// Get all commandes
export async function getAll(parentValue, {}, { auth }) {
  if (
    (auth.user && auth.user.role === params.user.roles.admin) ||
    (auth.user && auth.user.role === params.user.roles.livreur)
  ) {
    return await models.Commande.findAll({
      order: [["createdAt", "DESC"]],
      include: [
        { model: models.User, as: "livreur", required: true },
        { model: models.User, as: "user", required: true },
      ],
    })
  } else {
    throw new Error(
      "S'il vous plait,connecter en tant qu'un administrateur ou un livreur  pour voir toutes les commandes.."
    )
  }
}

// Get Commande by code
export async function getByCommandeCode(parentValue, { commande_code }) {
  const commande = await models.Commande.findOne({
    where: { commande_code },
    include: [
      { model: models.User, as: "livreur", required: true },
      { model: models.User, as: "user", required: true },
    ],
  })

  if (!commande) {
    // Commande does not exists
    throw new Error(
      "Il semble que la commande que vous recherchez n'existe pas ou a été retiré."
    )
  } else {
    return commande
  }
}

// Get commande by ID
export async function getById(parentValue, { commandeId }) {
  const commande = await models.Commande.findOne({
    where: { id: commandeId },
    include: [{ model: models.User, as: "user" }],
  })

  if (!commande) {
    // commande does not exists
    throw new Error(
      "Il semble que la commande que vous recherchez n'existe pas ou a été retiré."
    )
  } else {
    return commande
  }
}

// Get commande by user
export async function getByUser(parentValue, {}, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.Commande.findAll({
      where: {
        userId: auth.user.id,
      },
      order: [["createdAt", "DESC"]],
      include: [
        { model: models.User, as: "livreur", required: true },
        { model: models.User, as: "user", required: true },
      ],
    })
  } else {
    throw new Error("S'il vous plait,connecter pour voir vos commandes..")
  }
}

// Get commande by livreur
export async function getByLivreur(parentValue, {}, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.Commande.findAll({
      where: {
        livreurId: auth.user.id,
      },
      order: [["createdAt", "DESC"]],
      include: [
        { model: models.User, as: "livreur", required: true },
        { model: models.User, as: "user", required: true },
      ],
    })
  } else {
    throw new Error("S'il vous plait,connecter pour voir vos commandes..")
  }
}

export async function getNotificationCommandes() {
  return await models.Commande.findAll({
    order: [[models.Sequelize.fn("RAND")]],
    limit: 1,
    include: [{ model: models.User, as: "user" }],
  })
}

// Get related commandes by categorie
export async function getRelatedByCategorie(parentValue, { categorieId }) {
  return await models.Commande.findAll({
    where: {
      categorie: categorieId,
    },
    order: [["createdAt", "DESC"]], // mock related commandes by showing random commandes
  })
}

// Get page of  related commandes by categorie
export async function getRelatedByCategoriePage(parentValue, { categorieId }) {
  return await models.Commande.findAll({
    where: {
      categorie: categorieId,
    },
    order: [["createdAt", "DESC"]], // mock related commandes by showing random commandes
  })
}

// Get related commandes by UserId
export async function getRelatedByUserId(parentValue, { userId }) {
  return await models.Commande.findAll({
    where: {
      userId: userId,
    },
    include: [
      { model: models.User, as: "livreur", required: true },
      { model: models.User, as: "user", required: true },
    ],
    order: [["createdAt", "DESC"]], // mock related commandes by showing random commandes
  })
}

// Create commande
export async function create(
  parentValue,
  {
    commande_code,
    produits,
    livreurId,
    adresse_client,
    adresse_vendeur,
    prix_total,
    phone1,
    phone2,
    email1,
    email2,
    status,
    payment_status,
    date_arrival,
    comment,
    payment_type,
    departement1,
    ville1,
    departement2,
    ville2,
    livraison_cost,
    system_fees,
    livraison_duree,
  },
  { auth }
) {
  if (auth.user) {
    return await models.Commande.create({
      commande_code,
      produits,
      livreurId,
      adresse_client,
      adresse_vendeur,
      prix_total,
      phone1,
      phone2,
      email1,
      email2,
      status,
      payment_status,
      date_arrival,
      comment,
      payment_type,
      departement1,
      ville1,
      departement2,
      ville2,
      livraison_cost,
      system_fees,
      livraison_duree,
      userId: auth.user.id,
    })
      .then((res) => {
        this.SendEmailFunc = new SendEmailFunc()
        this.SendEmailFunc.sendEmailFunc({
          to: "lainegraceendy@gmail.com",
          message: "Hi bigo!",
          categorie: 1,
          informationAdd: commande_code,
        })
        this.SendEmailFunc.sendEmailFunc({
          to: "needpamgroup@gmail.com",
          message: "Hi bigo!",
          categorie: 11,
          informationAdd: commande_code,
        })
        return res
      })
      .catch((err) => {
        return err
      })
  } else {
    throw new Error("Operation Interdite.")
  }
}

// Update Commande
export async function update(
  parentValue,
  {
    id,
    commande_code,
    produits,
    livreurId,
    adresse_client,
    adresse_vendeur,
    prix_total,
    phone1,
    phone2,
    email1,
    email2,
    status,
    payment_status,
    date_arrival,
    comment,
    payment_type,
    departement1,
    ville1,
    departement2,
    ville2,
    livraison_cost,
    system_fees,
    livraison_duree,
  },
  { auth }
) {
  if (auth.user) {
    return await models.Commande.update(
      {
        commande_code,
        produits,
        livreurId,
        adresse_client,
        adresse_vendeur,
        prix_total,
        phone1,
        phone2,
        email1,
        email2,
        status,
        payment_status,
        date_arrival,
        comment,
        payment_type,
        departement1,
        ville1,
        departement2,
        ville2,
        livraison_cost,
        system_fees,
        livraison_duree,
        userId: auth.user.id,
      },
      { where: { id } }
    )
  } else {
    throw new Error("Operation Interdite.")
  }
}

// Update Commande
export async function updateStatus(
  parentValue,
  { id, commande_code, email1, email2, status, livreurId },
  { auth }
) {
  if (auth.user) {
    const userInfo = await models.User.findOne({ where: { email: email1 } })
    const registrationTokenNow = userInfo.dataValues.registrationToken
    
    return await models.Commande.update(
      {
        commande_code,
        livreurId,
        email1,
        email2,
        status,
        userId: auth.user.id,
      },
      { where: { id } }
    )
      .then((res) => {
        this.SendEmailFunc = new SendEmailFunc()
        this.SendEmailFunc.sendEmailFunc({
          to: "lainegraceendy@gmail.com",
          message: "Hi bigo!",
          categorie: status,
          informationAdd: commande_code,
        })
        this.SendEmailFunc.sendEmailFunc({
          to: "needpamgroup@gmail.com",
          message: "Hi bigo!",
          categorie: `${status}${status}`,
          informationAdd: commande_code,
        })

        this.SendCustomNotification = new SendCustomNotification()
        this.SendCustomNotification.SendCustomNotification({
          registrationToken: registrationTokenNow,
          categorie: `${status}${status}`,
          informationAdd: commande_code,
        })
        return res
      })
      .catch((err) => {
        return err
      })
  } else {
    throw new Error("Operation Interdite.")
  }
}

// Delete Commande
export async function remove(parentValue, { id }, { auth }) {
  if (auth.user) {
    const commande = await models.Commande.findOne({ where: { id } })

    if (!commande) {
      // Commande does not exists
      throw new Error("Cette commande n'existe pas")
    } else {
      return await models.Commande.destroy({
        where: { id, userId: auth.user.id },
      })
    }
  } else {
    throw new Error("Operation Interdite.")
  }
}
