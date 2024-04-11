import axios from 'axios'
import { useNavigate } from "react-router-dom"
const Logout = async ()=>{

    const navigate = useNavigate();

    const response = await axios.post('/api/logout')

    if(response.data.logout === true){
        alert("logout successful")
        navigate("/login")
    }
    else{
        alert("logout failed")
    }

    return(<></>)
}

export default Logout;