import React from 'react'

const EmployeeCard = ({employee}) => {
    const {firstName, lastName, url} = employee;
  return (
<div className='w-4xl mx-auto flex justify-center items-center'>
    <div className="w-44 h-62 rounded-md shadow-lg bg-white m-2">
        <img
            className="w-full h-44 rounded-t-md"
            src={url}
            alt={firstName}
        />
        <div className="px-6 py-4">
            <div className="font-bold text-[12px] mb-2">{`${firstName} ${lastName}`}</div>
            <p className="text-gray-600 text-xs">{employee.department}</p>
        </div>
    </div>

</div>

  )
}

export default EmployeeCard