const settings = [
  {
  name: "sino",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://sino.ux-mind.pro",
          homepage: "home-page",
          "postTypes": [
            {
              type: "services",
              endpoint: "services",
              archive: "/services"
            },
            {
              type: "company-news",
              endpoint: "company-news",
              archive: "/company-news"
            },
            {
              type: "jobs",
              endpoint: "jobs",
              archive: "/jobs"
            }
          ]
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
  },
  {
  name: "sino-th",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://sino.ux-mind.pro/th",
          homepage: "home-page",
          "postTypes": [
            {
              type: "services",
              endpoint: "services",
              archive: "/services"
            },
            {
              type: "company-news",
              endpoint: "company-news",
              archive: "/company-news"
            },
            {
              type: "jobs",
              endpoint: "jobs",
              archive: "/jobs"
            }
          ]
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ],
  }
];

export default settings;
