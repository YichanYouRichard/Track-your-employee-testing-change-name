const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
// const sequelize = require('sequelize');
// const { Department, Role, Employee } = require('./models');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) throw err;
    console.log("connected")
    startApplication();
    console.log('Welcome to the Employee Manager CMS application!')
    initOption();
})



function startApplication() {
    console.log(`
    ,______________________________________________________
    |                                                     |
    |    _____                 _                          |
    |   | ____|_ __ ___  _ __ | | ___  _   _  ___  ___    |
    |   |  _| | '_ ' _  | '_  | |/    | | | |/ _  / _ |   |
    |   | |___| | | | | | |_) | | (_) | |_| |  __/  __/   |
    |   |_____|_| |_| |_| .__/|_| ___/  __, | ___| ___|   |
    |                   |_|            |___/              |
    |    __  __                                           |
    |   |      | __ _ _ __   __ _  __ _  ___ _ __         |
    |   | |||| |/ _' | '_ | / _' |/ _' |/ _ | '__|        |
    |   | |  | | (_| | | | | (_| | (_| |  __/ |           |
    |   |_|  |_| __,_|_| |_| __,_| __, | ___|_|           |
    |                             |___/                   |
    |                                                     |  
    '_____________________________________________________|  
    `)
    
}

function initOption() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'appSelection',
                message: "What would you like to do?",
                choices: [
                    'View All Employees',
                    'Add Employee',
                    'Update Employee Role',
                    'View All Roles',
                    'Add Role',
                    'View All Departments',
                    'Add Department',
                    'Quit',
                ],
            },
        ])
        .then((userChoice) => {
            switch (userChoice.appSelection) {
                case 'View All Employees':
                    viewEmployee();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Update Employee Role':
                    updateRole();
                    break;
                case 'View All Roles':
                    viewRole();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'View All Departments':
                    viewDepartment();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                default:
                    quit();
            }
        });
}


function viewEmployee() {
    console.log("you clicked view Employee function");
    initOption();
};

function addEmployee() {
    console.log("you clicked add employee function");
    initOption();
};

function updateRole() {
    console.log("you clicked update role function");
    initOption();
};

function viewRole() {
    console.log("you clicked view role function");
    initOption();
};

function addRole() {
    console.log("you clicked add role function");
    initOption();
};

function viewDepartment() {  
    console.log(`-----------Department List-----------`) 
    const sql = 'SELECT department.id AS id, department.name AS department FROM department';
    db.query(sql, (err, rows) => {
        console.table(rows);
        initOption();
    });
};

function addDepartment() {
    initOption();
};

function quit() {
    db.end();
    console.log("you clicked quit function");
}

