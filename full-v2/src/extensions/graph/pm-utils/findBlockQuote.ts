import { EditorState, Selection } from 'prosemirror-state'
import {
  findSelectedNodeOfType,
  findParentNodeOfType,
} from 'prosemirror-utils'

export function findBlockQuote(
  state: EditorState,
  selection?: Selection<any> | null,
) {
  const { graph } = state.schema.nodes
  return (
    findSelectedNodeOfType(graph)(selection || state.selection) ||
    findParentNodeOfType(graph)(selection || state.selection)
  )
}
