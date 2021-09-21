export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6149b1eed97acacffa34b31c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-test-studio-kkutm9un',
                  apiId: '672beab2-64bf-4e64-83e2-9a75fc02d0d6'
                },
                {
                  buildHookId: '6149b1eea53111a6a025b689',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-test-web-z8947iqi',
                  apiId: '8460603a-251b-45fe-8c2a-cf0a31e75edd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alastair38/sanity-kitchen-sink-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-test-web-z8947iqi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
