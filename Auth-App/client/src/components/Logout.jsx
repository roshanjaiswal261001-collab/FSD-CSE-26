import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const {user}=useContext(UserContext);
    const navigate=useNavigate();
    function logout(){
        navigate('/',{replace:true});
    }
  
 
  return (
    <div>
      <h1>{user.name}{user.role}Logout successful.</h1>
    </div>
  )
}

export default Logout
