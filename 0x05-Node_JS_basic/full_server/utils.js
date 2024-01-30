const fs = require('node:fs');

async function readDatabase(fileName) {
  try {
    const data = await fs.promises.readFile(fileName, 'utf-8');
    const fields = {};
    let entries = data.toString().split('\n');
    entries.shift();
    entries = entries.filter((entry) => entry !== '');
    entries.forEach((entry) => {
      const entryArr = entry.split(',');
      if (!Object.prototype.hasOwnProperty.call(fields, entryArr[3])) {
        fields[entryArr[3]] = [];
      }
      fields[entryArr[3]].push(entryArr[0]);
    });
    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
