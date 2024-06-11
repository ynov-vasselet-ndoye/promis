"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import useSWR from 'swr';

import styles from "./article.module.scss";
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ContentBlock {
  type: string;
  children: any;
}

interface ParagraphBlock extends ContentBlock {
  type: 'paragraph';
  children: {
    text: string;
  }[];
}

interface HeadingBlock extends ContentBlock {
  type: 'heading';
  children: {
    level: number;
    text: string;
  }[];
}

interface ImageBlock extends ContentBlock {
  type: 'image';
  children: {
    url: string;
    alt: string;
  }[];
}

interface QuoteBlock extends ContentBlock {
  type: 'quote';
  children: {
    text: string;
  }[];
}

type ContentArray = Array<ParagraphBlock | HeadingBlock | ImageBlock | QuoteBlock>;

interface Article {
  id: number;
  attributes: {
    title: string;
    content: ContentArray;
  };
}

interface ApiResponse {
  data: Article[];
}

function convertToHTML(contentArray: ContentArray): string {
  return contentArray.map(block => {
    switch (block.type) {
      case 'paragraph':
        return `<p>${block.children[0].text}</p>`;
      case 'heading':
        return `<h${block.children[0].level}>${block.children[0].text}</h${block.children[0].level}>`;
      case 'image':
        return `<img src="${block.children[0].url}" alt="${block.children[0].alt}" />`;
      case 'quote':
        return `<blockquote>${block.children[0].text}</blockquote>`;
      default:
        return '';
    }
  }).join('');
}
export default function Page({ params }: { params: { slug: string } }) {
  // const router = useRouter();

  const { data, error } = useSWR(
		`http://localhost:1338/api/articles/${params.slug}?populate=*`,
		fetcher
	);
  
	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;

  const article = data.data.attributes;
  
  return (
    <article id={styles.article}>
      <Link className="button" href={"/blog"}>retour</Link>
      <p className={styles.title}>{article.titre}</p>
      <div dangerouslySetInnerHTML={{__html: convertToHTML(article.contenu)}}></div>
    </article>
  )
}
