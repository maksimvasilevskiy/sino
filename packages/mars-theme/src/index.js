import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./components/handlers/menu-handler";
import servicesHandler from "./components/handlers/services-handler";
import newsHandler from "./components/handlers/news-handler";
import jobsHandler from "./components/handlers/jobs-handler";
import acfOptionsHandler from "./components/handlers/options-page-handler";

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      swiperStylesLoading: true,
      isMobileMenuOpened: false,
      isMobile: false,
      searchValue: "",
      language: "TH",
      languageDropdownOpened: false,
      languages: [
        ["English", "EN", ""],
        ["Thai", "TH", "/th"],
      ],
      featured: {
        showOnList: false,
        showOnPost: false,
      },
      shareModalOpened: false,
      isAllNewsShown: false,
      isAllPositionsShown: false,
      hoveredMenuItem: null,
      selectedMenuItem: null,
      isAllDirectorsShown: false,
      recaptchaKey: "6Ldv0GIhAAAAAGkriXBu_jpG_XTl0n_IPwhQDjiO",
      menu: [],
      menuUrl: "main-menu",
      redirect: '/contact/',
      /*menu: [
        {
          isDropdown: true,
          isDropdownOpened: false,
          title: "Company",
          text: "Company",
          dropdown: [
            { text: "Our Company", route: "/company#our-company" },
            { text: "History", route: "/company#history" },
            { text: "Our Vision & Mission", route: "/company#vision&mission" },
            {
              text: "Board of Directors and Executives",
              route: "/company#board-of-directors",
            },
            {
              text: "Organization & Business Structure",
              route: "/company#organization&stricture",
            },
            {
              isDropdown: true,
              isDropdownOpened: false,
              text: "Corporate Responsibility",
              dropdown: [
                {
                  text: "Business Ethics",
                  route: "/company#buisness-ethics",
                },
                {
                  text: "Corporate Governance",
                  route: "/company#corporate-governance",
                },
                {
                  text: "Sustainability",
                  route: "/company#sustainability",
                },
                {
                  text: "Community Engagement",
                  route: "/company#community-engagement",
                },
                {
                  text: "People",
                  route: "/company#people",
                },
              ],
            },
          ],
        },
        {
          isDropdown: true,
          isDropdownOpened: false,
          title: "Our Services",
          text: "Services",
          dropdown: [
            {
              text: "Air Freight",
              route: "/services/air-freight",
            },
            {
              isDropdown: true,
              isDropdownOpened: false,
              text: "Sea Freight",
              dropdown: [
                {
                  text: "FCL",
                  route: "/services/sea-freight#FCL",
                },
                { text: "LCL", route: "/services/sea-freight#LCL" },
                {
                  text: "Consolidation ",
                  route: "/services/sea-freight#consolidation",
                },
                {
                  text: "Reefer Logistics ",
                  route: "/services/sea-freight#reefer-logistics",
                },
              ],
            },
            {
              text: "Ground Freight",
              route: "/services/ground-freight",
            },
            {
              text: "Warehousing & Distribution",
              route: "/services/warehousing&distribution",
            },
            {
              isDropdown: true,
              isDropdownOpened: false,
              text: "Value-Added Services",
              dropdown: [
                {
                  text: "Custom Brokerage",
                  route: "/services/value-added#custom-brokerage",
                },
                {
                  text: "Insurance",
                  route: "/services/value-added#insurance",
                },
              ],
            },
          ],
        },
        { text: "Investor", route: "/investor" },
        {
          isDropdown: true,
          isDropdownOpened: false,
          text: "Media",
          title: "Media",
          dropdown: [
            { text: "Press Release", route: "/media/press-release" },
            { text: "Media Contacts", route: "/media/media-contacts" },
          ],
        },
        { text: "Careers", route: "/careers" },
        { text: "Contact", route: "/contact" },
      ],*/
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      setRedirect: ({ state }) => value => {
        state.theme.redirect = value;
      },
      checkIsMobile: ({ state }) => {
        const windowWidth = window.innerWidth;

        if (windowWidth > 991) {
          state.theme.isMobile = false;
        } else {
          state.theme.isMobile = true;
        }
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpened = !state.theme.isMobileMenuOpened;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpened = false;
      },
      handleSearchChange:
        ({ state }) =>
        (value) => {
          state.theme.searchValue = value;
        },
      handleSearchClear: ({ state }) => {
        state.theme.searchValue = "";
      },
      handleShareModalOpen: ({ state }) => {
        state.theme.shareModalOpened = true;
      },
      handleShareModalClose:
        ({ state }) =>
        (target) => {
          const isShareModalClicked =
            target.closest(".share-modal") || target.closest(".share-btn");

          if (isShareModalClicked) {
            return;
          }

          state.theme.shareModalOpened = false;
        },
      handleNewsShow: ({ state }) => {
        state.theme.isAllNewsShown = true;
      },
      handleNewsToggle: ({ state }) => {
        state.theme.isAllNewsShown = !state.theme.isAllNewsShown;
      },
      handlePositionsShow: ({ state }) => {
        state.theme.isAllPositionsShown = true;
      },
      handleLanguageChange:
        ({ state }) =>
        (value) => {
          state.theme.language = value;
        },
      toggleLanguageDropdown: ({ state }) => {
        state.theme.languageDropdownOpened =
          !state.theme.languageDropdownOpened;
      },
      toggleDirectors: ({ state }) => {
        state.theme.isAllDirectorsShown = !state.theme.isAllDirectorsShown;
      },
      handleNavDropdown:
        ({ state }) =>
        (textValue) => {
          let isThai = false;
          if (state.source.url === 'https://sino.ux-mind.pro/th') {
            isThai = true;
          }
          let newMenu = [];
          if (isThai) {
            newMenu = state.source.get(`/menu/thai-menu/`).items.concat();
          } else {
            newMenu = state.source.get(`/menu/main-menu/`).items.concat();            
          }
          console.log(newMenu);

          // Function thet toggles menu dropdowns
          function setDropdown(menuArr, textValue) {
            menuArr.forEach((menuItem) => {
              if (menuItem.title === textValue && menuItem.child_items) {
                menuItem.isDropdownOpened = !menuItem.isDropdownOpened;
              } else if (menuItem.child_items) {
                setDropdown(menuItem.child_items, textValue);
              }
            });
          }

          setDropdown(newMenu, textValue);

          //state.theme.menu = newMenu;
        },
      clearHoveredItem: ({ state }) => (state.theme.hoveredMenuItem = null),
      setHoveredItem:
        ({ state }) =>
        (menuItem) => {
          state.theme.hoveredMenuItem = Object.assign({}, menuItem);
          console.log(state.theme.hoveredMenuItem);
        },
      clearMenuItem: ({ state }) => (state.theme.selectedMenuItem = null),
      setMenuItem:
        ({ state }) =>
        (menuItem) => {
          state.theme.selectedMenuItem = Object.assign({}, menuItem);
          console.log(state.theme.selectedMenuItem);
        },
      handleSwiperStylesLoaded: ({ state }) =>
        (state.theme.swiperStylesLoading = false),
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch(`/menu/thai-menu/`);
        await actions.source.fetch(`/menu/main-menu/`);
        await actions.source.fetch(`/services/`);
        await actions.source.fetch(`/company-news/`);
        await actions.source.fetch(`/jobs/`);
        await actions.source.fetch(`acf-settings`);
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
    source: {
      handlers: [
        menuHandler,
        servicesHandler,
        jobsHandler,
        newsHandler,
        acfOptionsHandler,
      ],
    },
  },
};

export default marsTheme;
