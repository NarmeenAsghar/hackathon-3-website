export default {
    name: 'instagram',
    title: 'Instagram',
    type: 'document',
    fields: [
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(100),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(200),
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(50),
      },
    ],
  }
  