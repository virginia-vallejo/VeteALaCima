import { PortableText } from '@portabletext/react';
import { urlFor } from '../../lib/sanity';

interface Props {
  value: any;
}

// Componentes personalizados para PortableText
const components = {
  types: {
    image: ({ value }: any) => {
      const imgUrl = urlFor(value).width(1200).url();
      return (
        <figure className="my-8">
          <img 
            src={imgUrl} 
            alt={value.alt || ''} 
            className="w-full rounded-lg shadow-lg"
          />
          {value.alt && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    }
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold font-heading text-azul-profundo mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold font-heading text-azul-profundo mt-8 mb-4">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg text-azul-profundo leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-azul-electrico pl-6 py-2 italic text-gris-azulado my-8 bg-gris-claro rounded-r-lg">
        {children}
      </blockquote>
    )
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-azul-profundo ml-4">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-lg text-azul-profundo ml-4">
        {children}
      </ol>
    )
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-azul-electrico">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a 
          href={value?.href} 
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-azul-electrico hover:text-celeste-tech underline transition-colors"
        >
          {children}
        </a>
      );
    }
  }
};

export default function PortableTextRenderer({ value }: Props) {
  return <PortableText value={value} components={components} />;
}
