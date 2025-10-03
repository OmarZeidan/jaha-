import clsx from 'clsx'
import { Border } from './Border'
import Link from 'next/link'
import { ExternalLinkIcon } from './icons'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Link
          href="https://maps.app.goo.gl/Jxobx2NzJRs9k63PA"
          target="_blanck"
          className="hover:cursor-ne-resize hover:underline"
        >
          <Office name="Amman, Jordan" invert={invert}>
            Jabal Al Luwaibdeh
            <br />
            Al-Shariaah College 14
          </Office>
        </Link>
      </li>
    </ul>
  )
}
