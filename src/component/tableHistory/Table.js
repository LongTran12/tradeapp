import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import img1 from "../../assets/images/image8.png";
import img2 from "../../assets/images/image1.png";
import TextHeader from "../core/TextHeader";
import styled from "styled-components";
import { contractPublic } from "../../provider/web3Public";
const columns = [
  {
    id: "tokenIcon",
    label: "Token",
    minWidth: 170,
    formatImage: "image"
  },
  {
    id: "tokenName",
    label: "Name",
    minWidth: 100,
    formatNo: "no"
  },
  {
    id: "tokenStatus",
    label: "Status",
    minWidth: 170,
    formatSTT: "status"
  },
  {
    id: "tokenPrice",
    label: "Price",
    minWidth: 170,
    align: "right",
    format: value => value.toFixed(2)
  },
  {
    id: "tokenAmount",
    label: "Amount",
    minWidth: 170,
    align: "right",
    format: value => value.toFixed(2)
  },
  {
    id: "historyDate",
    label: "Block",
    minWidth: 170,
    align: "right",
    format: value => value
  },
  {
    id: "addressToken",
    label: "Address",
    minWidth: 170,
    align: "right",
    formatNo: "no"
  }
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

const TableHistory = () => {
  const classes = useStyles();
  const [events, setEvents] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  useEffect(() => {
    contractPublic &&
      contractPublic.getPastEvents(
        "allEvents",
        {
          fromBlock: 0,
          toBlock: "latest"
        },
        function(error, result) {
          if (!error) {
            let lastEvent = result.map(item => ({
              tokenIcon: item.returnValues.currency === "1" ? img1 : img2,
              tokenName: item.returnValues.currency === "1" ? "USDI" : "USDT",
              tokenStatus: item.event === "Buy",
              tokenPrice: item.returnValues.price / 10 ** 6,
              tokenAmount: item.returnValues.amount / 10 ** 18,
              historyDate: item.blockNumber,
              addressToken: item.returnValues["0"]
            }));
            setEvents(lastEvent);
          } else {
            console.log(error);
          }
        }
      );
  }, [contractPublic]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="stats-card-wrap mat-card">
      <Wrap>
        <TextHeader text="Trade History" />
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={"column" + column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {events
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                        {columns.map((column, i) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={i} align={column.align}>
                              {column.formatNo === "no" && value}

                              {column.format &&
                                typeof value === "number" &&
                                column.format(value)}

                              {column.formatImage && <img alt="" src={value} />}

                              {column.formatSTT === "status" &&
                                (value === true ? (
                                  <span style={{ color: "#43a047" }}>buy</span>
                                ) : (
                                  <span style={{ color: "#e53935" }}>sell</span>
                                ))}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={events.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Wrap>
    </div>
  );
};

export default TableHistory;
const Wrap = styled.div`
  .MuiTableCell-stickyHeader {
    min-width: unset !important;
    background-color: #fff;
  }
  .MuiPaper-root {
    box-shadow: unset;
  }
`;
