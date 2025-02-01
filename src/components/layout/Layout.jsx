import React from 'react'
import Create from '../todolist/create/Create'
import View from '../todolist/view/View'

const Layout = () => {
  return (
    <div className='flex w-full bg-gradient-to-b from-cyan-200 to-orange-200'>
    <Create/>
    <View/>
    </div>
  )
}

export default Layout