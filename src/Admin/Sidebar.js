import React from 'react'
import sideimg from'../img/logo-nav.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar fixed w-[15%] bg-white text-black h-screen bg-gray-900/50 backdrop-blur-md'>
    <div className='heading mt-5 flex justify-center'>
    <img src={sideimg} className='w-5 mr-2'  alt='side'/>
    <h1 className='font-bold text-xl text-center '>GymX Admin</h1>
    </div>
    <hr className='mt-5 text-black' />
    <div className='flex justify-center mt-20'>
        <ul className='space-y-9 font-extrabold'>
            <li className=''>
                <Link to='/admin'>Products <i class="ri-store-line ml-2"></i></Link>
            </li>
            <li className=''>
                <Link to='/admin/addProduct'>Add Products <i class="ri-add-line ml-2"></i></Link>
            </li>
            <li>
                <Link to='/users'>Users <i class="ri-user-line ml-2"></i></Link>
            </li>
        </ul>
    </div>
    <div className='font-bold cursor-pointer hover:bg-red-900 fixed bottom-4 left-6 w-32 text-center p-3 mx-auto rounded-lg bg-red-800 text-white'>Log out
    <i class="ri-logout-box-r-line ml-3"></i>
    </div>
</div>
  )
}

export default Sidebar