export default {
  title: "Tanka",
  description: "Flexible, reusable and concise configuration for Kubernetes",

  public: "./public",
  ignore: ["design/**"],

  mdPlugins: [],
  hastPlugins: [],
  gatsbyRemarkPlugins: [
    {
      resolve: "gatsby-remark-vscode",
      options: {
        colorTheme: "Material Theme Darker",
        injectStyles: false,
        extensions: [
          {
            identifier: "heptio.jsonnet",
            version: "0.1.0"
          },
          {
            identifier: "Equinusocio.vsc-material-theme",
            version: "30.0.0"
          }
        ]
      }
    }
  ],

  menu: [
    "Introduction",
    "Installation",
    {
      name: "Tutorial",
      menu: [
        "Overview",
        "Refresher on deploying",
        "Using Jsonnet",
        "Parameterizing",
        "Abstraction",
        "k.libsonnet",
        "Environments"
      ]
    },
    {
      name: "Writing Jsonnet",
      menu: [
        "Syntax overview",
        "main.jsonnet",
        "The global object",
        "Native Functions"
      ]
    },
    {
      name: "Libraries",
      menu: [
        "Import paths",
        "Using libraries",
        "Creating and structure",
        "Installing and publishing"
      ]
    },
    "Command-line completion",
    "Diff strategies",
    "Output filtering",
    "Known issues",
    "Frequently asked questions"
  ]
};
