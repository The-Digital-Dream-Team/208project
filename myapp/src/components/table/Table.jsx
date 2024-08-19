import React from 'react'
import './Table.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
    {
        customer: "Floyd Miles",
        message: "How can i calculate my import dutiy?",
        status: "Answered",
        time: "11:55pm",
    },
    {
        customer: "Jacob Jones",
        message: "How do I track my order?",
        status: "Answered",
        time: "08:01pm",
    },
    {
        customer: "Jenny Wilson",
        message: "How can I pay import duties?",
        status: "Answered",
        time: "Yesterday",
    },
    ];
  return  <TableContainer component={Paper} className='table'>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell className='tableCell'>Customer</TableCell>
        <TableCell className='tableCell'>Message</TableCell>
        <TableCell className='tableCell'>Status</TableCell>
        <TableCell className='tableCell'>Time</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.customer}
        >
          <TableCell className='tabelCell'>{row.customer}</TableCell>
          <TableCell className='tableCell'>{row.message}</TableCell>
          <TableCell className='tableCell'>{row.status}</TableCell>
          <TableCell className='tableCell'>{row.time}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
}

export default List