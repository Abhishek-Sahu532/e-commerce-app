import React  from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import "./Sucess.css"
import {Typography}  from '@material-ui/core';
import {Link} from 'react-router-dom'


const Success = ()=>{
    return(
    <div className="orderSuccess">

<CheckCircleIcon/>
<Typography>Your Order has been placed successfully</Typography>
<Link to='/orders'>View Orders</Link>

    </div>
    )
}


export default Success