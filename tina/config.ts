import { defineConfig } from 'tinacms'

const branch = process.env.TINA_BRANCH || 'main'

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
    basePath: 'admin',
  },
  media: {
    tina: {
      mediaRoot: 'src/assets',
      publicFolder: 'public',
    },
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ['por'],
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'src/content/posts',
        format: 'mdx',
        ui: {
          router: ({ document }) => {
            return `/posts/${document._sys.filename}`
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Título',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'published',
            label: 'Data de Publicação',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Descrição',
            required: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Imagem de Capa',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'string',
            name: 'category',
            label: 'Categoria',
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Rascunho',
          },
          {
            type: 'string',
            name: 'lang',
            label: 'Idioma',
            options: [
              {
                value: 'pt-BR',
                label: 'Português',
              },
              {
                value: 'en',
                label: 'English',
              },
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Conteúdo',
            isBody: true,
          },
        ],
      },
    ],
  },
})
