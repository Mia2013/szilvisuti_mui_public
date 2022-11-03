import { TableRow, TableCell, Button, TextareaAutosize } from '@mui/material';



export default function EditableRow({ 
    editFormData, 
    setEditFormData,
    handleEditFormChange, 
    handleEditFormSubmit, 
    handleCancel, 
    collectionName,
    setData
 }) {
    return (<TableRow>

        <TableCell component="th" scope="item">
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: "100%" }}
                name="name"
                onChange={(e) => handleEditFormChange(e, editFormData, setEditFormData)}
                value={editFormData.name}
                required
                placeholder='Megnevezés'
            />
        </TableCell>

        <TableCell align="left">
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: "100%" }}
                placeholder='Ár'
                name="price"
                onChange={(e) => handleEditFormChange(e, editFormData, setEditFormData)}
                value={editFormData.price}
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
                onChange={(e) => handleEditFormChange(e, editFormData, setEditFormData)}
                value={editFormData.slice8}
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
                onChange={(e) => handleEditFormChange(e, editFormData, setEditFormData)}
                value={editFormData.slice12}
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
                onChange={(e) => handleEditFormChange(e, editFormData, setEditFormData)}
                value={editFormData.slice16}
                required
            />
        </TableCell>

        <TableCell align="left">
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: "100%" }}
                placeholder='Allergének'
                name="allergenic"
                onChange={(e) => handleEditFormChange(e, editFormData, setEditFormData)}
                value={editFormData.allergenic}
                required
            />
        </TableCell>

        <TableCell align="left">
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: "100%" }}
                placeholder='Leírás'
                name="description"
                onChange={(e) => handleEditFormChange(e, editFormData, setEditFormData)}
                value={editFormData.description}
                required
            />
        </TableCell>

        <TableCell align="center">
            <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={(event) => handleEditFormSubmit(event, collectionName, setData)}
            > MENTÉS
            </Button>
        </TableCell>

        <TableCell align="center">
        <Button variant="contained" color="warning" onClick={handleCancel}>MÉGSEM</Button>
        </TableCell>

    </TableRow>
    )
}