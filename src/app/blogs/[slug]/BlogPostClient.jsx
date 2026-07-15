'use client';

import ArticlePostClient from '@/components/articles/ArticlePostClient';

export default function BlogPostClient(props) {
  return <ArticlePostClient {...props} relatedItems={props.relatedArticles} />;
}
