const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');
const root = path.join(__dirname, '../');

const scope = 'shenato';

function main() {
  const updatedJson = { ...packageJson, name: `@${scope}/${packageJson.name}` };
  fs.writeFileSync(
    path.join(root, '/package.json'),
    JSON.stringify(updatedJson)
  );
}

main();
