import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    {
        id: 'tokenIcon',
        label: 'Currency',
        minWidth: 95,
        formatImage: "image"
    },
    {
        id: 'tokenStatus',
        label: 'Status',
        minWidth: 55,
        formatSTT: 'status'
    },
    {
        id: 'tokenPrice',
        label: 'Price',
        minWidth: 100,
        align: 'right',
        format: value => value.toFixed(2),
    },
    {
        id: 'total',
        label: 'Total',
        minWidth: 110,
        align: 'right',
        format: value => value.toFixed(2),
    },
];
// const statusValue = tokenValue === true ? 'buy' : "sell";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 400,
    },
});

const TableTrade = ({ rows }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column, i) => (
                                <TableCell
                                    key={i}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column, i) => {
                                        const value = row[column.id];
                                        // console.log(column.formatSTT)
                                        return (
                                            <TableCell key={`p-${i}`} align={column.align}>

                                                {column.format && typeof value === 'number' && column.format(value)}
                                                {column.formatImage && <img alt="" src={value} />}
                                                {column.formatSTT === "status" &&
                                                    (value === true ? <span style={{ color: "#43a047" }}>buy</span> : <span style={{ color: "#e53935" }} >sell</span>)
                                                }

                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default TableTrade
