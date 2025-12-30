'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/leads/public',
      handler: 'lead.publicCreate',
      config: { auth: false }
    }
  ]
};
