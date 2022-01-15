// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import * as styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div> { /* className = 'author' */ }
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        height="50"
        alt={author.name}
      />
    </Link>
    
    <p className={styles['author__subtitle']}>{author.bio}</p>
  </div>
);

export default Author;
