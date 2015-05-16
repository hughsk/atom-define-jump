# atom-define-jump
![](http://img.shields.io/badge/stability-stable-orange.svg?style=flat)

Atom plugin to jump to the local declaration of a variable. Similar to
Atom's built in Symbols view, but local to the current file and without the
need for any configuration.

![define-jump](http://i.imgur.com/Wmn81fx.gif)

## Usage

1. Move your cursor to the variable you'd like to find the definition of.
2. Open the Command Palette and run "Define Jump: To Original Definition".

## Keybindings

By default, there aren't any keybindings enabled. If you'd like to add some of
your own, open your keymap file via `Atom > Open Your Keymap` and include
the following:

``` coffee
'.workspace':
  'ctrl-alt-shift-m': 'define-jump:to-original-definition'
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/atom-define-jump/blob/master/LICENSE.md) for details.
