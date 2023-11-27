export default function createIteratorObject(report) {
  const employeeList = [];
  for (const items of Object.values(report.allEmployees)) {
    employeeList.push(...items);
  }
  return employeeList;
}
