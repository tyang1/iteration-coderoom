const User = require("./../model/database");
const userController = {};

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
    User.create(
      {
        username: req.body.username,
        password: req.body.password,
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
