import { Box, Button, Alert } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";

import db from "../../firebase/db";


export default function LoadData({ collectionName, error, setError, setData, getData  }) {

    const handleLoadData = async (event, collectionName, setData) => {
        event.preventDefault();
  
        const fetchData = await fetch("cakes.json").then((response) => {
            return response.json();
        });
        fetchData[collectionName].map(async (item) => {
            await addDoc(collection(db, collectionName), item).then(() => {    
                setError({});
            }).catch((err) => {
                setError({ alertType: "error", error: err.message, message: "Nem sikerült hozzáadni az új terméket" });
                console.log(error.error)
            });

        })
        getData(collectionName, setData)

    }


    return (
        <Box sx={{my: 5}}>
            <Button variant="contained" onClick={(e) => handleLoadData(e, collectionName, setData)}>Load {collectionName}</Button>
            {error.error ?

                <Alert severity={error.alertType}>{error.message}</Alert>

                : ""
            }
        </Box>
    )
}