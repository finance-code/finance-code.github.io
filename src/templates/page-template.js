// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { Mdx } from '../types';
import { MDXRenderer } from "gatsby-plugin-mdx"
import Comments from '../components/Comments';

type Props = {
  data: {
    mdx: Mdx
  }
};

const PageTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, utterancesRepo } = useSiteMetadata();
  const { body: pageBody } = data.mdx;
  const { frontmatter } = data.mdx;
  const { title: pageTitle, description: pageDescription = '', socialImage, comments } = frontmatter;
  const displayComments = (comments == null) ? true : comments;
  const metaDescription = pageDescription || siteSubtitle;
  const socialImageUrl = socialImage;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImageUrl} >
      <Sidebar />
      <Page title={pageTitle}>
        <div>
          <MDXRenderer>{pageBody}</MDXRenderer>
        </div>
        { utterancesRepo && displayComments && <Comments repo={utterancesRepo} /> }
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date
        description
        comments
        socialImage
      }
    }
  }
`;

export default PageTemplate;
