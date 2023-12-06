export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [contract: string]:  any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastNmae}`;

export interface StudentClassInterface {
  firstName: string;
  lastName: string;
  new(firstName: string, lastName: string): StudentClassInterface;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
