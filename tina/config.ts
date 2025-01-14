import { defineConfig } from 'tinacms'

const branch = process.env.TINA_BRANCH || 'main'

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ['por', 'eng'],
    },
  },

  media: {
    tina: {
      mediaRoot: 'assets',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'posts',
        label: 'Blog Posts',
        path: 'content/posts',
        format: 'md',
        templates: [
          {
            name: 'default',
            label: 'Post Markdown (.md)',
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
                name: 'pubDate',
                label: 'Data de Publicação',
                required: true,
                ui: {
                  dateFormat: 'YYYY-MM-DD',
                  timeFormat: '',
                },
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
                name: 'category',
                label: 'Categoria',
                options: [
                  'Game Design',
                  'Level Design',
                  'Narrativa',
                  'Mecânicas',
                  'Tutoriais',
                ],
              },
              {
                type: 'string',
                name: 'tags',
                label: 'Tags',
                list: true,
              },
              {
                type: 'boolean',
                name: 'draft',
                label: 'Rascunho',
              },
              {
                type: 'rich-text',
                name: 'body',
                label: 'Conteúdo',
                isBody: true,
              },
            ],
          },
          {
            name: 'mdx',
            label: 'Post MDX (.mdx)',
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
                name: 'pubDate',
                label: 'Data de Publicação',
                required: true,
                ui: {
                  dateFormat: 'YYYY-MM-DD',
                  timeFormat: '',
                },
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
                name: 'category',
                label: 'Categoria',
                options: [
                  'Game Design',
                  'Level Design',
                  'Narrativa',
                  'Mecânicas',
                  'Tutoriais',
                ],
              },
              {
                type: 'string',
                name: 'tags',
                label: 'Tags',
                list: true,
              },
              {
                type: 'boolean',
                name: 'draft',
                label: 'Rascunho',
              },
              {
                type: 'rich-text',
                name: 'body',
                label: 'Conteúdo',
                isBody: true,
                templates: [
                  {
                    name: 'CodeBlock',
                    label: 'Bloco de Código',
                    fields: [
                      {
                        name: 'language',
                        label: 'Linguagem',
                        type: 'string',
                        options: [
                          'javascript',
                          'typescript',
                          'python',
                          'json',
                          'html',
                          'css',
                        ],
                      },
                      {
                        name: 'code',
                        label: 'Código',
                        type: 'string',
                        ui: {
                          component: 'textarea',
                        },
                      },
                    ],
                  },
                  {
                    name: 'CalloutBlock',
                    label: 'Callout',
                    fields: [
                      {
                        name: 'type',
                        label: 'Tipo',
                        type: 'string',
                        options: ['info', 'warning', 'error', 'success'],
                      },
                      {
                        name: 'text',
                        label: 'Texto',
                        type: 'string',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'config',
        label: 'Configurações',
        path: 'content/config',
        format: 'json',
        fields: [
          {
            type: 'object',
            name: 'site',
            label: 'Site',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Título do Site',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Descrição do Site',
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'image',
                name: 'logo',
                label: 'Logo',
              },
              {
                type: 'string',
                name: 'language',
                label: 'Idioma Principal',
                options: ['pt-BR', 'en'],
              },
            ],
          },
          {
            type: 'object',
            name: 'nav',
            label: 'Navegação',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'text',
                label: 'Texto',
              },
              {
                type: 'string',
                name: 'link',
                label: 'Link',
              },
            ],
          },
          {
            type: 'object',
            name: 'social',
            label: 'Redes Sociais',
            fields: [
              {
                type: 'string',
                name: 'twitter',
                label: 'Twitter',
              },
              {
                type: 'string',
                name: 'github',
                label: 'GitHub',
              },
              {
                type: 'string',
                name: 'discord',
                label: 'Discord',
              },
            ],
          },
        ],
      },
    ],
  },
})
