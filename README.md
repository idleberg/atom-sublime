# sublime

[![apm](https://flat.badgen.net/apm/license/sublime)](https://atom.io/packages/sublime)
[![apm](https://flat.badgen.net/apm/v/sublime)](https://atom.io/packages/sublime)
[![apm](https://flat.badgen.net/apm/dl/sublime)](https://atom.io/packages/sublime)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-sublime)](https://circleci.com/gh/idleberg/atom-sublime)
[![David](https://flat.badgen.net/david/dep/idleberg/atom-sublime)](https://david-dm.org/idleberg/atom-sublime)

A meta-package to bring some of Sublime Text's features to Atom

## Installation

### apm

Install `sublime` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install sublime`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone repository as `sublime`:

```bash
$ git clone https://github.com/idleberg/atom-sublime sublime
```

Inside the cloned directory, install Node dependencies:

```bash
$ npm install
```

Build source:

```bash
$ npm run build
```

### Dependencies

This package makes use of [atom-package-deps](https://github.com/steelbrain/package-deps) to automatically install the following packages:

* [`atom-wrap-in-tag`](https://atom.io/packages/atom-wrap-in-tag) – Wrap text in HTML tags
* [`auto-update-plus`](https://atom.io/packages/auto-update-plus) – Automatically update packages
* [`browse`](https://atom.io/packages/browse) – Browse packages folder
* [`buildium`](https://atom.io/packages/buildium) – Provider for Build Tools
* [`mariana-syntax`](https://atom.io/packages/mariana-syntax) – Syntax theme
* [`minimap`](https://atom.io/packages/minimap)
* [`multi-cursor`](https://atom.io/packages/multi-cursor)
* [`package-control`](https://atom.io/packages/package-control) – Manages packages from the command palette
* [`set-syntax`](https://atom.io/packages/set-syntax) – Set syntax from the command line
* [`stacked-tabs`](https://atom.io/packages/stacked-tabs)
* [`sublime-block-comment`](https://atom.io/packages/sublime-block-comment)
* [`sublime-style-column-selection`](https://atom.io/packages/sublime-style-column-selection)
* [`sublime-word-navigation`](https://atom.io/packages/sublime-word-navigation)
* [`sublimify`](https://atom.io/themes/sublimify) – UI Theme
* [`tag`](https://atom.io/packages/tag) – Autoclose tags
* [`text-manipulation`](https://atom.io/packages/text-manipulation) – Convert case and more

To disabled individual packages, go to the Atom settings.

## Contribute

If you know of any Atom package that brings back your favourite Sublime Text feature, please contribute!

## License

This work is licensed under the [The MIT License](LICENSE.md).
