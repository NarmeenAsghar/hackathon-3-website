// Product Schema
const Product = {
    name: 'product',
    title: 'Furniture',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Name of the furniture item',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Detailed description of the furniture item',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Price of the furniture item',
      },
      {
        name: 'stock',
        title: 'In Stock',
        type: 'boolean',
        description: 'Availability of the furniture item',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        description: 'Average rating of the furniture item',
      },
      {
        name: 'reviewCount',
        title: 'Number of Reviews',
        type: 'number',
        description: 'Number of reviews for the furniture item',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'url',
        description: 'Image URL of the furniture item',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        description: 'Category of the furniture item (e.g., Sofa, Table, Chair)',
        options: {
          list: [
            { title: 'Sofa', value: 'Sofa' },
            { title: 'Table', value: 'Table' },
            { title: 'Chair', value: 'Chair' },
            { title: 'Storage', value: 'Storage' },
          ],
        },
      },
      {
        name: 'id',
        title: 'ID',
        type: 'string',
        description: 'Unique identifier for the furniture item',
      },
    ],
  };
  
  // Blog Schema
  const Blog = {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Blog Title',
      },
      {
        name: 'content',
        type: 'text',
        title: 'Content',
      },
      {
        name: 'author',
        type: 'string',
        title: 'Author',
      },
      {
        name: 'publishedDate',
        type: 'datetime',
        title: 'Published Date',
      },
    ],
  };
  
  // Order Schema
  const Order = {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'userId',
        type: 'string',
        title: 'User ID',
      },
      {
        name: 'productId',
        type: 'string',
        title: 'Product ID',
      },
      {
        name: 'quantity',
        type: 'number',
        title: 'Quantity',
      },
      {
        name: 'totalPrice',
        type: 'number',
        title: 'Total Price',
      },
      {
        name: 'orderDate',
        type: 'datetime',
        title: 'Order Date',
      },
    ],
  };
  
  // User Schema
  const User = {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'password',
        type: 'string',
        title: 'Password',
      },
      {
        name: 'authId',
        type: 'string',
        title: 'Auth ID',
      },
    ],
  };
  