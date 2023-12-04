export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const grade = newGrades.find((x) => x.studentId === student.id);
    const newstudent = { ...student };
    newstudent.grade = grade ? grade.grade : 'N/A';
    return newstudent;
  });
}
