// keep consistent with codemirror:
// https://github.com/codemirror/CodeMirror/blob/ed8dfeb5e2/src/util/browser.js#L17
const isMacOs = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent)

const commonKeys = {
  // Persistent search box in Query Editor
  [isMacOs ? 'Cmd-F' : 'Ctrl-F']: 'findPersistent',

  // Editor improvements
  'Ctrl-Left': 'goSubwordLeft',
  'Ctrl-Right': 'goSubwordRight',
  'Alt-Left': 'goGroupLeft',
  'Alt-Right': 'goGroupRight',
}

export default commonKeys
