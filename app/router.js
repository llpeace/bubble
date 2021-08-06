'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/home', controller.home.renderIndex);
  router.redirect('/', '/home', 302);

  router.get('*', controller.home.renderIndex);
};
