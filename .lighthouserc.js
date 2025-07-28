export default {
  ci: {
    collect: {
      staticDistDir: null,
      url: ["https://www.evinova.com/"],
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./lhci-results",
    },
  },
};
