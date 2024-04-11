import axios from 'axios';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    useEffect(()=>{
        axios.get('/api/getSessionUser')
        .then(response => {
            if(response.data.user !== null && response.data.user !== undefined && response.data.user !== ''){
                window.location.href = '/'
            }
        })
    },[])

    const navigate = useNavigate();
    const login = async(event) =>{
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const data = {email, password};
        const response =  await axios.post('/api/login', data);
        if(response.data.login === true){
            alert('Logged in');
            navigate('/');
        }
        else{
            alert("Login failed");
        }

    }

    
    return (
        <div className="container mt-5">
        <form onSubmit={login}>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control bg-dark text-light" id="email" name="email"
        placeholder="Email" required/>
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control bg-dark text-light" id="password"
        name="password" placeholder="Password" required/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        </form>
        </div>
    );
        
}

export default Login;
