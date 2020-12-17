import React, { FC } from 'react'

import { BreadcrumbList } from './modules/breadcrumb'
import { getBaseUrl } from './modules/baseUrl'

interface SearchBreadcrumbItem {
  name: string
  href: string
}

const getSearchBreadcrumb = (
  breadcrumb?: SearchBreadcrumbItem[]
): BreadcrumbList | {} => {
  if (!Array.isArray(breadcrumb)) {
    return {}
  }

  const baseUrl = getBaseUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumb.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: baseUrl + item.href,
    })),
  }
}

interface Props {
  breadcrumb?: SearchBreadcrumbItem[]
}

const SearchBreadcrumbStructuredData: FC<Props> = ({ breadcrumb }) => {
  const breadcrumbLD = getSearchBreadcrumb(breadcrumb)

  return (
    <script type="application/ld+json">{JSON.stringify(breadcrumbLD)}</script>
  )
}

export default SearchBreadcrumbStructuredData
