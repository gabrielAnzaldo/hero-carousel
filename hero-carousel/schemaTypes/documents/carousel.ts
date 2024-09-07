import {defineType, defineField} from 'sanity'

export const carouselType = defineType({
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Carousel Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(80),
    }),
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Slide Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).error('You need at least one slide in the carousel.'),
    }),
  ],
})
