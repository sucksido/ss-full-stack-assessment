<template>
  <div class="EmployeeList">
    <!-- Employee Form -->
    <h1>{{ msg }}</h1>
    <form @submit.prevent="saveEmployee">
      <div class="form-group">
        <input type="text" class="form-control" v-model="employee.firstName" placeholder="First Name" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="employee.lastName" placeholder="Last Name" required>
      </div>
      <div class="form-group">
        <input type="email" class="form-control" v-model="employee.email" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input type="date" class="form-control" v-model="employee.dob" placeholder="Date of Birth" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="skill" placeholder="Skill">
      </div>
      <button @click.prevent="addSkill" class="btn btn-purple">Add Skill</button>
      <button type="submit" class="btn btn-purple">Save Employee</button>
    </form>

    <!-- Employee List -->
    <ul>
      <li v-for="emp in employees" :key="emp.id">
        {{ emp.firstName }} {{ emp.lastName }} - {{ emp.email }}
        <button @click="editEmployee(emp)" class="btn btn-purple">Edit</button>
        <button @click="deleteEmployee(emp.id)" class="btn btn-purple">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Employee Management System',
      employees: [],
      employee: {
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        skills: []
      },
      skill: ''
    };
  },
  methods: {
    fetchEmployees() {
      // Fetch employees from backend API
      // Update this.employees
    },
    saveEmployee() {
      // Save employee to backend API
      // Handle form validations
    },
    editEmployee(emp) {
      // Populate form fields with employee data for editing
      this.employee = { ...emp };
    },
    deleteEmployee(empId) {
      // Delete employee from backend API
      // Implement delete logic
      this.employee = { ...empId };
    },
    addSkill() {
      if (this.skill.trim() !== '') {
        this.employee.skills.push(this.skill.trim());
        this.skill = '';
      }
    }
  },
  mounted() {
    this.fetchEmployees();
  }
};
</script>

<style scoped>
/* Custom CSS */
.EmployeeList {
  background-color: black;
  color: white;
  padding: 20px;
}

.form-control {
  background-color: black;
  color: white;
}

.btn-purple {
  background-color: purple;
  color: white;
}

ul {
  list-style-type: none;
}

li {
  margin-bottom: 10px;
}
</style>
