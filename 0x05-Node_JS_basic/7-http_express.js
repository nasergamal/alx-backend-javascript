const express = require('express');
const fs = require('node:fs');

const app = express();
const port = 1245;

async function count(fileName) {
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
    let output = `Number of students: ${entries.length}\n`;
    for (const [field, students] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }
    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  count(process.argv[2]).then((output) => {
    res.send(`This is the list of our students\n${output.slice(0, -1)}`);
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port);

module.exports = app;
