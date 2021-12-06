// Imports
import nodemailer from 'nodemailer'


export default class SendEmailFunc {

async sendEmailFunc(mail) {
  const {to, message, categorie, informationAdd} = mail;

   const output1 = `
    <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 5px;
    color: #535353;
    align-items: center;
    text-align: center;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #f3f3fac9;
">
  
<p style="
    color: #535353;
    padding-bottom: 0px;
    font-size: 14px;
    font-family: sans-serif;
">
Hello! Merci d'avoir choisi Needpam. </p>
    </div>
  <p style="color:#545872;padding-top: 15px;padding-left: 10px;text-align: center;padding-right: 10px;font-size: 11px;">
    <span style="color: #535353;font-size: 14px;font-family: inherit;font-weight: 400;text-align: center;">
<img src="https://inolemit.sirv.com/utils/vippng.com-blue-cross-png-547455.png" style="
    height: 49px;
"><br><br>
<b style="
    font-size: 17px;
    text-align: center;
">Vous venez de placer une nouvelle commande.</b><br><br> Ainsi, comme d'habitude les étapes seront ainsi:</span><br><br><hr></p>
<p style="
    color: #535353;
    font-weight: 400;
    font-family: sans-serif;
    font-size: 15px;
">
<div style="color:#535353">
<b style="color:#535353">1- Analyse de la commande</b>
<br/>
<span style="color:#535353; font-weight:300">
Cela signifie que tous les produits de votre commande seront analysés pour verifier s'ils sont toujours disponibles ou pas. Si tout est ok, la commande changera de statut, allant de: «Analyse en cours » à « en cours d'emballage » pour être expédiée. Puis un mail vous sera envoyé et également vous recevrez une notification depuis l'application mobile de Needpam, confirmant que nous avons bien reçu votre commande .</span>
</div><br>
<div>
<b style="color:#535353">2- Préparation de la commande / Emballage</b>
<br/>
<span style="color:#535353; font-weight:300">
A ce stade,  Le préparateur va alors effectuer le prélèvement de l’ensemble des composants de votre commande puis, les conditionner et les emaballer. Une fois emballés, vous recevrez un e-mail d'avis d'expédition confirmant que votre commande a été traitée. Puis la commande changera de statut allant de: « en cours d'emballage » à « livraison en cours ». Puis un mail vous sera envoyé et également vous recevrez une notification depuis l'application mobile de Needpam, qui contiendra tous les détails relatifs à votre commande ainsi que le nom du transporteur, les informations de suivi et les dates de livraison estimées.</span>
</div><br>
<div>
<b style="color:#535353">3- Livraison de la commande</b>
<br/>
<span style="color:#535353; font-weight:300">
A partir du moment où la marchandise est dans les mains du transporteur, celui-ci vous avertira par sms ou téléphone avec un lien de suivi. Dans le cas d’une prise de Rendez-Vous il vous communiquera la procédure à suivre quand il rentrera en contact avec vous.  Une fois que vous recevrez les produits, la commande changera de statut allant de: « Livraison en cours » à « Livraison terminée ». Puis un mail vous sera envoyé et également vous recevrez une notification depuis l'application mobile de Needpam, confirmant que votre commande est terminée.</span>
</div>
</p><hr>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;">
 Vous pouvez aussi controler votre commande à partir de l'application ou du site web de Needpam, en cliquant sur la section: "Mon Compte" puis, "Mes commandes".
</p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;
">Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

 <br>
<p style="text-align:center">
<img src="https://inolemit.sirv.com/Mobile%20app/6a6f2f535cc34fd9f015bb8efd5b4648.jpg" style="width:380px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #53535399;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #535353;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation
<h3 style="text-align:center;
    margin-bottom: 1px;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px"></h3>
</p>

</div>
  `; 


 const output11 = `
    <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 5px;
    color: #535353;
    align-items: center;
    text-align: center;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #f3f3fac9;
">
  
<p style="
    color: #535353;
    padding-bottom: 0px;
    font-size: 14px;
    font-family: sans-serif;
">
Needpam Group </p>
    </div>
  <p style="color:#545872;padding-top: 15px;padding-left: 10px;text-align: center;padding-right: 10px;font-size: 11px;">
    <span style="color: #535353;font-size: 14px;font-family: inherit;font-weight: 400;text-align: center;">
<img src="https://inolemit.sirv.com/utils/vippng.com-blue-cross-png-547455.png" style="
    height: 49px;
"><br><br>
<b style="
    font-size: 17px;
    text-align: center;
">Hello Needpam, une nouvelle commande vient d'être placée.</b></span><br>
Le code de la commande: <b>#${informationAdd}
</b>
<br><hr></p>

<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;
">Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

 <br>
<p style="text-align:center">
<img src="https://inolemit.sirv.com/Mobile%20app/6a6f2f535cc34fd9f015bb8efd5b4648.jpg" style="width:380px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #53535399;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #535353;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation
<h3 style="text-align:center;
    margin-bottom: 1px;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px"></h3>
</p>

</div>
  `;

const output2 = `
   <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 5px;
    color: #535353;
    align-items: center;
    text-align: center;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #f3f3fac9;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px">
    </div>
  <p style="color:#545872;padding-top: 15px;padding-left: 10px;text-align: center;padding-right: 10px;font-size: 11px;font-weight:400">
    <span style="color: #535353;font-size: 14px;font-family: inherit;font-weight: 400;text-align: center;">
<img src="https://inolemit.sirv.com/utils/mobile-shopping-mobile-marketing-app-store-illustration-icon-flat-style_136162-69.jpg" style="
    width: 79px;
"><br><br>
<b style="
    font-size: 17px;
    text-align: center;
">Nous avons bien reçu votre commande. </b><br>Le code de la commande: <b>#${informationAdd}
</b> </p><p style="color:#545872;padding-top: 15px;padding-left: 2px;text-align: justify;padding-right: 2px;font-size: 14px;font-weight:400">
Maintenant, nous sommes en train d'analyser tous les produits de votre commande pour verifier s'ils sont toujours disponibles ou pas. Une fois terminée, un mail vous sera envoyé et également vous recevrez une notification depuis l'application mobile de Needpam, confirmant que votre commande a été traitée, et que l'emballage est en cours. </span><br><hr></p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;">
 Vous pouvez aussi controler votre commande à partir de l'application ou du site web de Needpam, en cliquant sur la section: "Mon Compte" puis, "Mes commandes".
</p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;
">Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

 <br>
<p style="text-align:center">
<img src="https://inolemit.sirv.com/Mobile%20app/6a6f2f535cc34fd9f015bb8efd5b4648.jpg" style="width:380px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #53535399;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #535353;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation
<h3 style="text-align:center;
    margin-bottom: 1px;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px"></h3>
</p>

</div>
  `;  

const output22 = `
   <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 5px;
    color: #535353;
    align-items: center;
    text-align: center;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #f3f3fac9;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px">
    </div>
  <p style="color:#545872;padding-top: 15px;padding-left: 10px;text-align: center;padding-right: 10px;font-size: 11px;font-weight:400">
    <span style="color: #535353;font-size: 14px;font-family: inherit;font-weight: 400;text-align: center;">
<img src="https://inolemit.sirv.com/utils/mobile-shopping-mobile-marketing-app-store-illustration-icon-flat-style_136162-69.jpg" style="
    width: 79px;
"><br><br>
<b style="
    font-size: 17px;
    text-align: center;
">L'analyse de la commande #${informationAdd} vient d'être demmaré </b><br> </p>

<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;">
 Vous pouvez aussi controler cette commande à partir de l'application ou du site web de Needpam, en cliquant sur la section: "Mon Compte" puis, "Toutes les commandes commandes".
</p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;
">Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

 <br>
<p style="text-align:center">
<img src="https://inolemit.sirv.com/Mobile%20app/6a6f2f535cc34fd9f015bb8efd5b4648.jpg" style="width:380px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #53535399;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #535353;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation
<h3 style="text-align:center;
    margin-bottom: 1px;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px"></h3>
</p>

</div>
  `;

const output3 = `
   <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 5px;
    color: #535353;
    align-items: center;
    text-align: center;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #f3f3fac9;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px">
    </div>
  <p style="color:#545872;padding-top: 15px;padding-left: 10px;text-align: center;padding-right: 10px;font-size: 11px;font-weight:400">
    <span style="color: #535353;font-size: 14px;font-family: inherit;font-weight: 400;text-align: center;">
<img src="https://inolemit.sirv.com/utils/Important-Things-Your-Product-Packaging-Can-Say.jpg" style="
    width: 169px;
"><br><br>
<b style="
    font-size: 17px;
    text-align: center;
">Votre commande a été traitée. On va commencer maintenant avec l'emballage.</b><br> </p><p style="color:#545872;padding-top: 15px;padding-left: 2px;text-align: justify;padding-right: 2px;font-size: 14px;font-weight:400">
Une fois terminée, un mail vous sera envoyé et également vous recevrez une notification depuis l'application mobile de Needpam, confirmant que l'emballage est terminé, et que votre commande est prête à être livrée. </span><br><hr></p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;">
 Vous pouvez aussi controler votre commande à partir de l'application ou du site web de Needpam, en cliquant sur la section: "Mon Compte" puis, "Mes commandes".
</p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;
">Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

 <br>
<p style="text-align:center">
<img src="https://inolemit.sirv.com/Mobile%20app/6a6f2f535cc34fd9f015bb8efd5b4648.jpg" style="width:380px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #53535399;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #535353;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation
<h3 style="text-align:center;
    margin-bottom: 1px;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px"></h3>
</p>

</div>
  `;
const output33 = `
   <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 5px;
    color: #535353;
    align-items: center;
    text-align: center;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #f3f3fac9;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px">
    </div>
  <p style="color:#545872;padding-top: 15px;padding-left: 10px;text-align: center;padding-right: 10px;font-size: 11px;font-weight:400">
    <span style="color: #535353;font-size: 14px;font-family: inherit;font-weight: 400;text-align: center;">
<img src="https://inolemit.sirv.com/utils/Important-Things-Your-Product-Packaging-Can-Say.jpg" style="
    width: 169px;
"><br><br>
<b style="
    font-size: 17px;
    text-align: center;
">La commande  #${informationAdd} a été traitée. On va commencer maintenant avec l'emballage.</b><br> </p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;">
 Vous pouvez aussi controler cette commande à partir de l'application ou du site web de Needpam, en cliquant sur la section: "Mon Compte" puis, "Toutes les commandes".
</p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;
">Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

 <br>
<p style="text-align:center">
<img src="https://inolemit.sirv.com/Mobile%20app/6a6f2f535cc34fd9f015bb8efd5b4648.jpg" style="width:380px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #53535399;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #535353;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation
<h3 style="text-align:center;
    margin-bottom: 1px;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px"></h3>
</p>

</div>
  `;   

const output4 = `
     <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 5px;
    color: #535353;
    align-items: center;
    text-align: center;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #f3f3fac9;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px">
    </div>
  <p style="color:#545872;padding-top: 15px;padding-left: 10px;text-align: center;padding-right: 10px;font-size: 11px;font-weight:400">
    <span style="color: #535353;font-size: 14px;font-family: inherit;font-weight: 400;text-align: center;">
<img src="https://inolemit.sirv.com/utils/Komandess.png" style="
    width: 169px;
"><br><br>
<b style="
    font-size: 17px;
    text-align: center;
">Votre commande(#${informationAdd}) vient d'être emballée.</b><br> </p><p style="color:#545872;padding-top: 15px;padding-left: 2px;text-align: justify;padding-right: 2px;font-size: 14px;font-weight:400">
Donc maintenant, votre commande est prête à être livrée, une fois que les livreurs arrivent, un mail vous sera envoyé et également vous recevrez une notification depuis l'application mobile de Needpam, confirmant que la livraison est actuellement en cours. </span><br><hr></p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;">
 Vous pouvez aussi controler votre commande à partir de l'application ou du site web de Needpam, en cliquant sur la section: "Mon Compte" puis, "Mes commandes".
</p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;
">Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

 <br>
<p style="text-align:center">
<img src="https://inolemit.sirv.com/Mobile%20app/6a6f2f535cc34fd9f015bb8efd5b4648.jpg" style="width:380px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #53535399;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #535353;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation
<h3 style="text-align:center;
    margin-bottom: 1px;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px"></h3>
</p>

</div>
  `; 

const output44 = `
     <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 5px;
    color: #535353;
    align-items: center;
    text-align: center;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #f3f3fac9;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px">
    </div>
  <p style="color:#545872;padding-top: 15px;padding-left: 10px;text-align: center;padding-right: 10px;font-size: 11px;font-weight:400">
    <span style="color: #535353;font-size: 14px;font-family: inherit;font-weight: 400;text-align: center;">
<img src="https://inolemit.sirv.com/utils/Komandess.png" style="
    width: 169px;
"><br><br>
<b style="
    font-size: 17px;
    text-align: center;
">La commande #${informationAdd} vient d'être emballée.</b><br> </p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;">
 Vous pouvez aussi controler cette commande à partir de l'application ou du site web de Needpam, en cliquant sur la section: "Mon Compte" puis, "Toutes les commandes".
</p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;
">Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

 <br>
<p style="text-align:center">
<img src="https://inolemit.sirv.com/Mobile%20app/6a6f2f535cc34fd9f015bb8efd5b4648.jpg" style="width:380px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #53535399;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #535353;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation
<h3 style="text-align:center;
    margin-bottom: 1px;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px"></h3>
</p>

</div>
  `;

const output5 = `
    <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 5px;
    color: #535353;
    align-items: center;
    text-align: center;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #f3f3fac9;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px">
    </div>
  <p style="color:#545872;padding-top: 15px;padding-left: 10px;text-align: center;padding-right: 10px;font-size: 11px;font-weight:400">
    <span style="color: #535353;font-size: 14px;font-family: inherit;font-weight: 400;text-align: center;">
<img src="https://inolemit.sirv.com/utils/istockphoto-1219503683-170667a.jpg" style="
    width: 169px;
"><br><br>
<b style="
    font-size: 17px;
    text-align: center;
">La livraison de votre commande est en cours.</b><br> </p><p style="color:#545872;padding-top: 15px;padding-left: 2px;text-align: justify;padding-right: 2px;font-size: 14px;font-weight:400">
Un livreur va vous contacter par appel téléphonique ou par sms afin de connaitre votre localisation actuelle pour la livraison. S'il y a d'autres contraintes,  il vous communiquera la procédure à suivre.
 </span><br><hr></p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;">
 Vous pouvez aussi controler votre commande à partir de l'application ou du site web de Needpam, en cliquant sur la section: "Mon Compte" puis, "Mes commandes".
</p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;
">Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

 <br>
<p style="text-align:center">
<img src="https://inolemit.sirv.com/Mobile%20app/6a6f2f535cc34fd9f015bb8efd5b4648.jpg" style="width:380px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #53535399;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #535353;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation
<h3 style="text-align:center;
    margin-bottom: 1px;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px"></h3>
</p>

</div>
  `;

 const output55 = `
    <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 5px;
    color: #535353;
    align-items: center;
    text-align: center;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #f3f3fac9;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px">
    </div>
  <p style="color:#545872;padding-top: 15px;padding-left: 10px;text-align: center;padding-right: 10px;font-size: 11px;font-weight:400">
    <span style="color: #535353;font-size: 14px;font-family: inherit;font-weight: 400;text-align: center;">
<img src="https://inolemit.sirv.com/utils/istockphoto-1219503683-170667a.jpg" style="
    width: 169px;
"><br><br>
<b style="
    font-size: 17px;
    text-align: center;
">La livraison de la commande #${informationAdd} est en cours.</b><br> </p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;">
 Vous pouvez aussi controler cette commande à partir de l'application ou du site web de Needpam, en cliquant sur la section: "Mon Compte" puis, "Toutes les commandes".
</p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;
">Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

 <br>
<p style="text-align:center">
<img src="https://inolemit.sirv.com/Mobile%20app/6a6f2f535cc34fd9f015bb8efd5b4648.jpg" style="width:380px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #53535399;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #535353;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation
<h3 style="text-align:center;
    margin-bottom: 1px;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px"></h3>
</p>

</div>
  `;  

 const output6 = `
    <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 5px;
    color: #535353;
    align-items: center;
    text-align: center;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #f3f3fac9;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px">
    </div>
  <p style="color:#545872;padding-top: 15px;padding-left: 10px;text-align: center;padding-right: 10px;font-size: 11px;font-weight:400">
    <span style="color: #535353;font-size: 14px;font-family: inherit;font-weight: 400;text-align: center;">
<img src="https://inolemit.sirv.com/utils/termineee.png" style="
    width: 219px;
"><br><br>
<b style="
    font-size: 17px;
    text-align: center;
">La livraison de votre commande est terminée.</b><br></p><hr>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;">
 Vous pouvez aussi controler votre commande à partir de l'application ou du site web de Needpam, en cliquant sur la section: "Mon Compte" puis, "Mes commandes".
</p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;
">Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

 <br>
<p style="text-align:center">
<img src="https://inolemit.sirv.com/Mobile%20app/6a6f2f535cc34fd9f015bb8efd5b4648.jpg" style="width:380px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #53535399;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #535353;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation
<h3 style="text-align:center;
    margin-bottom: 1px;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px"></h3>
</p>

</div>
  `; 

  const output66 = `
    <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 5px;
    color: #535353;
    align-items: center;
    text-align: center;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #f3f3fac9;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px">
    </div>
  <p style="color:#545872;padding-top: 15px;padding-left: 10px;text-align: center;padding-right: 10px;font-size: 11px;font-weight:400">
    <span style="color: #535353;font-size: 14px;font-family: inherit;font-weight: 400;text-align: center;">
<img src="https://inolemit.sirv.com/utils/termineee.png" style="
    width: 219px;
"><br><br>
<b style="
    font-size: 17px;
    text-align: center;
">La livraison de la commande #${informationAdd} est terminée.</b><br></p><hr>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;">
 Vous pouvez aussi controler les commandes à partir de l'application ou du site web de Needpam, en cliquant sur la section: "Mon Compte" puis, "Toutes les commandes".
</p>
<p style="
    color: #9294a0;
    padding-bottom: 5px;
    padding-top: 10px;
">Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

 <br>
<p style="text-align:center">
<img src="https://inolemit.sirv.com/Mobile%20app/6a6f2f535cc34fd9f015bb8efd5b4648.jpg" style="width:380px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #53535399;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #535353;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation
<h3 style="text-align:center;
    margin-bottom: 1px;
"><img src="https://inolemit.sirv.com/utils/output-onlinepngtools%20(13).png" style="height:25px"></h3>
</p>

</div>
  `;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'needpamteam@gmail.com',
      pass: 'Needpam2021#'
    }
  });

