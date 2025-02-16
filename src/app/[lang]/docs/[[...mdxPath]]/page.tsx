/* eslint-disable react-hooks/rules-of-hooks -- false positive, useMDXComponents isn't react hooks */

import { Locale } from "@/app/i18n/i18n-config";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents } from "../../../../../mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath, params.lang);
  return metadata;
}

export type PageProps = Readonly<{
  params: Promise<{
    mdxPath: string[];
    lang: Locale;
  }>;
}>;
const Wrapper = useMDXComponents().wrapper;

export default async function Page(props: PageProps) {
  const params = await props.params;
  const result = await importPage(params.mdxPath, params.lang);
  console.log(result);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
