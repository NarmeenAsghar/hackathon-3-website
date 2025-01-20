export default {
    name: 'newsofa',
    title: 'New Sofa',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Sofa Title',
        type: 'string',
        description: 'Title of the new sofa',
      },
      {
        name: 'image',
        title: 'Sofa Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Image of the sofa',
      },
      {
        name: 'buttonText',
        title: 'Order Button Text',
        type: 'string',
        description: 'Text that will appear on the button',
        default: 'Order Now',
      },
    ],
  };
  