import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, trackingId, date, status) {
  return {name, trackingId, date, status};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, "Approved", 4.0),
  createData('Ice cream sandwich', 237, 9.0, "Pending", 4.3),
  createData('Eclair', 262, 16.0, "Approved", 6.0),
  createData('Cupcake', 305, 3.7, "Delivered", 4.3),
  createData('Gingerbread', 356, 16.0, "Approved", 3.9),
];

const makeStyles=(status)=>{
    if(status === 'Approved'){
        return {
            background: 'rgb(145 254 159 / 47%)',
            color:'green',
        }
    }
    else if(status === 'Pending'){
        return {
            background:'#ffadad8f',
            color:'red',
        }
    }
    else{
        return {
        background:'#59bfff',
        color :'white',
    }
    }
}


export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Recent Orders</h3>
    <TableContainer component={Paper}
    style={{boxShadow:'0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className="status" style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     </div>
  );
}
