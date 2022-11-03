import { TableRow, TableCell, Button, TextareaAutosize } from '@mui/material';


export default function AddNewCakeRow({
    addNewItemFormData,
    setAddNewItemFormData,
    handleEditFormChange,
    handleCancel,
    handleAddItemFormSubmit,
    collectionName,
    setData
}) {
    return (<TableRow>
        <TableCell component="th" scope="item">
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: "100%" }}
                placeholder='Megnevezés'
                name="name"
                onChange={(e) => handleEditFormChange(e, addNewItemFormData, setAddNewItemFormData)}
                value={addNewItemFormData.name}
                required />
        </TableCell>

        <TableCell align="left">
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: "100%" }}
                placeholder='Ár'
                name="price"
                onChange={(e) => handleEditFormChange(e, addNewItemFormData, setAddNewItemFormData)}
                value={addNewItemFormData.price}
                required
            />
        </TableCell>

        <TableCell align="left">
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: "100%" }}
                placeholder='8 szeletes ár'
                name="slice8"
                onChange={(e) => handleEditFormChange(e, addNewItemFormData, setAddNewItemFormData)}
                value={addNewItemFormData.slice8}
                required
            />
        </TableCell>

        <TableCell align="left">
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: "100%" }}
                placeholder='12 szeletes ár'
                name="slice12"
                onChange={(e) => handleEditFormChange(e, addNewItemFormData, setAddNewItemFormData)}
                value={addNewItemFormData.slice12}
                required
            />
        </TableCell>

        <TableCell align="left">
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: "100%" }}
                placeholder='16 szeletes ár'
                name="slice16"
                onChange={(e) => handleEditFormChange(e, addNewItemFormData, setAddNewItemFormData)}
                value={addNewItemFormData.slice16}
                required
            />
        </TableCell>

        <TableCell align="left">
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: "100%" }}
                type="text"
                name="allergenic"
                placeholder='Allergének'
                value={addNewItemFormData.allergenic}
                onChange={(e) => handleEditFormChange(e, addNewItemFormData, setAddNewItemFormData)}
                required
            />
        </TableCell>

        <TableCell align="left">
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: "100%" }}
                name="description"
                placeholder='Leírás'
                value={addNewItemFormData.description}
                onChange={(e) => handleEditFormChange(e, addNewItemFormData, setAddNewItemFormData)}
                required
            />
        </TableCell>
        <TableCell align="center">
            <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={(event) => handleAddItemFormSubmit(event, collectionName, setData)}
            >
                MENTÉS
            </Button>
        </TableCell>
        <TableCell align="center">

            <Button variant="contained" color="error" onClick={handleCancel}>MÉGSEM</Button>
        </TableCell>
    
    </TableRow>
    )
}