const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let employees = []; // Sample data store

// Generate random ID for employee
function generateEmployeeID() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  let id = '';
  for (let i = 0; i < 2; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  for (let i = 0; i < 4; i++) {
    id += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return id;
}

// Create employee
app.post('/employees', (req, res) => {
  const { firstName, lastName, email, dob, skills } = req.body;
  const id = generateEmployeeID();
  const employee = { id, firstName, lastName, email, dob, skills };
  employees.push(employee);
  res.json(employee);
});

// Read all employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// Update employee
app.put('/employees/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, dob, skills } = req.body;
  const index = employees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employees[index] = { ...employees[index], firstName, lastName, email, dob, skills };
    res.json(employees[index]);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

// Delete employee
app.delete('/employees/:id', (req, res) => {
  const { id } = req.params;
  employees = employees.filter(emp => emp.id !== id);
  res.json({ message: 'Employee deleted successfully' });
});

// Search employees
app.get('/employees/search', (req, res) => {
  const { firstName, lastName, email } = req.query;
  let results = employees;
  if (firstName) {
    results = results.filter(emp => emp.firstName.toLowerCase().includes(firstName.toLowerCase()));
  }
  if (lastName) {
    results = results.filter(emp => emp.lastName.toLowerCase().includes(lastName.toLowerCase()));
  }
  if (email) {
    results = results.filter(emp => emp.email.toLowerCase().includes(email.toLowerCase()));
  }
  res.json(results);
});

// Filter employees by year of birth and skills
app.get('/employees/filter', (req, res) => {
  const { year, skill } = req.query;
  let results = employees;
  if (year) {
    results = results.filter(emp => new Date(emp.dob).getFullYear() === parseInt(year));
  }
  if (skill) {
    results = results.filter(emp => emp.skills.includes(skill));
  }
  res.json(results);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));