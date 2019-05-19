module.exports = (req, res, next) => {
  if (req.session && !req.session.user) {
    return next();
  }

  if (req.session.user.provider) return res.redirect('/app/scheduled');

  return res.redirect('/app/dashboard');
};
