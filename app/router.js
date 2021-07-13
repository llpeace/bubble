'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.renderIndex);
  // router.redirect('/', '/dist', 302);

  router.get('*', controller.home.renderIndex);
};
