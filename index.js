const fs = require("node:fs");
const path = require("node:path");
const scaffoldData = require("./scaffoldData.json");
const CURRENT_PATH = process.cwd();
const ARGS = process.argv.slice(2);

const createFolders = (_folders) => {
  _folders.folders.forEach((folder) => {
    const curPath = `${CURRENT_PATH}/${_folders.parent}/${folder}`;
    console.log(curPath);
    if (!fs.existsSync(curPath)) {
      fs.mkdir(curPath, (err) => {
        if (err) {
          console.warn(err);
        }
      });
    }
    createFiles(curPath);
  });
};

const createFiles = (folderPath) => {
  const filePath = `${folderPath}/${path.basename(folderPath)}.jsx`
  if(!fs.existsSync(filePath)) {
    fs.writeFile(
      filePath,
      (err) => {
        if (err) {
          console.warn(filePath);
        }
      }
    );
  }
};




// createFolders(scaffoldData.folders.primaryFolders);
// createFolders(scaffoldData.folders.mainComponents);
createFolders(scaffoldData.folders.mainPages);
