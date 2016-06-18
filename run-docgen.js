var path = "./src/ContainerComponent.js";
var fs = require('fs');
var reactDocs = require('react-docgen');
var src = fs.readFileSync(path);
var componentInfo = reactDocs.parse(src);

console.log(componentInfo);
