"use client"
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

const HighlightedContentClient = ({ content }) => {
  useEffect(() => {
		hljs.highlightAll();
  }, [content]);

  return (
    <div className='container mx-auto mb-10 ck-content' dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default HighlightedContentClient;