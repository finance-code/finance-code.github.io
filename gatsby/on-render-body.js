'use strict';

const React = require('react');
const siteConfig = require('../config.js');

// eslint-disable-next-line
const katexStylesheet = require('!css-loader!../static/css/katex/katex.min.css');

const onRenderBody = ({ setHeadComponents }) => {
  const { useKatex } = siteConfig;

  if (useKatex) {
    setHeadComponents([
      React.createElement('style', {
        key: 'katex-inline-stylesheet',
        dangerouslySetInnerHTML: { __html: katexStylesheet.default.toString() + '.katex-display { overflow: auto hidden };'}
      })
    ]);
  }
};

module.exports = onRenderBody;
