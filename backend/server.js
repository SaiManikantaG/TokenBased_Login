var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var auth = require('./auth');
var User = require('./models/user');
var Post = require('./models/Post');
var jwt = require('jwt-simple');

mongoose.Promise = Promise;

app.use(cors());
app.use(bodyParser.json());

app.get('/posts/:id', async (req, res) => {
  try {
    var author = req.params.id;
    var posts = await Post.find({
      author
    });
    res.send(posts);
  } catch (err) {
    res.sendStatus(401).message(`author not found`);
  }
});

app.post('/posts', auth.checkAuthenticator, (req, res) => {
  var postData = req.body;
  postData.author = req.userId;
  var post = new Post(postData);
  post.save((err, result) => {
    if (err) {
      console.error(`Saving Post Error`);
      res.sendStatus(500);
    }
    res.send(200);
  });
});

app.get('/users', async (req, res) => {
  try {
    var users = await User.find({}, '-pswd -__v');
    res.send(users);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/profile/:id', async (req, res) => {
  try {
    var users = await User.findById(req.params.id, '-pswd -__v');
    res.send(users);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
// Enter your connection string along with user creds to connect to MongoDB below
mongoose.connect(
  '<<Database Connection String>>',
  err => {
    if (!err) {
      console.log(`connected to mongoose`);
    }
    console.log(`Check your database credentials`)
  }
);

app.use('/auth', auth.router);
app.listen(3000);