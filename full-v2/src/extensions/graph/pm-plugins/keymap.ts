import { keymap } from 'prosemirror-keymap'
import { Plugin } from 'prosemirror-state'
import { keymaps } from '@core'
import { createNewBlockQuote } from '../commands'

const { bindKeymapWithCommand, toggleGraph } = keymaps

export function keymapPlugin(): Plugin {
  const keymapObj = {}

  bindKeymapWithCommand(
    toggleGraph.common!,
    createNewBlockQuote(),
    keymapObj,
  )

  return keymap(keymapObj)
}
