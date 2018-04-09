let Browser = {
  name: "Browser",
  shortName: "Browser",
  icon: "local_library",
  version: "1.0.0",
  menubar: [{
    name: "App",
    menu: [{
      name: "About",
      action() {}
    }, {
      name: "Preferences",
      action() {}
    }, {
      name: "Quit",
      action() {}
    }]
  }, {
    name: "File",
    menu: [{
      name: "New Window",
      action() {}
    }, {
      name: "Minimize Window",
      action() {}
    }, {
      name: "Maximize Window",
      action() {}
    }, {
      name: "Close Window",
      action() {}
    }]
  }, {
    name: "Edit",
    menu: [{
      name: "Undo",
      action() {}
    }, {
      name: "Redo",
      action() {}
    }, {
      divider: true
    }, {
      name: "Copy",
      action() {}
    }, {
      name: "Cut",
      action() {}
    }, {
      name: "Paste",
      action() {}
    }, {
      name: "Delete",
      action() {}
    }, {
      name: "Select All",
      action() {}
    }, {
      divider: true
    }, {
      name: "Find",
      action() {}
    }]
  }, {
    name: "History",
    menu: [{
      name: "Back",
      action() {}
    }, {
      name: "Forward",
      action() {}
    }, {
      divider: true
    }, {
      name: "Show History",
      action() {}
    }]
  }, {
    name: "Bookmarks",
    menu: [{
      name: "Add to Bookmarks",
      action() {}
    }, {
      divider: true
    }, {
      name: "Show Bookmarks",
      action() {}
    }]
  }],
  color: "primary"
}

Vue.component("app-browser", {
  template: "<v-container>Hello</v-container>"
});
