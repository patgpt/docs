export type EnglishDictionary = { 
  banner: string;
  search: {
    placeholder: string;
    loading: string;
    error: string;
    empty: string;
  };
  navigation: {
    backToTop: string;
    tocTitle: string;
    editLink: string;
    feedback: string;
  };
  theme: {
    dark: string;
    light: string;
    system: string;
  };
};
const en: EnglishDictionary = {
  banner: "Version 1.0.0 is now available!",
  search: {
    placeholder: "Search documentation...",
    loading: "Loading...",
    error: "An error occurred while searching.",
    empty: "No results found.",
  },
  navigation: {
    backToTop: "Back to Top",
    tocTitle: "On This Page",
    editLink: "Edit this page",
    feedback: "Give us feedback",
  },
  theme: {
    dark: "Dark",
    light: "Light",
    system: "System",
  },
}

export default en;
