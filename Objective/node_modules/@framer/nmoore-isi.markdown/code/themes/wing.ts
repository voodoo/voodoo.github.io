/*
* Wing 1.0.0-beta
* Copyright 2016, Kabir Shah
* http://usewing.ml/
* Free to use under the MIT license.
* https://kingpixil.github.io/license
*/
export default `

/*------------------------------------------------------------
  Base Style
------------------------------------------------------------*/

html {
  box-sizing: border-box;
  font-size: 62.5%;
  margin: 0;
  padding: 0;
}

body {
  letter-spacing: 0.01em;
  line-height: 1.6;
  font-size: 1.5em;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

/*------------------------------------------------------------
  Typography
------------------------------------------------------------*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

h1, h2, h3 {
  letter-spacing: -.1rem;
}

h1 {
  font-size: 4.0rem;
  line-height: 1.2;
}

h2 {
  font-size: 3.6rem;
  line-height: 1.25;
}

h3 {
  font-size: 3.0rem;
  line-height: 1.3;
}

h4 {
  font-size: 2.4rem;
  line-height: 1.35;
  letter-spacing: -.08rem;
}

h5 {
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: -.05rem;
}

h6 {
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: 0;
}

/*------------------------------------------------------------
  Links
------------------------------------------------------------*/
a {
  color: #104cfb;
  transition: all .1s ease;
}

a:hover {
  color: #222222;
}

/*------------------------------------------------------------
  Lists
------------------------------------------------------------*/

ul {
  list-style: circle inside;
}

ol {
  list-style: decimal inside;
}

/*------------------------------------------------------------
  Tables
  ------------------------------------------------------------*/

table {
  width: 100%;
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
}

table th, table td {
  vertical-align: middle;
  padding: 12px 4px;
}

table thead {
  border-bottom: 2px solid #333030;
}

/*------------------------------------------------------------
  Misc
------------------------------------------------------------*/

code {
  padding: 0.2rem 0.5rem;
  margin: 0 0.2rem;
  font-size: 90%;
  white-space: nowrap;
  background: #F1F1F1;
  border: 1px solid #E1E1E1;
  border-radius: 4px;
  font-family: "Consolas", "Monaco", "Menlo", monospace;
}

pre > code {
  display: block;
  padding: 1rem 1.5rem;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
`