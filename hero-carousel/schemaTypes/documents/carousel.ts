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
              name: 'media',
              title: 'Slide Media',
              type: 'object',
              fields: [
                defineField({
                  name: 'asset',
                  title: 'Image or Video',
                  type: 'array',
                  of: [
                    {
                      type: 'image',
                      title: 'Image',
                      options: {
                        hotspot: true,
                      },
                      fields: [
                        {
                          name: 'alt',
                          type: 'string',
                          title: 'Alt Text',
                        },
                      ],
                      validation: (Rule) =>
                        Rule.required().error('You need to add an image or video.'),
                    },
                    {
                      type: 'file',
                      title: 'Video',
                      options: {
                        accept: 'video/*',
                      },
                      validation: (Rule) =>
                        Rule.required().error('You need to add an image or video.'),
                    },
                  ],
                  validation: (Rule) =>
                    Rule.length(1).error('Only one media asset (image or video) is allowed.'),
                }),
              ],
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'subTitle',
              title: 'SubTitle',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'ctaText',
              title: 'CTA text',
              type: 'string',
            }),
            defineField({
              name: 'ctaLink',
              title: 'CTA link',
              type: 'url',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).error('You need at least one slide in the carousel.'),
    }),
  ],
})
