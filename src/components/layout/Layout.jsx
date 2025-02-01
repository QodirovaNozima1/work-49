import React from 'react'
import Create from '../todolist/create/Create'
import View from '../todolist/view/View'

const Layout = () => {
  return (
    <div className='flex w-full'>
    <Create/>
    <View/>
    </div>
  )
}

export default Layout