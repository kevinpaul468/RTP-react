import axios from "axios"

const Register = () => {

    const register = async (event)=>{
        event.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const password2 = document.getElementById('password2').value

        const response = await axios.post('/api/register', {name, email, password, password2})
        if(response.status === 201){
            alert('Registered')
            window.location.href = '/login'
        }
        else{
            alert(response.data.msg)
            console.log(response.data.msg)
        }
        
        };

    return (
        <div className="container mt-5">
        <form onSubmit={register}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control bg-dark text-light" id="name" name="name" placeholder="Name" required/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control bg-dark text-light" id="email" name="email" placeholder="Email" required/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control bg-dark text-light" id="password" name="password" placeholder="Password" required/>
        </div>
        <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" className="form-control bg-dark text-light" id="password2" name="password2" placeholder="Confirm Password" required/>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        </form>
    </div>
    )
}
export default Register;
