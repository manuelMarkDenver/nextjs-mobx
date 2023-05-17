import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User } from '../../../types/User';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { usersStore } from '@/store/usersStore';

const UsersListTable = ({ users, onDelete }: { users: User[], onDelete: any }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Name</TableCell>
              <TableCell align='left'>Email</TableCell>
              <TableCell align='left'>Role</TableCell>
              <TableCell align='left'></TableCell>
              <TableCell align='left'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {user.name}
                </TableCell>
                <TableCell align='left'>{user.email}</TableCell>
                <TableCell align='left'>{user.role}</TableCell>
                <TableCell align='left'>
                  <IconButton color='success'>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align='left'>
                  <IconButton
                    sx={{ color: 'red' }}
                    onClick={() => onDelete(user.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersListTable;
