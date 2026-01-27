import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'vetealacima',
  title: 'Vete a la Cima - Blog',
  
  projectId: 'yjqtxju3',
  dataset: 'production',
  
  plugins: [
    structureTool(),
    visionTool()
  ],
  
  schema: {
    types: schemaTypes
  }
})
