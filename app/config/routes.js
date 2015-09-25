var express = require('express');
var apiRouter = express.Router();
var Article = require('../models/article');
var articlesController = require('../controllers/articles'); // bring in controllers
// param middleware is called before .use() middleware
// use param to refactor findById code
apiRouter.param('article_id', articlesController.articleById);
// RESTful routes:
apiRouter.route('/articles')
  .post(articlesController.create)
  .get(articlesController.index);
apiRouter.route('/articles/:article_id')
  .get(articlesController.show)
  .patch(articlesController.update)
  .delete(articlesController.destroy);
module.exports = apiRouter;
// var express = require('express'),
//  apiRouter = express.Router(),
//  articlesController = require('../controllers/articles'),
//  Article = require( '../models/article' );

//  apiRouter.route('/articles')
//         .post(articlesController.create)
//      .get(articlesController.index)


// module.exports = apiRouter;

