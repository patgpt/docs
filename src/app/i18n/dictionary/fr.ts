export   type FrenchDictionary = {
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
const fr: FrenchDictionary = {
  banner: "La version 1.0.0 est maintenant disponible !",
  search: {
    placeholder: "Rechercher dans la documentation...",
    loading: "Chargement...",
    error: "Une erreur s'est produite lors de la recherche.",
    empty: "Aucun résultat trouvé.",
  },
  navigation: {
    backToTop: "Retour en haut",
    tocTitle: "Dans Cette Page",
    editLink: "Modifier cette page",
    feedback: "Donnez votre avis",
  },
  theme: {
    dark: "Sombre",
    light: "Clair",
    system: "Système",
  },
};

export default fr;
