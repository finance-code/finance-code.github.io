// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import * as styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div> { /* main_div */ }
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div> { /* item_meta */ }
          <time className={styles['feed__itemMetaTime']} dateTime={ new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}>
          { new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
          </time>
          <span className={styles['feed__itemMetaDivider']} />
          { (edge.node.fields.categorySlug && edge.node.frontmatter.category) &&
            <span>
              <Link to={edge.node.fields.categorySlug} className={styles['feed__itemMetaCategoryLink']}>{edge.node.frontmatter.category}</Link>
            </span>
          }
        </div>
        <h2 className={styles['feed__itemTitle']}>
          <Link className={styles['feed__itemTitleLink']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles['feed__itemDescription']}>{edge.node.frontmatter.description}</p>
        <Link className={styles['feed__itemReadmore']} to={edge.node.fields.slug}>Read</Link>
      </div>
    ))}
  </div>
);

export default Feed;
