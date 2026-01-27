export default {
  name: 'author',
  title: 'Autores',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Biografía',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
