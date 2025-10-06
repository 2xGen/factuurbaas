import React from 'react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanityClient';

const BlockContentSerializers = {
  types: {
    image: ({ value }) => {
      if (!value || !value.asset || !value.asset._ref) {
        return null;
      }
      return (
        <figure className="my-6">
          <img-replace
            src={urlFor(value).fit('max').auto('format').url()}
            alt={value.alt || 'Blog afbeelding'}
            className="rounded-lg shadow-md mx-auto"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-slate-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    block: ({ value, children }) => {
      const { style = 'normal' } = value;

      if (/^h\d/.test(style)) {
        const level = style.replace('h', '');
        return React.createElement(style, { className: `font-heading text-deep-blue my-${8 - parseInt(level)}`}, children);
      }
      
      if (style === 'blockquote') {
        return <blockquote className="border-l-4 border-sky-500 pl-4 italic my-6 text-slate-700">{children}</blockquote>;
      }

      return <p className="my-4 leading-relaxed">{children}</p>;
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-sky-600 hover:text-sky-800 underline transition-colors">
          {children}
        </a>
      );
    },
    strong: ({children}) => <strong>{children}</strong>,
    em: ({children}) => <em>{children}</em>,
  },
  list: {
    bullet: ({children}) => <ul className="list-disc pl-6 my-4 space-y-1">{children}</ul>,
    number: ({children}) => <ol className="list-decimal pl-6 my-4 space-y-1">{children}</ol>,
  },
  listItem: {
    bullet: ({children}) => <li>{children}</li>,
    number: ({children}) => <li>{children}</li>,
  }
};

const BlockContent = ({ blocks }) => {
  if (!blocks) return null;
  return <PortableText value={blocks} components={BlockContentSerializers} />;
};

export default BlockContent;