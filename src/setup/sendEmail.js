// Imports
import path from 'path'
import nodemailer from 'nodemailer'
import express from 'express';

// App Imports
import serverConfig from '../config/server.json'

// File upload configurations and route
export default function (server) {
  console.info('SETUP - Send Email...')
  

  server.post(serverConfig.sendMail.endpoint, (req, res) => {
  const {to, message} = req.body;

  const newMessage = message.substr(10, 7);
   const output = `
    <div style="
    padding: 3px;
    color: #545872;
    text-align: justify;
    background: #e4e6f50d;
   "><div style="
    margin: 0 auto;
    padding: 10px;
    color: #fff;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background-color: #483fa8;
">
  <h3 style="
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    font-family: sans-serif;
    margin-bottom: 16px;
">Needpam Community</h3>
<p style="
    color: #fff;
    padding-bottom: 10px;
    font-size: 14px;
    font-family: sans-serif;
">
Hello! Merci d'avoir choisi Needpam. Veuillez utiliser le code de vérification ci-dessous pour confirmer votre identité.</p>
    </div>
  <p style="
    color: #545872;
    align-content: center;
    text-align: center;
">
    <b style="
    color: #0b40ee;
    font-size: 22px;
    font-family: sans-serif;
">Verification code:</b><br>
    <span style="
    color: #0b40ee;
    font-weight: 800;
    font-family: sans-serif;
    font-size: 30px;
">${newMessage}</span>
  </p>

<p style="
    color: #7a7e9d;
    padding-bottom: 5px;
    font-variant: ordinal;
    padding-top: 10px;
">*Pour obtenir des informations générales sur le portail, consultez la page <a href="https://www.needpam.com/contact">Contactez-nous</a>. Pour une aide supplémentaire, contactez-nous en utilisant la même page.</p>

<p style="
    color: #7a7e9d;
    padding-bottom: 10px;
    font-variant: ordinal;
    padding-top: 10px;
">N.B: Needpam ne vous enverront jamais de courrier électronique et ne vous demanderont pas de divulguer ou de vérifier votre mot de passe, votre carte de crédit ou votre numéro de compte bancaire. Si vous recevez un e-mail suspect avec un lien pour mettre à jour les informations de votre compte, ne cliquez pas sur le lien. Au lieu de cela, signalez l'e-mail à Needpam..</p>
<br> <br>
<p style="text-align:center">
<img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" style="width:280px"/>
</p>
<p style="
    text-align: center;
    font-family: sans-serif;
    color: #4168e8;
">www.needpam.com</p>
<p style="
    font-family: inherit;
    color: #4d77ff;
    text-align: center;
    font-weight: 800;
">Needpam Community | Gamestart Corporation</p>

</div>
  `; 
   var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'needpamteam@gmail.com',
      pass: 'Needpam2021#'
    }
  });
  var mailOptions = {
    from: 'needpamteam@gmail.com',
    to: to,
    subject: 'Verification Code | Needpam.com',
    text: 'Hi Needpam, I am actually testing a new feature',
    html: output
  }; 
  transporter.sendMail(mailOptions,(error, info) =>{
      if (error) {
        return console.log('Email sent: ' + error);  
      }

      res.status(200).send({
        message: "Mail send", message_id: info.messageId
      });

  }); 
});
}
