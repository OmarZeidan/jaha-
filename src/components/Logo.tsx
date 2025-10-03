import { useId } from 'react'
import clsx from 'clsx'

// TODO: remove this
// TODO: want to have any onHaver effect?
export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      data-name="jahangir-logo"
      viewBox="0 0 1097.51 113.3"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M71.99 60.6c0 16.71-6.99 27.19-25.37 27.19-11.85 0-19.29-3.95-25.82-12.15L0 93.71c10.18 12.3 24.91 19.59 46.93 19.59 37.06 0 56.05-20.81 56.05-50.27V3.49H72V60.6ZM162.06 3.49l-54.98 106.32h32.5l10.02-20.35h58.32l10.02 20.35h32.96L195.93 3.49h-33.87Zm-1.83 63.95 18.53-37.67 18.38 37.67h-36.91ZM357.37 43.13h-63.79V3.49H262.6v106.32h30.98V68.65h63.79v41.16h30.99V3.49h-30.99v39.64zM455.19 3.49l-54.98 106.32h32.5l10.02-20.35h58.32l10.02 20.35h32.96L489.06 3.49h-33.87Zm-1.83 63.95 18.53-37.67 18.38 37.67h-36.91ZM651.57 68.5 588.54 3.49h-32.81v106.32h29.92V39.94l68.65 69.87h27.19V3.49h-29.92V68.5zM767.76 70.02H803v9.57c-7.44 6.83-17.77 9.42-30.83 9.42-25.82 0-40.4-11.39-40.4-32.35s14.13-32.2 39.94-32.2c14.28 0 23.85 3.64 32.96 11.85L827.3 19.6C816.21 9.27 797.23.01 770.95.01c-43.59 0-70.62 20.66-70.62 56.65s27.03 56.65 70.62 56.65c28.4 0 49.36-9.42 60.75-23.54V48.31h-63.94v21.72ZM851.44 3.49h30.98v106.32h-30.98zM1002.41 73.66c16.71-4.86 27.94-16.1 27.94-33.87 0-24.3-21.11-36.3-48.3-36.3h-74.57v106.32h30.83V76.24h31.29l28.1 33.57h36l-31.29-36.15Zm-22.63-19.89h-41.62V27.04h41.62c11.09 0 19.14 3.04 19.14 13.37s-8.05 13.37-19.14 13.37Z"
      />
      <circle cx="1073.8" cy="86.1" r="23.71" />
    </svg>
  )
}
