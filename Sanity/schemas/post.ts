export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      
      
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      
    },
  ],
};
