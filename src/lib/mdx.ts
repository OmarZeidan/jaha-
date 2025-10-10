import { type ImageProps } from 'next/image'
import glob from 'fast-glob'

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(
        async (filename) => {
          let metadata = (await import(`../app/${directory}/${filename}`))[
            metaName
          ] as T
          return {
            ...metadata,
            metadata,
            href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => a.date.localeCompare(b.date))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  date: string
  title: string
  description: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface Brand {
  date: string
  name: string
  title: string
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string
  review: {
    author: {
      name: string
      source: string
    }
    content: string
  }
  profiles: Array<{
    title: string
    href: string
    // TODO: check on this.
    icon: any
  }>
}

export interface CaseStudy {
  date: string
  client: string
  title: string
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export function loadCaseStudies() {
  return loadEntries<CaseStudy>('work', 'caseStudy')
}

export function loadBrands() {
  return loadEntries<Brand>('brands', 'brand')
}
