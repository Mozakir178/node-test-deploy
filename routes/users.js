var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/message" , (req,res) => {
  res.json({message: "This is message from user route"})
})
module.exports = router;
