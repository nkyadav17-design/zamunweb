import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Zamun Web',
  projectId: 'ft9hq9oa',   // ← Your real Sanity project ID
  dataset: 'production',
  apiVersion: '2024-01-01',
  basePath: '/studio',

  schema,
  plugins: [
    structureTool(),
    visionTool(),
  ],
})
