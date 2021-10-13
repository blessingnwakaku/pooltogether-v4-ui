import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

interface NavLink {
  i18nKey: string
  href: string
}

const NavLinks: NavLink[] = [
  {
    i18nKey: 'deposit',
    href: '/deposit'
  },
  {
    i18nKey: 'prizes',
    href: '/prizes'
  },
  {
    i18nKey: 'account',
    href: '/account'
  }
]

// TODO: Add a gradient bg to a wrapping div on small screens so it dulls the content the nav covers
export const Navigation = (props) => {
  const { className } = props

  const router = useRouter()

  return (
    <div
      className={classnames(
        className,
        'bg-pt-purple-bright shadow-lg w-fill sm:w-max sm:rounded-xl',
        'sm:absolute sm:bottom-auto mx-auto',
        'fixed bottom-0 pb-0 inset-x-0 z-20'
      )}
    >
      <nav
        className={classnames(
          className,
          'main-nav',
          'mx-auto p-1 py-4 sm:py-1',
          'flex flex-row justify-center font-inter'
        )}
        style={{ width: 'max-content' }}
      >
        {NavLinks.map((navLink) => (
          <NavTab
            key={navLink.i18nKey}
            isSelected={navLink.href === router.pathname}
            {...navLink}
          />
        ))}
      </nav>
    </div>
  )
}

interface NavTabProps extends NavLink {
  isSelected: boolean
}

const NavTab = (props: NavTabProps) => {
  const { isSelected, i18nKey, href } = props
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <Link
      href={{
        pathname: href,
        query: router.query
      }}
    >
      <a
        className={classnames(
          'transition mx-1 first:ml-0 last:mr-0 rounded-lg py-2 sm:py-0 px-3 flex flex-row',
          'text-xs hover:text-white active:bg-highlight-9',
          { 'bg-highlight-9 text-white': isSelected },
          { 'hover:bg-tertiary': !isSelected }
        )}
      >
        <span className={classnames({ 'text-white opacity-70 hover:opacity-100': !isSelected })}>
          {t(i18nKey)}
        </span>
      </a>
    </Link>
  )
}
