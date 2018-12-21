# Overview
The Markdown component allows you to insert content from Markdown files into your designs. Both `.md` and `.markdown` files are supported.

## Properties

| Property  | Type              | Description                       | Default   |
|---------- |---------------    |-------------------------------    |---------  |
| Source    | `file`            | Markdown file to be imported.     | `null`    |
| Theme     | `enum`            | CSS Theme, see below.             | `Github`  |
| CSS File  | `file`            | Custom CSS file, see below.       | `null`    |
| Padding   | `number`          | Padding around the content.       | `0`       |
| Overflow  | `Show` \| `Hide`  | Overflow visibility.              | `Hide`    |

## Themes
Out of the box, the Markdown component includes a handful of simple CSS themes.

You can also use your own theme! Just select `Custom` from the theme dropdown, then select a CSS file which contains your custom styles.

**Notes on Custom Themes**
- The container can be styled with a `:host` selector.
- You should avoid styling `html` or `body` from your theme file.
- Due to the way styles are scoped, minified CSS files may introduce bugs.

| Name          | Link                                        |
|-------------- |-------------------------------------------- |
| Chota         | [jenil/chota](https://github.com/jenil/chota) |
| Github        | [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css) |
| Marx          | [mblode/marx](https://mblode.github.io/marx/) |
| Sakura        | [oxalorg/sakura](https://github.com/oxalorg/sakura) |
| Sakura Dark   | [oxalorg/sakura](https://github.com/oxalorg/sakura) |
| Wing          | [kbrsh/wing](https://kbrsh.github.io/wing/) |

## Missing Features
- Syntax Highlighting (see [Syntax Highlighter](https://store.framer.com/package/danielguillan/syntax-highlighter) in the meantime)

## Changelog

#### 1.4.0
- Actually fix theming bug

#### 1.3.0
- Fixed a bug with theming

#### 1.2.0
- Add Custom theme support
- Update Framer Store artwork

#### 1.1.0
- Add basic theme support
- Set default theme to `Github`

#### 1.0.0
- Initial Release


---

## Credits

Markdown parsing powered by [Marked](https://github.com/markedjs/marked).

[Markdown Mark](https://github.com/dcurtis/markdown-mark) designed by Dustin Curtis ([@dcurtis](http://twitter.com/dcurtis)).

Markdown invented by John Gruber via [Daring Fireball](https://daringfireball.net/projects/markdown/).
