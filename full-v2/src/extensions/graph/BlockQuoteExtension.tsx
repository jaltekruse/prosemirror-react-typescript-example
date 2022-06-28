import { EditorState } from 'prosemirror-state'
import { Extension, IExtensionSchema } from '../Extension'

import { graph } from './nodes/blockquote'
import { blockQuotePluginFactory } from './pm-plugins/main'
import { graphPluginKey, getPluginState } from './pm-plugins/state'
import { keymapPlugin } from './pm-plugins/keymap'

export interface BlockQuoteExtensionProps {}
export const blockQuoteSchema: IExtensionSchema = {
  nodes: { graph: graph }
}
export class BlockQuoteExtension extends Extension<BlockQuoteExtensionProps> {

  get name() {
    return 'graph' as const
  }

  get schema() {
    return blockQuoteSchema
  }

  static get pluginKey() {
    return graphPluginKey
  }

  static getPluginState(state: EditorState) {
    return getPluginState(state)
  }

  get plugins() {
    return [
      {
        name: 'graph',
        plugin: () => blockQuotePluginFactory(this.ctx, this.props),
      },
      { name: 'graphKeyMap', plugin: () => keymapPlugin() },
    ]
  }
}
