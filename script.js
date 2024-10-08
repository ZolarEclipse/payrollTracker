// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//employee array
const employeesArray = [];



// Collect employee data
  // TODO: Get user input to create and return an array of employee objects
const collectEmployees = function () {
let addAnother = true;

while (addAnother) {
  const firstName = prompt("enter the employee's first name");
  const lastName = prompt("enter the employee's last name");
  const salary = Number(prompt("enter the employee's salary"));

  if (firstName && lastName && !isNaN(salary)) {
employeesArray.push({
  firstName: firstName,
  lastName: lastName,
  salary: salary
}) }else {
  console.error("Invalid input");
}
addAnother = confirm("add another employee")}
return(employeesArray)}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  if (employeesArray.length === 0) return; 

   const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  
    const averageSalary = totalSalary / employeesArray.length;
  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`);
};



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
const randomIndex = Math.floor(Math.random() * employeesArray.length);
const randomEmployee = employeesArray[randomIndex];
console.log("Random Employee");
console.log(`First Name ${randomEmployee.firstName}`);
console.log(`Last Name ${randomEmployee.lastName}`);
console.log(`Salary: ${randomEmployee.salary.toLocaleString("en-US", {
  style: "currency",
  currency: "USD"
})}`); 
};








/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
