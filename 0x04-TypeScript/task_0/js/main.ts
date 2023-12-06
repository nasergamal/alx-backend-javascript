interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}
const student1: Student = {
  firstName: "Jack",
  lastName: "Sparrow",
  age: 25,
  location: "the Caribbean sea",
}

const student2: Student = {
  firstName: 'Gehrman',
  lastName: 'Sparrow',
  age: 23,
  location: 'Berserk sea',
}

const studentsList: array<Student> = [student1, student2]

const table = document.createElement('table');
const head = document.createElement('thead');
const headrow = head.insertRow();
const firstname = headrow.insertCell(0);
const loc = headrow.insertCell(1);
firstname.innerHTML = "FirstName";
loc.innerHTML = "Location"; 
table.append(head);
const body = document.getElementsByTagName("body")[0];

studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);
	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
body.append(table);
