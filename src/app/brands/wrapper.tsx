import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { type Brand, type MDXEntry, loadBrands } from '@/lib/mdx'

export default async function BrandLayout({
  brand,
  children,
}: {
  brand: MDXEntry<Brand>
  children: React.ReactNode
}) {
  let allBrands = await loadBrands()
  let moreBrands = allBrands
    .filter(({ metadata }) => metadata !== brand)
    .slice(0, 2)

  return (
    <RootLayout>
      <article className="mt-24">
        <header>
          <PageIntro eyebrow="" title={brand.title} centered>
            <p>{brand.description}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 hidden border-y border-neutral-200 bg-neutral-100">
              <div className="mx-auto -my-px max-w-304 bg-neutral-200">
                <GrayscaleTransitionImage
                  {...brand.image}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {moreBrands.length > 0 && (
        <PageLinks className="mt-24" title="More brands" pages={moreBrands} />
      )}

      <ContactSection />
    </RootLayout>
  )
}
