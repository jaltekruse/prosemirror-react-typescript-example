import { NodeSpec } from 'prosemirror-model'

export const graph: NodeSpec = {
  content: 'paragraph+',
  group: 'block',
  defining: true,
  selectable: false,
  attrs: {
    class: { default: '' },
  },
  parseDOM: [{ tag: 'graph' }],
  toDOM() {
    return ['graph', 0]
  },
}
