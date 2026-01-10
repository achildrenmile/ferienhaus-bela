import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Breadcrumbs.css'

interface BreadcrumbItem {
  name: string
  path: string
}

const Breadcrumbs = () => {
  const location = useLocation()
  const { t } = useTranslation()

  const pathMap: Record<string, string> = {
    '/': t('nav.home'),
    '/ferienhaus': t('nav.house'),
    '/hundeurlaub': t('nav.dogs'),
    '/umgebung': t('nav.area'),
    '/preise': t('nav.prices'),
    '/impressum': t('footer.imprint'),
    '/agb': t('footer.terms'),
    '/hausordnung': t('footer.houseRules'),
  }

  const currentPath = location.pathname

  // Don't show on homepage
  if (currentPath === '/') return null

  const breadcrumbs: BreadcrumbItem[] = [
    { name: t('nav.home'), path: '/' },
    { name: pathMap[currentPath] || '', path: currentPath },
  ]

  // Schema.org structured data for breadcrumbs
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://ferienhaus-bela.at${item.path === '/' ? '' : item.path}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbs.map((item, index) => (
            <li
              key={item.path}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index < breadcrumbs.length - 1 ? (
                <>
                  <Link to={item.path} itemProp="item">
                    <span itemProp="name">{item.name}</span>
                  </Link>
                  <meta itemProp="position" content={String(index + 1)} />
                  <span className="breadcrumb-separator" aria-hidden="true">/</span>
                </>
              ) : (
                <>
                  <span itemProp="name" aria-current="page">{item.name}</span>
                  <meta itemProp="position" content={String(index + 1)} />
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumbs
