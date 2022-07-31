const fs = require("node:fs");
const scaffoldData = require('./scaffoldData.json');
const CURRENT_DIR = process.cwd();
const ARGS = process.argv.slice(2);



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
createFolders(scaffoldData.primaryFolders);
createFolders(scaffoldData.mainComponents);
createFolders(scaffoldData.mainPages);
