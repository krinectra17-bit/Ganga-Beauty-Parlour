export default {
  name: 'siteSettings',
  title: 'Website Settings',
  type: 'document',

  fields: [
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
    },

    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },

    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },

    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    },

    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
    },

    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Service Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Service Image',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
}