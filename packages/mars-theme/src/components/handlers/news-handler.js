const newsHandler = {
  name: "company-news",
  priority: 10,
  pattern: "/company-news/",
  func: async ({ link, params, state, libraries }) => {
    console.log("PARAMS:", params);
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get({
      endpoint: `/wp/v2/company-news`,
    });

    // Parse the JSON to get the object
    const newsData = await response.json();

    // Add the menu items to source.data
    const news = state.source.data[link];
    Object.assign(news, {
      items: newsData,
      isNews: true,
    });
  },
};

export default newsHandler;
