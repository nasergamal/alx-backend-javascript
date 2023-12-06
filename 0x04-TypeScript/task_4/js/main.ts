/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
const cpp = new Subjects.Cpp()
const java = new Subjects.Java()
const react = new Subjects.React()
const cTeacher: Subjects.Teacher = {
  firstName: 'yuu',
  lastName: 'moretti',
  experienceTeachingC: 10,
}
console.log('here')
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
