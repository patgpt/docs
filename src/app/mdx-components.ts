import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'

const docsComponents = getDocsMDXComponents()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useMDXComponents = (components: any) => ({
  ...docsComponents,
  ...components
})