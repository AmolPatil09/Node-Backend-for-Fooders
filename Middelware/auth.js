const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid) {
    const error=new Error("unathorized user")
    error.status=400
    throw error 
  }

  const user = getUser(userUid);

  if (!user) {
        const error=new Error("unathorized user")
        error.status=400
        throw error   
    }

  req.user = user;
  next();
}

// async function checkAuth(req, res, next) {
//   const userUid = req.cookies?.uid;

//   const user = getUser(userUid);

//   req.user = user;
//   next();
// }

module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth,
};