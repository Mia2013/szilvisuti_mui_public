import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';

import ReaOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import AddNewCakeRow from './AddNewItemRow';


export default function AdminTable({
    titles,
    content,
    handleOnClickDeleteDoc,
    collectionName,
    setData,
    editItemId,
    handleEditClick,
    editFormData,
    setEditFormData,
    handleEditFormChange,
    handleEditFormSubmit,
    handleCancel,
    addNewItem,
    addNewItemFormData,
    setAddNewItemFormData,
    handleOnClickAddNewItem,
    handleAddItemFormSubmit,
    error
}) {



    return (
        <form>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            {titles.map(title =>
                                <TableCell key={title} align="center">{title}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {content?.sort((a, b) => a.name.localeCompare(b.name)).map((item) => (
                            <React.Fragment key={item.id}>
                                {editItemId === item.id ?
                                    <EditableRow
                                        editFormData={editFormData}
                                        setEditFormData={setEditFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleEditFormSubmit={handleEditFormSubmit}
                                        handleCancel={handleCancel}
                                        collectionName={collectionName}
                                        setData={setData}
                                    />
                                    :
                                    <ReaOnlyRow
                                        item={item}
                                        handleEditClick={handleEditClick}
                                        setData={setData}
                                        handleOnClickDeleteDoc={handleOnClickDeleteDoc}
                                        collectionName={collectionName}
                                    />}
                            </React.Fragment>
                        ))}
                        {addNewItem === false ?
                            <TableRow>
                                <TableCell>
                                    <Button onClick={handleOnClickAddNewItem} variant="contained"
                                        color="primary"> Torta hozzáadása</Button>
                                </TableCell>
                            </TableRow>
                            :
                            <AddNewCakeRow
                                addNewItemFormData={addNewItemFormData}
                                setAddNewItemFormData={setAddNewItemFormData}
                                handleEditFormChange={handleEditFormChange}
                                handleCancel={handleCancel}
                                handleAddItemFormSubmit={handleAddItemFormSubmit}
                                collectionName={collectionName}
                                setData={setData}
                            />
                        }
                        {error.collectionName === collectionName ?
                            <TableRow>
                                <TableCell>
                                    <Alert severity={error.alertType}>{error.message}</Alert>
                                </TableCell>
                            </TableRow>
                            : ""
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </form >
    );
}
