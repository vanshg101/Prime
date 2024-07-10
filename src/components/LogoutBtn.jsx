import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/Auth'
import { logout } from './store/AuthSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button
        className='block px-2 text-xl hover:text-white'
        onClick={logoutHandler}
        >Logout</button>
      )
    }
    
    export default LogoutBtn
