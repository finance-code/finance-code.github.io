'use strict';

const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const startsWithDate = /^(\d{4}-\d{2}-\d{2})/;


const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const dirname = path.basename(getNode(node.parent).relativeDirectory);
    const postdate = dirname.match(startsWithDate);
    if (node.frontmatter.slug) {
      createNodeField({
        node,
        name: 'slug',
        value: `/post/${(postdate[1] + '-') || ''}${node.frontmatter.slug}`
      });
    } else {
      if (node.frontmatter.category === 'post') {
        const dirname = getNode(node.parent).relativeDirectory;
        createNodeField({
          node,
          name: 'slug',
          value: `/post/${(postdate[1] + '-') || ''}${dirname}`
        });
      }
      else {
        const filepath = createFilePath({ node, getNode });
        const pageDirname = path.dirname(filepath);
        createNodeField({
          node,
          name: 'slug',
          value: pageDirname
        });
      }
    }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map((tag) => `/tag/${_.kebabCase(tag)}/`);
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (node.frontmatter.category) {
      const categorySlug = `/category/${_.kebabCase(node.frontmatter.category)}/`;
      createNodeField({ node, name: 'categorySlug', value: categorySlug });
    }
  }
};

module.exports = onCreateNode;
