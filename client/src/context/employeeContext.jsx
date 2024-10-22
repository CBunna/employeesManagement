import { createContext, useState, useEffect} from "react";
import axios from "axios";


export  const EmployeeContext = createContext();

  export const EmployeeProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [employees, setEmployees] = useState([]);


    //Create New Employee
    const createEmployee = async (newEmployee) =>{
     try {
        const response = await axios.post('/employee', newEmployee);
        const createdEmployee = response.data;
        setEmployees([...employees, createdEmployee])
        
     } catch (err) {
        setError(err.message);
     }
    }

    // Get all Employees by ID

    const getEmployeeById = async (id) => {
        try {
            const response = await axios.get(`/employee/${id}`);
            const employee = response.data;
            setEmployees(data)
            
        } catch (error) {
            setError(error.message);
        }
    }

    // Update Employee by ID

    // Get Employee by Department

    // Delete Employee by ID

    // fetch database from node server

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await axios.get('/employee');
            setEmployees(response.data.employees);
            console.log("fetched Database: ",response.data.employees)
        };
        fetchEmployees();
    }, []);

    return(
        <EmployeeContext.Provider value={{employees,setEmployees,  createEmployee, getEmployeeById}}>
            {children}
        </EmployeeContext.Provider>
    )
}



