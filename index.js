const loophole  = require('loophole')
const nFunction = loophole.Function
const oFunction = global.Function

global.Function   = nFunction
const declaration = require('ast-declaration-source')
const intersect   = require('atom-selection-ast')
const acorn       = require('acorn')
const astw        = require('astw')
global.Function   = oFunction

exports.activate = activate

function activate() {
  atom.workspaceView.command('define-jump:to-original-definition', jump)
}

function jump() {
  var editor = atom.workspace.getActiveEditor()
  var buffer = editor.getBuffer()
  var source = buffer.getText()
  var ast    = acorn.parse(source, {
    locations: true,
    ecmaVersion: 6,
    allowReturnOutsideFunction: true,
    allowHashBang: true,
    sourceType: 'module'
  })

  var walk  = astw(ast)
  var range = editor.getSelectedBufferRange()
  var match = intersect(source)

  walk(function(node) {
    if (node.type !== 'Identifier') return
    if (!match(node, [range])) return
    var origin = declaration(node)
    if (!origin) return

    editor.setSelectedBufferRange([
      [origin.loc.start.line-1, origin.loc.start.column],
      [origin.loc.end.line-1, origin.loc.end.column]
    ])
  })
}
