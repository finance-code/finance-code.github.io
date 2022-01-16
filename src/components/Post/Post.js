// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from '../Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import * as styles from './Post.module.scss';
import type { Mdx } from '../../types';
import { useSiteMetadata } from '../../hooks';

type Props = {
  post: Mdx
};

const Post = ({ post }: Props) => {
  const { body } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date, comments } = post.frontmatter;
  const displayComments = (comments == null) ? true : comments;
  const { utterancesRepo } = useSiteMetadata();

  return (
    <div> {/* className = 'post' */ }
      <Link className={styles['post__homeButton']} to="/">All Articles</Link>

      <div> {/* className = 'post__content' */ }
        <Content body={body} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        { utterancesRepo && displayComments && <Comments repo={utterancesRepo} /> }
        <Author />
      </div>
    </div>
  );
};

export default Post;
