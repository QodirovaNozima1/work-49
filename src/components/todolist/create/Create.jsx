import { useStateValue } from '@/context';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  firstname: "",
  lastname: "",
  profession: "",
  birthDate: "",
  gender: "",
  bio: ""
}
const Create = () => {
  const [user, setUser] = useState(initialState)
  const { setUserData } = useStateValue()


  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData(prev => [...prev, { ...user, id: uuidv4() }])
    setUser(initialState)
  }

  return (
    <>
      <div className='w-[50%] h-full'>
        <div className=" bg-gradient-to-b flex flex-col from-cyan-500 to-orange-300 gap-8 pt-44 pb-48 items-center justify-center">
        <h2 className='text-white text-5xl font-medium italic'>Information</h2>
          <form className='bg-inherit rounded-lg mt-auto items-center justify-center flex flex-col gap-3' onSubmit={handleSubmit} action="">
            <input placeholder='Firstname..'  required value={user.firstname} onChange={event => setUser({ ...user, firstname: event.target.value })} className=' bg-gray-100 w-60 h-10 rounded-md p-2 outline-none text-gray-500 font-mono text-sm' type="text" />
            <input placeholder='Lastname..'  required value={user.lastname} onChange={event => setUser({ ...user, lastname: event.target.value })} className='border bg-gray-100 w-60 h-10 rounded-md p-2 outline-none text-gray-500 font-mono text-sm' type="text" />
            <input placeholder='Profession'  required value={user.profession} onChange={event => setUser({ ...user, profession: event.target.value })} className='border bg-gray-100 w-60 h-10 rounded-md p-2 outline-none text-gray-500 font-mono text-sm' type="text" />
            <input placeholder='Birthdate'  required value={user.birthDate} onChange={event => setUser({ ...user, birthDate: event.target.value })} className='border bg-gray-100 w-60 h-10 rounded-md p-2 outline-none text-gray-500 font-mono text-sm' type="text" />
            <button className="w-60 h-10 mt-10 rounded-md bg-gradient-to-t from-cyan-500 to-orange-100 border-2 shadow-lg shadow-orange-300/50 text-white font-sans text-xl p-2 border-none" type='submit'>Create</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Create