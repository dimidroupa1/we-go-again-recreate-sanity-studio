import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mainPage',
  title: 'Main page',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'work',
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
