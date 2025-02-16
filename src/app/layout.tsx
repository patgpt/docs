import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
// Required for theme styles
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Tailwind CSS Neumorphic',
    template: '%s | Tailwind CSS Neumorphic'
  }
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          // Logo configuration
          navbar={<Navbar logo={<span>Tailwind CSS Neumorphic</span>} />}
          
          // Project link
          docsRepositoryBase="https://github.com/wavefunction/tailwindcss-neumorphic/tree/main/docs"
          
          // Footer
          footer={
            <Footer>
              Tailwind CSS Neumorphic Plugin Documentation
            </Footer>
          }

          // Search
          search={{
            placeholder: 'Search documentation...'
          }}

          // Sidebar configuration  
          sidebar={{
            defaultMenuCollapseLevel: 1,
            toggleButton: true
          }}

          // Table of contents
          toc={{
            float: true,
            title: 'On This Page'
          }}

          // Required for navigation
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
