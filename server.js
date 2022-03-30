const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const fs = require('fs/promises');
let SavedInfo = [];

const Query = require("minecraft-query");

const nodemailer = require("nodemailer");
let emailConnection = false, transporter = "";

const cors = require("cors");

const app = express();
const port = process.env.PORT || 3080;

app.use(cors({
  origin: 'http://localhost:3080',
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
async function Sendemail(mail, name){
  await OpenSaved();
  if(SavedInfo != null){
    for(var i = 0; i < SavedInfo.length; i++){
      if (SavedInfo[i] == name){
        return true;
      }
    }
  }
  return new Promise ((resolve, reject)=>{
    transporter = nodemailer.createTransport({
      service: 'GMail',
      auth: {
        user: "flossedmeat@gmail.com",
        pass: "32Beardsley"
      }
    });
    transporter.verify(function(error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Flossedmeat@gmail.com is connected!");
      }
    });
    transporter.sendMail(mail, function(error, info){
      if (error) {
        console.log("hhhhererer")
        console.log(error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        SaveInfo(name);
        resolve();
      }
    })
  });
  return false;
}
async function SaveInfo(name){
  try{
    SavedInfo.push(name)
    console.log(SavedInfo)
    fs.writeFile(path.join(__dirname, 'savedmessages.json'), JSON.stringify(SavedInfo, null, 2))
  }catch (e){
    console.log(e)
    console.log("could not write")
  }
}
async function OpenSaved(){
  try {
    const data = await fs.readFile(path.join(__dirname, 'savedmessages.json'))
    SavedInfo = JSON.parse(data);
  } catch (e){
    console.log(e)
  }
}

app.get('/api/smp', (req, res) => {
  const pve_survival = new Query({host: 'www.s8gaming.net', port: 25502, timeout: 7500});
  pve_survival.fullStat()
    .then(success => {
      res.send({ success});
      pve_survival.close();
    }).catch(err=>{
      res.send(false);
      pve_survival.close();
      console.log("PvE cannot be reached...")
    });
});

app.post('/api/application', (req, res) => {
  let text = 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + 'Usernames: ' + req.body.discord + '\n' + 'OtherUsernames: ' + req.body.other + '\n' + 'Applying For: ' + req.body.for + '\n' + 'Application: ' + req.body.text
  let message = {
    from: '"S8 Gaming" <flossedmeat@gmail.com>',
    to: 'flossedmeat@s8gaming.net',
    subject: "Application for " + req.body.name + " (" + req.body.discord + ")",
    text: text
  }
  let emailCheck = Sendemail(message, req.body.email);
  if (emailCheck == true) {res.send(true)}
  else{res.send(false)}
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/public')));
  
  // Handle React routing, return all requests to React app
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));