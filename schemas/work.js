import {defineField, defineType} from 'sanity'

export let categories = [
  {title: '', slug: ''},
  {title: '', slug: ''},
  {title: '', slug: ''},
  {title: '', slug: ''},
]

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'catergory',
      title: 'Catergory',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'categoryItem',
          },
        },
      ],
    }),

    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'credit',
          },
        },
      ],
    }),

    defineField({
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
