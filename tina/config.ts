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
            label: 'Post Markdown',
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
                ui: {
                  dateFormat: 'DD-MM-YYYY',
                  timeFormat: '',
                },
              },
              {
                type: 'datetime',
                name: 'updated',
                label: 'Data de Atualização',
                ui: {
                  dateFormat: 'DD-MM-YYYY',
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
                  'Notícias',
                  'Blog',
                  'Devlog',
                  'Reviews',
                  'Recursos',
                  'Projetos',
                  'Game Design',
                  'Level Design',
                  'Game Testing',
                  'Narrativa',
                  'Mecânicas',
                  'Tutoriais',
                  'Examplos',
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
