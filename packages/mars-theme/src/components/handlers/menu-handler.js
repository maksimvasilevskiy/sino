const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: "/menu/:slug",
  func: async ({ link, params, state, libraries }) => {
    console.log("PARAMS:", params);
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get({
      endpoint: `/menus/v1/menus/${slug}`,
    });

    // Parse the JSON to get the object
    const menuData = await response.json();
    let newMenuData = menuData.items.map((item) => {
      let newItem = JSON.parse(JSON.stringify(item));
      if (newItem.child_items) {
        newItem.isDropdownOpened = false;
        let newChildItems = newItem.child_items.map((childItem) => {
          let newChildItem = JSON.parse(JSON.stringify(childItem));
          if (childItem.child_items) {
            newChildItem.isDropdownOpened = false;
          }
          return newChildItem;
        });
        newItem.child_items = newChildItems;
      }
      return newItem;
    });

    // Add the menu items to source.data
    const menu = state.source.data[link];
    Object.assign(menu, {
      items: newMenuData,
      isMenu: true,
    });
  },
};

export default menuHandler;
