
import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div className='mx-auto mt-8 p-8 bg-[#EBF2F7] rounded shadow-lg '>
        <h2 className='text-2xl font-semibold mb-6'> Registration Form</h2>
        <form className='m-auto'>
            <div className='mb-4'>
            <label for = "firstName" className='block text-gray-600'>
                First Name
            </label>
            <input type='text' className='form-input mt-2 block w-[346px] h-11 rounded-lg'
            id='firstname' name='firstname'required />
         </div>

         <div className='mb-4'>
            <label for = "firstName" className='block text-gray-600'>
                Last Name
            </label>
            <input type='text' className='form-input mt-2 block w-[346px] h-11 rounded-lg'
            id='lastname' name='lasttname'required />
         </div>

         <div className='mb-4'>
            <label for = "firstName" className='block text-gray-600'>
               Address
            </label>
            <input type='text' className='form-input mt-2 block w-[346px] h-11 rounded-lg'
            id='Address' name='Address'required />
         </div>

         

         <div className='mb-4'>
            <label for = "firstName" className='block text-gray-600'>
                Email ID
            </label>
            <input type='email' className='form-input mt-2 block w-[346px] h-11 rounded-lg'
            id='Email' name='Email'required />
         </div> 

         <div className='mb-4'>
            <label for = "firstName" className='block text-gray-600'>
                Phone Number
            </label>
            <input type='tel' className='form-input mt-2 block w-[346px] h-11 rounded-lg'
            id='phoneNumber' name='phoneNumber'required />
         </div>   
         <button type='submit' className='bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
            Submit</button>    

            <Link to={"/"}   className='bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-4    ml-24 rounded'>
           Back to home </Link>  
        </form>
    </div>
  )
}

export default Form