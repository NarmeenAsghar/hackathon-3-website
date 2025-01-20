export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Main Heading',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            name: 'product',
            title: 'Product',
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
              {
                name: 'title',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'readMore',
                title: 'Read More',
                type: 'string',
              },
              {
                name: 'readTime',
                title: 'Read Time',
                type: 'string',
                description: 'Time taken to read the blog (e.g., 5 min)',
              },
              {
                name: 'publishDate',
                title: 'Publish Date',
                type: 'date',
              },
            ],
          },
        ],
      },
      {
        name: 'viewAllPost',
        title: 'View All Post',
        type: 'string',
      },
    ],
  };
  