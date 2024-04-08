import axios from 'axios';

const Login = () => {
    const login = async() =>{
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const data = {email, password};
        const response =  await axios.post('/api/login', data);
        if(response.status === 200){
            alert('Logged in');
            window.location.href = '/';
        }
        else{
            alert(response.data.msg);
        }

    }
    return (
        <div className="container mt-5">
        <form onSubmit={login}>
        <div className="form-group">
        <label for="email">Email</label>
        <input type="email" className="form-control bg-dark text-light" id="email" name="email"
        placeholder="Email" required/>
        </div>
        <div className="form-group">
        <label for="password">Password</label>
        <input type="password" className="form-control bg-dark text-light" id="password"
        name="password" placeholder="Password" required/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        </form>
        </div>
    );
        
}

export default Login;
