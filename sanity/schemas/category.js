export default {
  name: 'category',
  title: 'Categorías',
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
      name: 'description',
      title: 'Descripción',
      type: 'text'
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'Azul Eléctrico', value: 'azul-electrico' },
          { title: 'Celeste Tech', value: 'celeste-tech' },
          { title: 'Azul Profundo', value: 'azul-profundo' },
          { title: 'Gris Azulado', value: 'gris-azulado' }
        ]
      }
    }
  ]
}
