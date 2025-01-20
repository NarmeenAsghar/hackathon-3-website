export default {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The main title of the hero section',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        description: 'The button description or text (e.g., "Shop Now")',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // allows for better cropping
        },
        description: 'The image for the hero section',
      },
      {
        name: 'imageAlt',
        title: 'Image Alt Text',
        type: 'string',
        description: 'Alt text for the image',
      },
    ],
  };
  