if (categorie === 1 || categorie === "1") {
   
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: to,
    subject: 'Votre commande est placée🛒  | Needpam',
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output1
  }; 


 await transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      } else{
        return console.log('Your Email has been sent: ' + info.messageId);  
}
  }); 

  
}
else if (categorie === 11 || categorie === "11") {
   
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: 'gamestartgroup@gmail.com',
    subject: "Une commande vient d'être placée🛒  | Needpam",
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output11
  }; 
  
 await transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      }
else{
        return console.log('Your Email has been sent: ' + info.messageId);  
}

  }); 

  
}
 else if (categorie === 2 || categorie === "2") {
   
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: to,
    subject: "L'analyse de Votre commande🛒 est en cours | Needpam",
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output2
  }; 
  
 await transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      }
else {
        return console.log('Your Email has been sent: ' + info.messageId);  
}

  }); 

  
}
else if (categorie === 22 || categorie === "22") {
   
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: 'gamestartgroup@gmail.com',
    subject: "L'analyse de la commande🛒 est en cours | Needpam",
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output22
  }; 
  
 await transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      }
else {
        return console.log('Your Email has been sent: ' + info.messageId);  
}
  }); 

  
}
else if (categorie === 3 || categorie === "3") {
   
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: to,
    subject: "L'emballage de Votre commande🛒 est en cours | Needpam",
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output3
  }; 
  
 await transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      }
