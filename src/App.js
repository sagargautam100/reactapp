import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employee";
import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [role, setRole] = useState("Engineer");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sagar",
      role: "Developer",
      img: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    },
    {
      id: 2,
      name: "Arjun",
      role: "Chef",
      img: "https://cdn.shopify.com/s/files/1/0696/9537/3592/files/5DB1F1B3-21AE-451E-B298-0E5565829D87.jpg",
    },
    {
      id: 3,
      name: "Manisha",
      role: "Test",
      img: "https://cdn.shopify.com/s/files/1/0696/9537/3592/files/AA82EE4C-B77D-426C-B71A-D0B52873E1DD.jpg",
    },
    {
      id: 4,
      name: "Kushal",
      role: "Chef",
      img: "https://cdn.shopify.com/s/files/1/0696/9537/3592/files/66CC6A8E-9D72-47D9-9C3D-5D1C69941688.jpg",
    },
    {
      id: 5,
      name: "Monika",
      role: "Test",
      img: "https://cdn.shopify.com/s/files/1/0696/9537/3592/files/CA8E4ACF-CCBD-443D-A868-BF3C575B3DC7.jpg",
    },
    {
      id: 6,
      name: "Shradha",
      role: "Test",
      img: "https://cdn.shopify.com/s/files/1/0696/9537/3592/files/07F6910C-84E1-443B-A4F2-FE62E106C1F3.jpg",
    },
  ]);
  function updateEmployee(id, newName, newRole, newImg) {
    const updateEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole, img: newImg };
      }
      return employee;
    });
    setEmployees(updateEmployees);
  }
  function newEmployee(newName, newRole, newImg) {
    const newEmployee = {
      id: Math.round(Math.random() * 100),
      name: newName,
      role: newRole,
      newImg: newImg,
    };
    console.log(newEmployee);
    setEmployees([...employees, newEmployee]);
  }
  return (
    <div className="App">
      <Header />
      <div>
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            return (
              <Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                img={employee.img}
                role={employee.role}
                updateEmployee={updateEmployee}
              />
            );
          })}
        </div>
        <AddEmployee newEmployee={newEmployee} />
      </div>
    </div>
  );
}
export default App;
