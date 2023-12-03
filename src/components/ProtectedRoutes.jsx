import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';

const ProtectedRoutes = ({children})=> {
  const navigate = useNavigate();
  const firebase = useFirebase();

  if(firebase.user == null)
  {
    navigate('/');
  }
  
  return children
}

export default ProtectedRoutes


