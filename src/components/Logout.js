import { useState } from "react";
import { Box, Button, Alert } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

import firebaseConfig from '../firebase/config';
import { useLoggedInUserContext } from './LoggedInUserContextProvider';



export default function Logout() {
    const { setLoggedInUser } = useLoggedInUserContext();
    const [error, setError] = useState("")

    async function handleLogout() {
        initializeApp(firebaseConfig);
        const auth = getAuth();
        signOut(auth).then(() => {
            localStorage.removeItem('szilviAdmin');
            setLoggedInUser("");
            setError("");
        }).catch((error) => {
            setError(error)
        });
    }
    return (
        <Box>
            <Button variant="contained" color="warning" onClick={handleLogout} sx={{ position: "fixed", bottom:100, left: 25, }}
            >Kijelentkezés</Button>
            {error ? <Alert severity="error" >{error}</Alert> : ""}
        </Box>
    )
}