// Imports
import path from 'path'
import { admin } from './firebase'
// App Imports

export default class SendCustomNotification {

async SendCustomNotification(notification) {
  const {registrationToken, categorie, informationAdd} = notification;
  
  const options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
  };
 

if (categorie === 11 || categorie === "11") {
const message_notification = {
  notification: {
        title: "Une commande vient d'être placée🛒  | Needpam",
        body: `Hello Needpam, une nouvelle commande vient d'être placée. Le code de la commande: #${informationAdd}`
            },
  data : {
      notificationCategorie : "11",
      informationAdd : `${informationAdd}`
    }  
     };

 await admin.messaging().sendToDevice(registrationToken, message_notification, options)
      .then( response => {
        console.log("Notification sent successfully")
      })
      .catch( error => {
          console.log("Il y'a un erreur",error);
      });
 
}
else if (categorie === 22 || categorie === "22") {
  const message_notification = {
 
     notification: {
        title: "L'analyse de la commande🛒 est en cours | Needpam",
        body: `L'analyse de la commande #${informationAdd} vient d'être demmaré`
            },
  data : {
      notificationCategorie : "22",
      informationAdd : `${informationAdd}`
    }   
     };

 await admin.messaging().sendToDevice(registrationToken, message_notification, options)
      .then( response => {
        console.log("Notification sent successfully")
      })
      .catch( error => {
          console.log("Il y'a un erreur",error);
      }); 
  
}
else if (categorie === 33 || categorie === "33") {
  const message_notification = {
 
     notification: {
        title: "L'emballage de la commande🛒 est en cours | Needpam",
        body: `La commande  #${informationAdd} a été traitée. On va commencer maintenant avec l'emballage.`
            },
  data : {
      notificationCategorie : "33",
      informationAdd : `${informationAdd}`
    }   
     };

 await admin.messaging().sendToDevice(registrationToken, message_notification, options)
      .then( response => {
        console.log("Notification sent successfully")
      })
      .catch( error => {
          console.log("Il y'a un erreur",error);
      }); 
  
} 

else if (categorie === 44 || categorie === "44") {
  const message_notification = {
 
     notification: {
        title: "L'emballage de la commande🛒 est terminée | Needpam",
        body: `La commande #${informationAdd} vient d'être emballée.`
            },
  data : {
      notificationCategorie : "44",
      informationAdd : `${informationAdd}`
    }   
     };

 await admin.messaging().sendToDevice(registrationToken, message_notification, options)
      .then( response => {
        console.log("Notification sent successfully")
      })
      .catch( error => {
          console.log("Il y'a un erreur",error);
      }); 
  
}
else if (categorie === 55 || categorie === "55") {
   const message_notification = {
 
     notification: {
        title: "La livraison de la commande🛒 est en cours | Needpam",
        body: `La livraison de la commande #${informationAdd} est en cours.`
            },
  data : {
      notificationCategorie : "55",
      informationAdd : `${informationAdd}`
    }  
     };

 await admin.messaging().sendToDevice(registrationToken, message_notification, options)
      .then( response => {
        console.log("Notification sent successfully")
      })
      .catch( error => {
          console.log("Il y'a un erreur",error);
      });

}
else if (categorie === 66 || categorie === "66") {
   const message_notification = {
 
     notification: {
        title: "La livraison de la commande🛒 est terminée | Needpam",
        body: `La livraison de la commande #${informationAdd} est terminée.`
            },
  data : {
      notificationCategorie : "66",
      informationAdd : `${informationAdd}`
    }  
     };

 await admin.messaging().sendToDevice(registrationToken, message_notification, options)
      .then( response => {
        console.log("Notification sent successfully")
      })
      .catch( error => {
          console.log("Il y'a un erreur",error);
      });

}
 else {
  console.log("Li egal ak yon lot bagay", categorie)
}

}
}