export default {
    name: 'toppicks',
    title: 'Top Picks',
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
            type: 'object',
            name: 'product',
            fields: [
              {
                name: 'productTitle',
                title: 'Product Title',
                type: 'string',
                validation: (Rule: { required: () => any; }) => Rule.required(),
              },
              {
                name: 'productImage',
                title: 'Product Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
              {
                name: 'price',
                title: 'Price',
                type: 'string',
                validation: (Rule: { required: () => any; }) => Rule.required(),
              },
            ],
          },
        ],
      },
      {
        name: 'viewMoreText',
        title: 'View More Button Text',
        type: 'string',
      },
    ],
  };
  