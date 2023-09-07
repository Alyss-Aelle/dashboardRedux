import React from 'react'
import { logout } from '../../commonjs/auth'
import NavGauche  from '../Private/common/NavGauche'
import Layout from './common/Layout'
import NavBar from './common/NavBar'
import { Route,Routes, Outlet,Link } from 'react-router-dom'

import Home from './Home'
import Category from './Category'
import NoMatch from '../NoMatch'
import Question from './Question'
import Action from './Action'

const Private = () => {
  return (
   <>
  
<NavGauche/>
<div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
<NavBar/>

    <div className="px-6 pt-6 flex justify-center 2xl:container">
{/* container */}
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/question' element={<Question/>} />
        <Route path='/action' element={<Action/>} />
        <Route path='*' element={<NoMatch/>} />
        </Route>
    </Routes>
    </div>
</div>
   
   </>
  )
}

export default Private