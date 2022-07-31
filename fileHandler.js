const fs = require("fs");

//add all the imports on top of the file
const addImports = (_hooks, dependencies) => {
  const importHooks = (hooks) => {
    if (!hooks) {
      return `import React from 'react';`;
    } else {
      return `import React,{${hooks.join(",")}} from 'react';`;
    }
  };
  const importDependencies = (_dependencies) => {
    if (!_dependencies) {
      return "";
    }
    return _dependencies
      .map((dependency) => {
        return `import ${dependency.file} from '${dependency.path}';`;
      })
      .join("\n");
  };
  const reactImport = importHooks(_hooks);
  const dependenciesImport = importDependencies(dependencies);
  return `${reactImport}\n${dependenciesImport}`;
};

//create the main jsx function
const createMain = (fileName = "") => {
  return `const ${fileName
    .charAt(0)
    .toUpperCase()
    .concat(fileName.slice(1))} = () => {
`;
};

//Add the important hooks here
const addHooks = (hookData) => {
  const useStateHook = (values) => {
    return values
      .map((value) => {
        return `const [${value}, set${value}] = useState('');`;
      })
      .join("\n");
  };
  const useEffectHook = (values) => {
    return values
      .map((value) => {
        return `useEffect(() => {
            // ${value}
            }, [${value}]);`;
      })
      .join("\n");
  };
  const useState = useStateHook(hookData.useState.values);
  const useEffect = useEffectHook(hookData.useEffect.values);
  return `${useState}\n${useEffect}`;
};

//Add important functions here
const addFunctions = (params) => {};

//Add the return JSX statment here
const addReturn = (params) => {};

//add the whole JSX here
const addJSX = (params) => {};

//add the export statement here
const addExport = (params) => {};

const template = (file) => {
  console.log(`${addImports(file.hooks, file.dependencies)} \n\n${createMain(file.fileName)}\n
    ${addHooks(file.hookData)}
    `);
};

const testComponent = {
  fileName: "testComponent",
  hooks: ["useState", "useEffect"],
  dependencies: [
    { file: "styled", path: "styledComponents" },
    { file: "axios", path: "axios" },
  ],
  hookData: {
    useState: {
      values: ["test", "test2"],
    },
    useEffect: {
      values: ["test", "test2"],
    },
  },
};
// console.log(addImports(testComponent.hooks, testComponent.dependencies));
template(testComponent);
