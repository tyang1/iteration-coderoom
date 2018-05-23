const User = require("./../model/database");
const userController = {};
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

userController.checkExisting = (req,res,next) => {
  console.log("we are on server port!!!!!")
  console.log("here are the req.body in existing", req.body.name, req.body.password)
    if(req.body.name && req.body.password){
      console.log("there are username and pwd")
        User.count({username : req.body.name}, (err,results) => {
            if(err){ res.send(err)};
            console.log("here is the result", results);
            if(results > 0) {res.send("the username is taken.")} 
            else{next()}
        })
    }else{
      res.send(false)

    }
}

userController.createUser = (req, res, next) => {
  let {name,password} = req.body;
  let salt;
  let hash;
  if (
    typeof req.body.name === "string" &&
    typeof req.body.password === "string"
  ) {
    let promise = new Promise(((resolve,reject) => {
      console.log("in the new promise");
      bcrypt.genSalt(SALT_WORK_FACTOR, (err,saltt) => {
        console.log("bcrypt genSalt");
        if(err) { console.log("salt generation err", err); reject(err);};
        salt = saltt;
        bcrypt.hash(password, saltt, (err,hash) => {
          if(err) { console.log("hash generation err", err); reject};
          password = hash;
          console.log("this is the hash!!!!", hash);
          resolve();
        });
      });
    })).then(() => {
      // console.log("Armannnnnn");
      User.create(
      {
        username: req.body.name,
        password: password,
        salt: salt,
        level: 0,
        totalTime: 0,
        createdAt: Date.now()
      },
      (err, updated) => {
        if(err){ console.log(err);
          res.send(err);
        }else{
          console.log("created user!!!!")
          res.send(updated);
        }
      }
    )})
    // .catch(err){
    //   console.log("ERRRRRR", err)
    // }
      }
    // next();
};

userController.verifyUser = (req, res, next) => {
  console.log("req body", req.body);
  let {name,password} = req.body;
  // console.log('req is ', req);
  console.log('req.body.username is ', req.body.username);
  console.log('req.body.password is :', req.body.password);
  // console.log('res is ', res);
  User.findOne({ username: req.body.username }, (err, user) => {
    console.log('entered findOne method, user document (object) is: ', user);
    // SELECT * FROM users WHERE username = Arman (for SQL)
    if (err) return res.status(400).render('error', { error: err });
    if (user === null) res.send(false);
    let plainPass = req.body.password; //ab2
    let userHash = user.password; //hashed ab2
    bcrypt.compare(plainPass, userHash, (err2, isMatch) => {
      console.log('entered comparePassword method, match? :', isMatch);
      if (err) res.status(500).render('error', { error: err });
      if (!isMatch) return res.status(403).render('error', { error: err });
      console.log(req.body.username, ' verification complete.');
      next();
    });
  });
};

module.exports = userController;
