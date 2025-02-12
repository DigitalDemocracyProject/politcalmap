const express = require('express');
const bodyParser = require('body-parser');
const { specs, swaggerUi } = require('./swagger.cjs');
const router = require('./routes/sample-user.cjs');
const cors = require("cors");
const {v6: uuidv6} = require('uuid');
const cookieparser = require('cookie-parser');
const app = express();
const https = require('https');
const fs = require('fs');
const credentials = {
    key: fs.readFileSync('localhost.key'),
    cert: fs.readFileSync('localhost.crt')
};
const server = https.createServer(credentials, app);
app.use(router);
app.use(cors({origin:'http://localhost:5173', credentials:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieparser())
const port = 3000;

let MongoClient = require('mongodb').MongoClient;

const client = new MongoClient('mongodb://localhost:27017', { monitorCommands: true });
client.on('commandStarted', started => console.log(started));
const db = client.db("SriLankanPoliticalMapTest");
const questions = db.collection('questions');
let formSubmissions = 0;
const documents = [
    {
        _id: '1',
        question: "I'd always support my country, whether it was right or wrong.",
        answers: [
          {
              _id: "1",
              answer: "Strongly disagree"
          },
          {
              _id: "2",
              answer: "Disagree"
          },
          {
              _id: "3",
              answer: "Agree"
          },
          {
              _id: "4",
              answer: "Strongly agree"
          }
        ]
    },
    {
        _id: '2',
        question: "The government should heavily tax the wealthy to reduce income inequality.",
        answers: [
          {
              _id: "1",
              answer: "Strongly disagree"
          },
          {
              _id: "2",
              answer: "Disagree"
          },
          {
              _id: "3",
              answer: "Agree"
          },
          {
              _id: "4",
              answer: "Strongly agree"
          }
        ]
    },
    {
        _id: '3',
        question: "Corporations should be allowed to operate without significant government interference.",
        answers: [
          {
              _id: "1",
              answer: "Strongly disagree"
          },
          {
              _id: "2",
              answer: "Disagree"
          },
          {
              _id: "3",
              answer: "Agree"
          },
          {
              _id: "4",
              answer: "Strongly agree"
          }
        ]
    },
    {
        _id: '4',
        question: "Government decisions should always be transparent, even if it compromises national security.",
        answers: [
          {
              _id: "1",
              answer: "Strongly disagree"
          },
          {
              _id: "2",
              answer: "Disagree"
          },
          {
              _id: "3",
              answer: "Agree"
          },
          {
              _id: "4",
              answer: "Strongly agree"
          }
        ]
    },
    {
        _id: '5',
        question: "Freedom of speech should include the right to express controversial or offensive opinions.",
        answers: [
          {
              _id: "1",
              answer: "Strongly disagree"
          },
          {
              _id: "2",
              answer: "Disagree"
          },
          {
              _id: "3",
              answer: "Agree"
          },
          {
              _id: "4",
              answer: "Strongly agree"
          }
        ]
    }
];
let result = [];
questions.deleteMany({}).then(()=>{
    questions.insertMany(documents).then(()=>{
        /*
        result = [];
        questions.find({}).toArray().then((questions)=>{questions.forEach((question)=>{result.push(question);});}).catch((err)=>{console.log(err);}).finally(()=>{
            client.close();
            app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
            //module.exports = result;
            console.log(`result: ${result}`);
            app.get('/', (req, res) => {
                res.cookie('id', uuidv6(), {httpOnly: true}); // "HttpOnly" - The cookie cannot be accessed by client-side scripts
                res.status(200);
                res.send(JSON.stringify(result));
              });
        */      
              server.listen(port, () => {
                console.log(`Server is running on https://localhost:${port}`);
                //console.log(result);
              });
        //});
    }).catch((err)=>{console.log(err)});
}).catch((err)=>{console.log(err)});
module.exports = documents;
//console.log(`cookie-example: ${uuidv6()}`);
app.get('/', (req, res) => {
    result = [];
    client.connect('mongodb://localhost:27017');
    questions.find({}).toArray().then((questions)=>{questions.forEach((question)=>{result.push(question);});}).catch((err)=>{console.log(err);}).finally(()=>{
        client.close();
        res.cookie('id', uuidv6(), {httpOnly: true, secure:true, sameSite:'none'});
        res.status(200);
        res.send(JSON.stringify(result));
    });
  });
result = [];
client.connect('mongodb://localhost:27017');
const users = db.collection("users");
const user_responses = {};
app.post('/users', (req, res) => {
  const formData = req.body;
  //console.log(req.body);//check body
  app.get('/form-data', (req, res)=>{
    res.status(200);
    res.send(JSON.stringify(formData));
  });
  const sentDate = Date.now();
  let cookie;
  console.log("Cookies:");
  console.log(req.cookies);
  if (req.cookies && req.cookies.id) {
    cookie = req.cookies.id;
    formSubmissions += 1;
    const response = {_id: formSubmissions.toString(), submittedDate: sentDate, userAnswers: formData};
    console.log(response);
    if (Object.keys(user_responses).find((x)=>x===cookie)) {
      user_responses[cookie].push(response)
    }else{
      user_responses[cookie] = [response,];
    }
    const user = {_id: cookie, responses: user_responses[cookie]}
    // Process the form data and store it in your database or perform other actions
    console.log(user);
    client.connect('mongodb://localhost:27017');
      users.updateOne({_id: cookie}, {$set: user}, {upsert: true}).then(()=>{
          result = []
          users.find({}).toArray().then((users)=>{users.forEach((user)=>{result.push(user);});}).catch((err)=>{console.log(err);}).finally(()=>{
              client.close();
              app.get('/users', (req, res) => {
                  res.send(JSON.stringify(result));
                });
          });
      }).catch((err)=>{
          console.log(`Error: ${err}`);
          //console.log('Request:');
          //Object.keys(req).forEach((key)=>console.log(`${key}: ${req[key]}`)); //request(req) has no property called body. why???
          app.get('/users', (req, res) => {
              res.send(JSON.stringify({Error: err.message}));
          });
      });
      
    res.send(JSON.stringify({'message':'Form data received!', 'data': `${formData}`}));
  }else{
    res.status(403).send({
        error: 'Cookies must be enabled to continue.',
        instructions: 'Please enable cookies in your browser settings.',
        links: [
          { text: 'Chrome instructions', href: 'https://support.google.com/chrome/answer/95647' },
          { text: 'Firefox instructions', href: 'https://support.mozilla.org/en-US/kb/enabling-and-disabling-cookies' }
        ]
    })
  }
  //if cookie is undefined, find a way to ask the client to enable cookies.
  //console.log(`cookie: ${cookie}`);
});
app.get('/users', (req, res) => {
    result = [];
    client.connect('mongodb://localhost:27017');
    users.find({}).toArray().then((users)=>{users.forEach((user)=>{result.push(user);});}).catch((err)=>{console.log(err);}).finally(()=>{
        client.close();
        res.send(JSON.stringify(result));
        result = [];
    });
});