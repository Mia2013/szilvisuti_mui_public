import * as React from 'react';
import Login from "../components/Login";
import Wrapper from '../components/Wrapper';
import { useLoggedInUserContext } from '../components/LoggedInUserContextProvider';
import AdminForm from '../components/Admin/AdminForm';




export default function Admin() {
    const { loggedInUser, setLoggedInUser } = useLoggedInUserContext();

    React.useEffect(() => {
      }, [loggedInUser]);

    return (<Wrapper> 
    {loggedInUser ? 
        <AdminForm /> : <Login setUser={setLoggedInUser} /> 
    }
    </Wrapper>)
}