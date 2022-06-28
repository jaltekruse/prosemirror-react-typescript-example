import { EditorState, Plugin } from 'prosemirror-state'
import { PluginKey } from '@core'
import { CommandDispatch } from '@core'

export interface BlockQuoteState {
  blockQuoteActive: boolean
  // blockQuoteDisabled: boolean
}

export const graphPluginKey = new PluginKey('blockQuotePlugin')

export const getPluginState = (state: EditorState): BlockQuoteState =>
  graphPluginKey.getState(state);

export const setPluginState = (stateProps: Object) => (
  state: EditorState,
  dispatch: CommandDispatch,
): boolean => {
  const pluginState = getPluginState(state);
  dispatch(
    state.tr.setMeta(graphPluginKey, {
      ...pluginState,
      ...stateProps,
    }),
  );
  return true;
};
