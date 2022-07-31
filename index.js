const fs = require("node:fs");

const CURRENT_DIR = process.cwd();
const ARGS = process.argv.slice(2);

// The main folders in the src folder
const primaryFolders = {
  parent: "src",
  folders: [
    "components",
    "containers",
    "hooks",
    "pages",
    "reducers",
    "styles",
    "utils",
  ],
};
//the main components which are going to be used in almost every single project
const mainComponents = {
  parent: "src/components",
  folders: ["navbar", "hero", "corousel", "footer", "forms", "data", "modal"],
};
//the main pages that are going to be used in almost every single project
const mainPages = {
  parent: "src/pages",
  folders: ["home", "about", "contact", "login", "register"],
};

const createFolders = (_folders) => {
  _folders.folders.forEach((folder) => {
    if (!fs.existsSync(`${CURRENT_DIR}/${_folders.parent}/${folder}`)) {
      fs.mkdir(`${CURRENT_DIR}/${_folders.parent}/${folder}`, (err) => {
        if (err) {
          console.warn("Not a react folder");
        }
      });
    }
  });
};

createFolders(primaryFolders);
createFolders(mainComponents);
createFolders(mainPages);
