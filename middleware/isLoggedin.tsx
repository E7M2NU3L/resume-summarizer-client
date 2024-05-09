import { authStatus } from '@/features/authentication/authSlice';
import React from 'react'
import { useSelector } from 'react-redux'

const isLoggedin = ({children} :  {children : React.ReactNode}) => {
    
    // getting the data from the user
    const AuthInfo = useSelector(authStatus);
    console.log(AuthInfo);
  
    return (
    <>
        {children}
    </>
  )
}

export default isLoggedin