else {
        return console.log('Your Email has been sent: ' + info.messageId);  
}

  }); 

  
} 
else if (categorie === 33 || categorie === "33") {
   
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: 'gamestartgroup@gmail.com',
    subject: "L'emballage de la commande🛒 est en cours | Needpam",
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output33
  }; 
  
 await transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      }
else {
        return console.log('Your Email has been sent: ' + info.messageId);  
}

  }); 

  
} 
else if (categorie === 4 || categorie === "4") {
   
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: to,
    subject: "L'emballage de Votre commande🛒 est terminée | Needpam",
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output4
  }; 
  
 await transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      }
else {
        return console.log('Your Email has been sent: ' + info.messageId);  
}
  }); 

  
}
else if (categorie === 44 || categorie === "44") {
   
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: 'gamestartgroup@gmail.com',
    subject: "L'emballage de la commande🛒 est terminée | Needpam",
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output4
  }; 
  
 await transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      }

     else {
        return console.log('Your Email has been sent: ' + info.messageId);  
}

  }); 

  
}
else if (categorie === 5 || categorie === "5") {
   
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: to,
    subject: "La livraison de Votre commande🛒 est en cours | Needpam",
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output5
  }; 
  
 await transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      }

      else {
        return console.log('Your Email has been sent: ' + info.messageId);  
}

  }); 

}
else if (categorie === 55 || categorie === "55") {
   
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: 'gamestartgroup@gmail.com',
    subject: "La livraison de la commande🛒 est en cours | Needpam",
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output5
  }; 
  
 await transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      }
else {
        return console.log('Your Email has been sent: ' + info.messageId);  
}

  }); 

}
else if (categorie === 6 || categorie === "6") {
   
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: to,
    subject: "La livraison de Votre commande🛒 est terminée | Needpam",
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output6
  }; 
  
 await transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      }
else {
        return console.log('Your Email has been sent: ' + info.messageId);  
}

  }); 

  
}
else if (categorie === 66 || categorie === "66") {
   
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: 'gamestartgroup@gmail.com',
    subject: "La livraison de la commande🛒 est terminée | Needpam",
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output6
  }; 
  
 await transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      }
else {
        return console.log('Your Email has been sent: ' + info.messageId);  
}

  }); 

  
}
 else {
  console.log("Li egal ak yon lot bagay", categorie)
}

}
}