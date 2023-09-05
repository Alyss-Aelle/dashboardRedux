import React from 'react'
import { logout } from '../../commonjs/auth'
import NavGauche  from '../Private/common/NavGauche'
import NavBar from './common/NavBar'

const Private = () => {
  return (
   <>
  
<NavGauche/>
<div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
<NavBar/>

    <div className="px-6 pt-6 2xl:container">
{/* container */}
    </div>
</div>
   
   </>
  )
}

export default Private