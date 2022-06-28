import { createReactExtension } from './createReactExtension'

import { BaseExtension, baseSchema } from './base'
import type { BaseExtensionProps } from './base'
import { BlockQuoteExtension, blockQuoteSchema } from './image-editor'
import type { BlockQuoteExtensionProps } from './image-editor'

import { BlockQuoteExtension as GraphExtension, blockQuoteSchema as graphSchema} from './graph'
import type { BlockQuoteExtensionProps as GraphExtensionProps } from './graph'
import type { BlockQuoteState as GraphState } from './graph'

import { CollabExtension } from './collab'
import type { CollabExtensionProps } from './collab'

export const Base = createReactExtension<BaseExtensionProps>(BaseExtension)
export const BlockQuote = createReactExtension<BlockQuoteExtensionProps>(BlockQuoteExtension)
export const Collab = createReactExtension<CollabExtensionProps>(CollabExtension)

export const Graph = createReactExtension<GraphExtensionProps>(GraphExtension)

export { BaseExtension } from './base'
export type { BaseState } from './base'
export { BlockQuoteExtension } from './image-editor'
export type { BlockQuoteState } from './image-editor'
export { GraphExtension }
export type { GraphState };
export { CollabExtension } from './collab'
export type { CollabState } from './collab'

export { Extension } from './Extension'

import { createSchemaFromSpecs } from './createSchema'
export const createDefaultSchema = () => createSchemaFromSpecs([baseSchema, blockQuoteSchema])
export { createSchema } from './createSchema'
export { createPlugins } from './createPlugins'
