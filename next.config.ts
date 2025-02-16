import { NextConfig } from 'next'
import nextra, { NextraConfig } from 'nextra'

const withNextra = nextra({
  latex: true,
  codeHighlight: true,
  readingTime: true,
  search: true,
  defaultShowCopyCode: true,
  contentDirBasePath: '/docs',
} satisfies NextraConfig)

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
 
  i18n: {
    locales: ['en', 'es', 'ru'],
    defaultLocale: 'en'
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}) satisfies NextConfig