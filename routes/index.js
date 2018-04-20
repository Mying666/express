var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req)
  res.render('index', { 
    title: '首页',
    link: {
      name: 'part1',
      href: '/part1'
    }
  });
});
// router.get('/part1', function(req, res, next) {
//   res.render('index', { 
//     title: 'part1页面',
//     link: {
//       name: '首页',
//       href: '/indexejs'
//     }
//   });
// });

module.exports = router;
