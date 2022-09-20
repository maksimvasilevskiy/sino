const servicesHandler = {
  name: "services",
  priority: 10,
  pattern: "/services/",
  func: async ({ link, params, state, libraries }) => {
    console.log("PARAMS:", params);
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get({
      endpoint: `/wp/v2/services`,
    });

    // Parse the JSON to get the object
    const servicesData = await response.json();

    // Add the menu items to source.data
    const services = state.source.data[link];
    Object.assign(services, {
      items: servicesData,
      isServices: true,
    });
  },
};

export default servicesHandler;
