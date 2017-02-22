# sublime

[![apm](https://img.shields.io/apm/l/sublime.svg?style=flat-square)](https://atom.io/packages/sublime)
[![apm](https://img.shields.io/apm/v/sublime.svg?style=flat-square)](https://atom.io/packages/sublime)
[![apm](https://img.shields.io/apm/dm/sublime.svg?style=flat-square)](https://atom.io/packages/sublime)
[![David](https://img.shields.io/david/idleberg/atom-sublime.svg?style=flat-square)](https://david-dm.org/idleberg/atom-sublime#info=dependencies)

A meta-package to bring some of Sublime Text's features to Atom

## Installation

### apm

Install `sublime` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install sublime`

### Using Git

Change to your Atom packages directory:

```bash
# Windows
$ cd %USERPROFILE%\.atom\packages

# Linux & macOS
$ cd ~/.atom/packages/
```

Clone repository as `sublime`:

```bash
$ git clone https://github.com/idleberg/atom-sublime sublime
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

### Dependencies

This package makes use of [atom-package-deps](https://github.com/steelbrain/package-deps) to automatically install the following packages:

* [`atom-wrap-in-tag`](https://atom.io/packages/atom-wrap-in-tag) – Wrap text in HTML tags
* [`auto-update-plus`](https://atom.io/packages/auto-update-plus) – Automatically update packages
* [`browse`](https://atom.io/packages/browse) – Browse packages folder
* [`build`](https://atom.io/packages/build) – Provider for Build Tools
* [`minimap`](https://atom.io/packages/minimap)
* [`multi-cursor`](https://atom.io/packages/multi-cursor)
* [`satisfy-dependencies`](https://atom.io/packages/satisfy-dependencies) – Satisfies package dependencies
* [`set-syntax`](https://atom.io/packages/set-syntax) – Set syntax from the command line
* [`sublime-block-comment`](https://atom.io/packages/sublime-block-comment)
* [`sublime-style-column-selection`](https://atom.io/packages/sublime-style-column-selection)
* [`sublime-word-navigation`](https://atom.io/packages/sublime-word-navigation)
* [`sublimify`](https://atom.io/themes/sublimify) – Theme
* [`tag`](https://atom.io/packages/tag) – Autoclose tags
* [`text-manipulation`](https://atom.io/packages/text-manipulation) – Convert case and more

To disabled individual packages, go to the Atom settings.

## Contribute

If you know of any Atom package that brings back your favourite Sublime Text feature, please contribute!

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-sublime) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
