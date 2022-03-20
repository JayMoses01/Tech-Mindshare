const withAuth = (req, res, next) => {
    // JRM: Redirect the request to the "login" route if the user is not yet logged in.
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  