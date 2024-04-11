import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            const response = await axios.post('/api/logout');

            if(response.data.logout === true){
                navigate("/login");
                alert("logout successful");
            }
            else{
                navigate("/");
                alert("logout failed");
            }
        };

        logout();
    }, [navigate]);

    return null; // or return some JSX if you want to render something
};

export default Logout;