import type { SocialMedia } from '@/lib/types'
import clsx from 'clsx'
import Link from 'next/link'

export function SocialMediaIcon({
  className,
  invert = false,
  profile,
}: {
  className?: string
  invert?: boolean
  profile: SocialMedia
}) {
  return (
    <Link
      href={profile.href}
      aria-label={profile.title}
      className={clsx(
        'transition',
        invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
      )}
    >
      <profile.icon className="h-6 w-6" />
    </Link>
  )
}
