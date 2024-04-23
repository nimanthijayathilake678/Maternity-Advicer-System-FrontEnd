import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Grid } from "@mui/material";
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

function createData(name, wife, husband, midwifeRemark,mohRemark) {
  return { name, wife, husband, midwifeRemark,mohRemark };
}

const rows = [
    createData("Have any problems with sex ",<DoneSharpIcon sx={{color:'green'}}/>),
    createData("Satisfied with the sexual relationship"),
    createData("Breast self-exmination once a month"),
    createData('Have any family planning system'),
    createData('Family Planning Method'),
    createData('Delay first child'),
    createData('Time take to delay first child')
];

export default function OtherSexualAndReproductive(prop) {

  return (
    <div>
      <Grid container>
        <Grid
          container
          sx={{ paddingTop: 5, paddingLeft: 2, color: "#00A9BB" }}
        >
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ paddingBottom: 4}}>
            Sexual And Reproductive Health Information Cont...{" "}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 450 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#E4FEFF" }}>
                    <TableCell></TableCell>
                    <TableCell align="left" sx={{ color: "#00A9BB" }}>
                      Wife
                    </TableCell>
                    <TableCell align="left" sx={{ color: "#00A9BB" }}>
                      Husband
                    </TableCell>
                    <TableCell align="left" sx={{ color: "#00A9BB" }}>
                      Remark Done By Midewife
                    </TableCell>
                    <TableCell align="left" sx={{ color: "#00A9BB" }}>
                      Remark Done By MOH Doctor
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={row.name}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.wife}</TableCell>
                      <TableCell align="left">{row.husband}</TableCell>
                      <TableCell align="left">{row.midwifeRemark}</TableCell>
                      <TableCell align="left">{row.mohRemark}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
