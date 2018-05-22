const User = require("./../model/database");
const userController = {};
const crypto = require('crypto');


//salt generation
var genRandomString = function(length){
  return crypto.randomBytes(Math.ceil(length/2))
          .toString('hex') /** convert to hexadecimal format */
          .slice(0,length);   /** return required number of characters */
};
//has password with sha512
var sha512 = function(password, salt){
  var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest('hex');
  return {
      salt:salt,
      passwordHash:value
  };
};

userController.checkExisting = (req,res,next) => {
    if(req.body.username && req.body.password){
        User.count({username : req.body.username}, (err,results) => {
            if(err){ return res.send(err)}
            if(results !== 0) {return res.send("the username is taken.")};
            next();
        })
    }else{
        return res.send("The username or password cannot be empty.")
    }
}

userController.createUser = (req, res, next) => {
  if (
    typeof req.body.username === "string" &&
    typeof req.body.password === "string"
  ) {
    let salt = genRandomString(16);
    let passwordData = sha512(req.body.password, salt);
    User.create(
      {
        username: req.body.username,
        password: passwordData,
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
    );
  }
};

module.exports = userController;
