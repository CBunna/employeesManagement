import React,{useContext} from 'react';
import EmployeeCard from '../components/EmployeeCard';
import { EmployeeContext } from '../context/employeeContext';

const Home = () => {
  const {employees} =useContext(EmployeeContext);
  return (
    <div className='max-w-5xl mx-auto text-center'>
       <div>
      <h1 className='text-2xl font-semibold my-4'>Our Specialist Doctor</h1>
       <div className='flex flex-wrap items-center'>
            {employees.map((employee) => ( 
                <EmployeeCard key={employee._id} employee={employee}/>
            ))}
      </div>

    </div>
    </div>
  )
}

export default Home