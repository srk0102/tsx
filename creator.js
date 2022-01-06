const fs = require("fs");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter component Name', name => {

  var compName = name
  let type = "tsx"

  let dirName = `./src/components/${compName}`
  let jsfileName = `${dirName}/${compName}.${type}`
  let cssfileName = `${dirName}/${compName}.css`
  let imppath = `./components/${compName}/${compName}`


  if (!fs.existsSync(dirName)) fs.mkdirSync(dirName, { recursive: true });

  let funcitonName = `import React from 'react'
import "./${compName}.css"

export function ${compName[0].toUpperCase() + compName.slice(1, compName.length)}() {
  return (
    <>
    <h1>${compName} component works</h1>
    </>
  )
}
`

  let globalimport = `export * from "${imppath}"
`

  fs.appendFile(jsfileName, funcitonName, function (err) {
    if (err) throw err;
  }
  );

  fs.appendFile(cssfileName, "", function (err) {
    if (err) throw err;
  }
  );

  fs.appendFile("./src/global.tsx", globalimport, function (err) {
    if (err) throw err;
  }
  );
  console.log(`${compName} created successfully`)
  readline.close();
});
