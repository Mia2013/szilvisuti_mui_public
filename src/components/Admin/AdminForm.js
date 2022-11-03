import { useState, useEffect } from "react";
import { Grid, Typography, } from "@mui/material";
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

import db from "../../firebase/db";
import AdminTable from "./table/AdminTable";
import Logout from "../Logout";
// import LoadData from "./LoadData";


export default function AdminForm() {
    const [cakes, setCakes] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [cookies, setCookies] = useState([]);
    const [editFormData, setEditFormData] = useState({});
    const [editItemId, setEditItemId] = useState(null);
    const [addNewItem, setAddNewItem] = useState(false);
    const [addNewItemFormData, setAddNewItemFormData] = useState({});
    const [error, setError] = useState({});

    const tableTitles = ["MEGNEVEZÉS", "ÁR", "8 SZELETES", "12 SZELETES", "16 SZELETES", "ALLERGÉNEK", "LEÍRÁS", "SZERKESZTÉS", "TÖRLÉS"]

    async function getData(collectionName, setData) {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        });
        setData(data);
    }

    useEffect(() => {
        getData("cakes", setCakes);
        getData("desserts", setDesserts);
        getData("cookies", setCookies);
    }, []);


    async function handleOnClickDeleteDoc(id, collectionName, setData) {
        await deleteDoc(doc(db, collectionName, id)).then(() => {
            getData(collectionName, setData);
        }).catch((err) => {
            setError({ collectionName, alertType: "error", error: err.message, message: "Nem sikerült törölni a terméket" });
        });;
    }

    function handleEditClick(event, item) {
        event.preventDefault();
        setAddNewItem(false);

        const {
            id,
            name,
            price,
            slice8,
            slice12,
            slice16,
            allergenic,
            description
        } = item;
        setEditItemId(id);

        const formValues = {
            id,
            name,
            price,
            slice8,
            slice12,
            slice16,
            allergenic,
            description,
        }
        setEditFormData(formValues)
    }

    const handleEditFormChange = (event, data, setData) => {
        event.preventDefault();
        const { name, value } = event.target;
        const newFormData = {
            ...data,
            [name]: value,
        }
        setData(newFormData);
    }

    const handleEditFormSubmit = async (event, collectionName, setData) => {
        event.preventDefault();
        const { name, price, slice8, slice12, slice16, allergenic, description } = editFormData;
        if (!name || !allergenic) {
            setError({ collectionName, alertType: "error", message: "Ne hagyd üresen a mezőket" });
        } else {
            const editedItem = {
                id: editItemId,
                name,
                slice8: slice8 ? slice8 : "",
                slice12: slice12 ? slice12 : "",
                slice16: slice16 ? slice16 : "",
                price: price ? price : "",
                allergenic,
                description: description ? description : "",
            }

            const itemRef = doc(db, collectionName, editItemId);
            await updateDoc(itemRef, editedItem).then(() => {
                getData(collectionName, setData);
                setEditItemId(null);
                setEditFormData({});
            }).catch((err) => {
                setError({ collectionName, alertType: "error", error: err.message, message: "Nem sikerült frissíteni a terméket" });
            });
        }
    }

    const handleAddItemFormSubmit = async (event, collectionName, setData) => {
        event.preventDefault();
        const { name, price, slice8, slice12, slice16, allergenic, description } = addNewItemFormData;
        if (!name || !allergenic) {
            setError({ collectionName, alertType: "error", message: "Ne hagyd üresen a mezőket" });
        } else {

            const newItem = {
                name: name ? name : null,
                slice8: slice8 ? slice8 : null,
                slice12: slice12 ? slice12 : null,
                slice16: slice16 ? slice16 : null,
                price: price ? price : null,
                allergenic: allergenic ? allergenic : null,
                description: description ? description : null,
            }

            addDoc(collection(db, collectionName), newItem).then(() => {
                getData(collectionName, setData);
                setAddNewItemFormData({});
                setAddNewItem(!addNewItem);
                setError({})
            }).catch((err) => {
                setError({ collectionName, alertType: "error", error: err.message, message: "Nem sikerült hozzáadni az új terméket" });
            });;
        }


    }

    const handleCancel = () => {
        setEditItemId(null);
        setEditFormData({});
        setAddNewItemFormData({});
        setAddNewItem(false);
        setError({});
    }

    const handleOnClickAddNewItem = () => {
        setEditItemId(null);
        setAddNewItem(true);
    }




    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h3" sx={{ my: 3 }}>Torták</Typography>
                <AdminTable
                    titles={tableTitles}
                    content={cakes}
                    handleOnClickDeleteDoc={handleOnClickDeleteDoc}
                    collectionName="cakes"
                    setData={setCakes}
                    editItemId={editItemId}
                    handleEditClick={handleEditClick}
                    editFormData={editFormData}
                    setEditFormData={setEditFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleEditFormSubmit={handleEditFormSubmit}
                    handleCancel={handleCancel}
                    addNewItem={addNewItem}
                    addNewItemFormData={addNewItemFormData}
                    setAddNewItemFormData={setAddNewItemFormData}
                    handleOnClickAddNewItem={handleOnClickAddNewItem}
                    handleAddItemFormSubmit={handleAddItemFormSubmit}
                    error={error}
                />
            </Grid>

            <Grid item xs={12} >
                <Typography variant="h3" sx={{ my: 3 }}>Desszertek</Typography>
                <AdminTable
                    titles={tableTitles}
                    content={desserts}
                    handleOnClickDeleteDoc={handleOnClickDeleteDoc}
                    collectionName="desserts"
                    setData={setDesserts}
                    editItemId={editItemId}
                    handleEditClick={handleEditClick}
                    editFormData={editFormData}
                    setEditFormData={setEditFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleEditFormSubmit={handleEditFormSubmit}
                    handleCancel={handleCancel}
                    addNewItem={addNewItem}
                    addNewItemFormData={addNewItemFormData}
                    setAddNewItemFormData={setAddNewItemFormData}
                    handleOnClickAddNewItem={handleOnClickAddNewItem}
                    handleAddItemFormSubmit={handleAddItemFormSubmit}
                    error={error}
                />
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h3" sx={{ my: 3 }}>Apró sütemények</Typography>
                <AdminTable
                    titles={tableTitles}
                    content={cookies}
                    handleOnClickDeleteDoc={handleOnClickDeleteDoc}
                    collectionName="cookies"
                    setData={setCookies}
                    editItemId={editItemId}
                    handleEditClick={handleEditClick}
                    editFormData={editFormData}
                    setEditFormData={setEditFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleEditFormSubmit={handleEditFormSubmit}
                    handleCancel={handleCancel}
                    addNewItem={addNewItem}
                    addNewItemFormData={addNewItemFormData}
                    setAddNewItemFormData={setAddNewItemFormData}
                    handleOnClickAddNewItem={handleOnClickAddNewItem}
                    handleAddItemFormSubmit={handleAddItemFormSubmit}
                    error={error}
                />
            </Grid>

            <Logout />


            {/* <Grid item>
                <LoadData collectionName="cakes" error={error} setError={setError} setData={setCakes} getData={getData}/>
            </Grid>
            <Grid item>
                <LoadData collectionName="desserts" error={error} setError={setError} setData={setDesserts} getData={getData}/>
            </Grid>
            <Grid item>
                <LoadData collectionName="cookies" error={error} setError={setError} setData={setCookies} getData={getData}/>
            </Grid> */}


        </Grid>
    )
}