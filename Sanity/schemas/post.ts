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
      name: 'subtitle',
      title: 'Subtitle',
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
      name: 'postImage',
      title: 'Post Image',
      type: 'string',
      
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      
    },
    {
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      
    },
  ],
};
