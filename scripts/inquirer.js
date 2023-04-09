function addEmployee(data) {
  const newEmployee = data.newEmployee;
  console.log(`${newEmployee}`);
}

function updateRole(data) {
  const employee = data.employeeName;
  const role = data.role;

  console.log(`${employee}`);
  console.log(`${role}`);
}

function addRole(data) {
  const newRole = data.newRole;
  const department = data.chooseDepartment;

  console.log(`${newRole}`);
  console.log(`${department}`);
}

function addDepartment(data) {
  const newDepartment = data.newDepartment;

  console.log(`${newDepartment}`);
}
