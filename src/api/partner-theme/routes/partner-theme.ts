export default {
  routes: [
    {
      method: 'GET',
      path: '/partner-themes',
      handler: 'partner-theme.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/partner-themes/:id',
      handler: 'partner-theme.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/partner-themes',
      handler: 'partner-theme.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/partner-themes/:id',
      handler: 'partner-theme.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/partner-themes/:id',
      handler: 'partner-theme.delete',
      config: {
        policies: [],
      },
    },
  ],
};
