const fs = require("node:fs");

const CURRENT_DIR = process.cwd();
const ARGS = process.argv.slice(2);





const createFolders = (folders = []) => {
  folders.forEach((folder) => {
    fs.mkdir(`${CURRENT_DIR}/src${folder}`, (err) => {
      if (err) {
        console.warn("Not a react folder");
      }
    });
  });
};

createFolders(["/components", "/containers", "/pages", "/styles"]);

