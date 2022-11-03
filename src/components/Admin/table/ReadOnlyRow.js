import { TableRow, TableCell, Button } from '@mui/material';

export default function ReaOnlyRow({
    item,
    handleEditClick,
    collectionName,
    setData
    ,
    handleOnClickDeleteDoc }) {
    return (
        <TableRow
            key={item.id}
        >
            <TableCell component="th" scope="item">
                {item.name}
            </TableCell>
            <TableCell align="left">{item.price}</TableCell>
            <TableCell align="left">{item.slice8}</TableCell>
            <TableCell align="left">{item.slice12}</TableCell>
            <TableCell align="left">{item.slice16}</TableCell>
            <TableCell align="left">{item.allergenic}</TableCell>
            <TableCell align="left">{item.description}</TableCell>
            <TableCell align="center">
                <Button variant="contained" color="primary" onClick={(e) => handleEditClick(e, item)} type="button" >SZERKESZTÉS</Button>
            </TableCell>
            <TableCell align="center">

                <Button variant="contained" color="error" onClick={() => handleOnClickDeleteDoc(item.id, collectionName, setData
                )}>TÖRLÉS</Button>
            </TableCell>
        </TableRow>
    )

}