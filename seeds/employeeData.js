const { Employee } = require('../models');

const employeeData = [
    {
        "first_name" : "John",
        "last_name" : "Doe",
        "role_id" : 1,
        "manager_id" : null
    },
    {
        "first_name" : "Mike",
        "last_name" : "Chan",
        "role_id" : 2,
        "manager_id" : 1
    },
    {
        "first_name" : "Ashley",
        "last_name" : "Rodriguez",
        "role_id" : 3,
        "manager_id" : null
    },
    {
        "first_name" : "Kevin",
        "last_name" : "Tupik",
        "role_id" : 4,
        "manager_id" : 3
    },
    {
        "first_name" : "Kunal",
        "last_name" : "Singh",
        "role_id" : 5,
        "manager_id" : null
    },
    {
        "first_name" : "Malia",
        "last_name" : "Brown",
        "role_id" : 6,
        "manager_id" : 5
    },
    {
        "first_name" : "Sarah",
        "last_name" : "Lourd",
        "role_id" : 7,
        "manager_id" : null
    },
    {
        "first_name" : "Tom",
        "last_name" : "Allen",
        "role_id" : 8,
        "manager_id" : 7
    }
]

const seedEmployee = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployee;