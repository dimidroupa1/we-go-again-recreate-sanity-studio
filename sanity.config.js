import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { muxInput } from 'sanity-plugin-mux-input'

export default defineConfig({
  name: 'default',
  title: 'we-go-again-sanity',

  projectId: 'c8krcwcc',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), muxInput({mp4_support: 'standard'})],

  schema: {
    types: schemaTypes,
  },
})
