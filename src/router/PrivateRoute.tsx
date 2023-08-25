import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
import React, { PropsWithChildren } from "react"


const PrivateRoute:React.FC<PropsWithChildren> = ({children}) => {

    const user = useSelector((state:any)=> state.hotelApp)
  return (
    <div>
        {
            user ? <div>{children}</div> : <Navigate to="/"/>
        }
    </div>
  )
}

export default PrivateRoute