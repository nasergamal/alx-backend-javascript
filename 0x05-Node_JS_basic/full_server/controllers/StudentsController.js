const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.status(200);
    readDatabase(process.argv[2]).then((fields) => {
      let output = 'This is the list of our students\n';
      for (const [field, students] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }
      response.send(output.slice(0, -1));
    }).catch(() => {
      response.status(500);
      response.send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    }
    response.status(200);
    readDatabase(process.argv[2]).then((fields) => {
      const output = `List: ${fields[major].join(', ')}`;
      response.send(output);
    }).catch(() => {
      response.status(500);
      response.send('Cannot load the database');
    });
  }
}
module.exports = StudentsController;
