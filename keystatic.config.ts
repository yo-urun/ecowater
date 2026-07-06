import { defineConfig, collection } from '@keystatic/core';

export default defineConfig({
  storage: {
    kind: 'local',
  },
  collections: {
    products: collection({
      label: 'Products',
      slugField: 'slug',
      schema: {
        title: { label: 'Title', type: 'string' },
        slug: { label: 'Slug', type: 'string' },
        description: { label: 'Description', type: 'text' },
        price: { label: 'Price', type: 'number' },
      },
    }),
    articles: collection({
      label: 'Articles',
      slugField: 'slug',
      schema: {
        title: { label: 'Title', type: 'string' },
        slug: { label: 'Slug', type: 'string' },
        content: { label: 'Content', type: 'markdown' },
      },
    }),
    locations: collection({
      label: 'Locations',
      slugField: 'slug',
      schema: {
        name: { label: 'Name', type: 'string' },
        slug: { label: 'Slug', type: 'string' },
        address: { label: 'Address', type: 'string' },
      },
    }),
  },
});
