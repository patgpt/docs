import { Footer, LastUpdated, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { getDictionary } from "../i18n/get-dictionary";

// Required for theme styles
import { i18n, Locale } from "@/app/i18n/i18n-config";
import "nextra-theme-docs/style.css";
import { FaDiscord, FaGithub } from "react-icons/fa6";

export const metadata = {
  title: {
    default: "Tailwind CSS Neumorphic",
    template: "%s | Tailwind CSS Neumorphic",
  },
  openGraph: {
    url: "https://github.com/wavefunction/tailwindcss-neumorphic",
    siteName: "Tailwind CSS Neumorphic",
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}) {
  const lang = (await params).lang as Locale;
  const dictionary = await getDictionary(lang);
  const pageMap = await getPageMap(`/${lang}`);

  return (
    <html lang={lang} suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={<Banner storageKey="some-key">{dictionary.banner}</Banner>}
          // Logo configuration
          navbar={
            <Navbar
              logo={<span>Tailwind CSS Neumorphic</span>}
              align="left"
              logoLink="/"
              projectLink="/"
              projectIcon={<FaGithub />}
              chatLink="/"
              chatIcon={<FaDiscord />}
            />
          }
          // Project link
          docsRepositoryBase="https://github.com/wavefunction/tailwindcss-neumorphic/tree/main/docs"
          lastUpdated={<LastUpdated>{Date.now().toLocaleString()}</LastUpdated>}
          // Sidebar configuration
          sidebar={{
            defaultOpen: true,
            defaultMenuCollapseLevel: 1,
            toggleButton: true,
          }}
          i18n={i18n.locales}
          themeSwitch={{
            dark: dictionary.theme.dark,
            light: dictionary.theme.light,
            system: dictionary.theme.system,
          }}
          toc={{
            backToTop: dictionary.navigation.backToTop,
            title: dictionary.navigation.tocTitle,
          }}
          editLink={dictionary.navigation.editLink}
          feedback={{ content: dictionary.navigation.feedback }}
          // Required for navigation
          pageMap={pageMap}
          footer={<Footer>Tailwind CSS Neumorphic Plugin Documentation</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
