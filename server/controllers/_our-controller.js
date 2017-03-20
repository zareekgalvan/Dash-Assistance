exports.helloworld = function(req, res, next) {
  res.status(200).json({
    message: "Hello world!"
  })
}
exports.saySomething = function(req, res, next) {
  res.status(200).json({
  	message: "hi"
  })
}
exports.postSomething = function(req, res, next) {
  res.send({id: req.body.id, name: req.body.name, description: req.body.description});
  next();
}