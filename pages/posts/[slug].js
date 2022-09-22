import { Fragment } from 'react';
import Head from 'next/head';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostsFiles, getPostData } from '../../lib/posts-util';

function PostDetailPage({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
