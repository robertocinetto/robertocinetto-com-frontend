"use client"
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

const HighlightedContentClient = ({ content, className }) => {
  useEffect(() => {
		hljs.highlightAll();
  }, [content]);

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} className={className} />
  );
};

export default HighlightedContentClient;