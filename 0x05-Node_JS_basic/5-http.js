const http = require('http');
const fs = require('node:fs');

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

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    count(process.argv[2]).then((output) => {
      res.write(output.slice(0, -1));
      res.end();
    }).catch(() => {
      res.statusCode = 400;
      res.end('Cannot load the database');
    });
  } else {
    res.write('Hello Holberton School!');
    res.end();
  }
});

app.listen(1245);

module.exports = app;
