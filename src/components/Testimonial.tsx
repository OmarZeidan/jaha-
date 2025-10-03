import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({
  children,
  client,
  className,
  forceClientInfo,
}: {
  children: React.ReactNode
  client: { logo?: ImageProps['src']; name: string; role: string }
  className?: string
  forceClientInfo?: boolean
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full mask-[linear-gradient(to_bottom_left,white_50%,transparent_60%)] fill-neutral-100 stroke-neutral-950/5"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-wide text-neutral-950">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption
              className={clsx(
                'mt-10',
                forceClientInfo &&
                  'text-sm text-neutral-950 sm:col-span-7 sm:row-start-3 sm:text-base',
              )}
            >
              {forceClientInfo ? (
                <>
                  <span className="font-semibold">{client.name}</span>
                  <span className="hidden font-semibold sm:inline">, </span>
                  <br className="sm:hidden" />
                  <span>{client.role}</span>
                  {/* <Image
                    src={client.logo || ''}
                    alt={client.name}
                    className="mt-4 max-w-40"
                    unoptimized
                  /> */}
                </>
              ) : (
                <Image src={client.logo || ''} alt={client.name} unoptimized />
              )}
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
