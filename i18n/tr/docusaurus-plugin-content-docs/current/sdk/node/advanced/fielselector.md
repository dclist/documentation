---
id: fieldSelector
slug: /sdk/node/advanced/fieldSelector
title: Field Selectors
---

## Concept of Field Selectors {#concept}

If you are familiar with graphql api, you are going to easily understand aim of field selectors.

Basically field selectors helps you to get **exactly** what you are looking for. With field selectors, you decide to what server should return.

For example; When you fetch a bot from our api, it returns bot without its stats (vote count, etc.) to reduce apis latency in general usage. When you need bots stats, you can tell that to the server with Field Selector. Server will listen to you and return the desired data.

## Usage {#usage}

Field selectors are just normal javascript classes. You can create them using "new" keyword.

### Creating {#creating}

You can construct field selectors like all classes in javascript world :

```js
const fSelector = new FieldSelector({
    id: 1,
    username: 1,
    discriminator: 1,
    avatar: 1
}
```

### Using

You can pass custom field selectors pretty much all functions of GatewayClient. Common usage for them is usually when working with bots and users.

```js
dclClient.getBotById('690214077490004030', fSelector)
```

### With Typescript

Field selectors are highly-typed classes. You can pass generic types to them. It allows you to use auto-compilation features.

```ts
import { Bot } from '@dclist/sdk'

const fSelector = new FieldSelector<Bot>({
    id: 1,
    username: 1,
    discriminator: 1,
    avatar: 1
}
```

In the code above, we're creating a field selector for type "Bot". We can pass this class to getBotById function later.

## Examples {#examples}

It will be more understandable with some examples.

Normal way to fetch bot from our api is :

```js
dclClient.getBotById('690214077490004030')
// Returns
{
  id: '690214077490004030',
  username: 'Techno Bot',
  discriminator: '1197',
  avatar: 'ffa1ff0c8616ef03c9a87871a654ae3e',
  stats: { ... },
  prefix: 't!',
  prefixType: 'DYNAMIC',
  website: 'https://technobot.xyz/',
  github: null,
  tags: [ 'turkish', 'game', 'dashboard' ]
}
```

When you don't specify any field selector, sdk will automatically fall back to default one. If default one doesn't fit in your usage, you can customize it.

For example if you want to get bots owner beside bot itself. You can do something like this :

```js {8-13}
new FieldSelector({
    id: 1,
    username: 1,
    discriminator: 1,
    avatar: 1,
    prefix: 1,
    tags: 1,
    owner: {
        id: 1,
        username: 1,
        discriminator: 1,
        avatar: 1
    }
})
```

Now it will return only wanted/need fields :
```js
{
  id: '690214077490004030',
  username: 'Techno Bot',
  discriminator: '1197',
  avatar: 'ffa1ff0c8616ef03c9a87871a654ae3e',
  prefix: 't!',
  tags: [ 'turkish', 'game', 'dashboard' ],
  owner: {
    id: '685124491466113096',
    username: 'technoeren',
    discriminator: '7608',
    avatar: '95d834bd53399f6fe4b9b7fee2dcc38c'
  }
}
```
