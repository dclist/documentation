
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','eb5'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','29b'),
  exact: true,
},
{
  path: '/features',
  component: ComponentCreator('/features','494'),
  exact: true,
},
{
  path: '/sdk/',
  component: ComponentCreator('/sdk/','442'),
  exact: true,
},
{
  path: '/sdk/node/',
  component: ComponentCreator('/sdk/node/','ef4'),
  exact: true,
},
{
  path: '/sdk/node/advanced/fieldSelector',
  component: ComponentCreator('/sdk/node/advanced/fieldSelector','158'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
