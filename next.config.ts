import { NextConfig } from 'next'
import nextra, { NextraConfig } from 'nextra'
 
const withNextra = nextra({
 latex: true,
 codeHighlight: true,
 contentDirBasePath: '/content',
 readingTime: true,
 search: true,
 defaultShowCopyCode: true,
 
} satisfies NextraConfig) 
 
// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  
}) satisfies NextConfig