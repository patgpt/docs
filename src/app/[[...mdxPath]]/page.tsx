import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')
 /* eslint-disable react-hooks/rules-of-hooks -- false positive, useMDXComponents isn't react hooks */
 /* eslint-disable @typescript-eslint/no-explicit-any -- false positive, useMDXComponents isn't react hooks */
export async function generateMetadata(props:any) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

// @ts-expect-error -- nextra types are incorrect
const Wrapper = useMDXComponents().wrapper

export default async function Page(props:any) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}