const jobsHandler = {
  name: "jobs",
  priority: 11,
  pattern: "/jobs/",
  func: async ({ link, params, state, libraries }) => {
    console.log("PARAMS:", params);
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get({
      endpoint: `/wp/v2/jobs`,
    });

    // Parse the JSON to get the object
    const jobsData = await response.json();

    // Add the menu items to source.data
    const jobs = state.source.data[link];
    Object.assign(jobs, {
      items: jobsData,
      isJobs: true,
    });
  },
};

export default jobsHandler;
