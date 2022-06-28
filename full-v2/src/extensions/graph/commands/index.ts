import { Command } from '@core'

export const createNewBlockQuote = (): Command => (
  state,
  dispatch,
): boolean => {
  const {$from, $to} = state.selection
  const graph = state.schema.nodes.graph;
  const empty = graph.createAndFill()
  const endOfBlock = $from.end()
  if (empty && dispatch) {
    const tr = state.tr.insert(endOfBlock + 1, empty)
    dispatch(tr)
  }
  return false
}
