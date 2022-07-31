const fs = require("node:fs");
const path = require("node:path");
const scaffoldData = require("./scaffoldData.json");
const CURRENT_PATH = process.cwd();
const ARGS = process.argv.slice(2);

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
const createFolders = (_folders) => {
  _folders.folders.forEach((folder) => {
    const curPath = `${CURRENT_PATH}/${_folders.parent}/${folder}`;
    const parentPath = `${CURRENT_PATH}/${_folders.parent}`;
    if (fs.existsSync(curPath)) return;
    if (!fs.existsSync(parentPath)) fs.mkdirSync(parentPath);
    fs.mkdir(curPath, (err) => {
      if (err) {
        console.warn(curPath);
      }
    });

    createFiles(curPath, _folders.type);
  });
};

const createFiles = (folderPath, folderType) => {
  const filePath = `${folderPath}/${path.basename(folderPath)}.jsx`;
  const fileName = path.basename(folderPath);

  if (fs.existsSync(filePath)) return;
  switch (folderType) {
    case "pages":
      {
        fs.writeFile(filePath, fileTemplate(fileName), (err) => {
          if (err) {
            console.warn(filePath);
          }
        });
      }
      break;
    case "components":
      {
        fs.writeFile(filePath, fileTemplate(fileName), (err) => {
          if (err) {
            console.warn(filePath);
          }
        });
      }
      break;
    default:
      break;
  }
};

const fileTemplate = (fileName = "", fileType) => {
  return ` import React from 'react'
  
  const ${fileName.capitalize()} = () => {
    return (
      <div>${fileName.capitalize()}</div>
    )
  }
  
  export default ${fileName.capitalize()}`;
};

createFolders(scaffoldData.folders.primaryFolders);
createFolders(scaffoldData.folders.mainComponents);
createFolders(scaffoldData.folders.mainPages);
