export default {
  name: 'post',
  title: 'Artículos del Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo'
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categorías',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Extracto',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(200)
    },
    {
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Texto alternativo'
            }
          ]
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Título',
          type: 'string',
          validation: (Rule) => Rule.max(60)
        },
        {
          name: 'metaDescription',
          title: 'Meta Descripción',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160)
        },
        {
          name: 'keywords',
          title: 'Palabras Clave',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags'
          }
        }
      ]
    },
    {
      name: 'featured',
      title: 'Artículo Destacado',
      type: 'boolean',
      description: 'Marcar como artículo destacado en la portada'
    },
    {
      name: 'readingTime',
      title: 'Tiempo de Lectura (minutos)',
      type: 'number'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `por ${author}` }
    }
  }
}
