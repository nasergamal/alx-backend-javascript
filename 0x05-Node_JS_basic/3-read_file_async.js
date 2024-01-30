const fs = require('node:fs');

async function countStudents(fileName) {
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
    console.log(`Number of students: ${entries.length}`);
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
