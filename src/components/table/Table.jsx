import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment-timezone";
const List = ({ rows }) => {
  console.log(rows);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Gender</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Estate / THB</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">{row._id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    src={
                      row?.avatar?.avatar_url ||
                      "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                    }
                    alt=""
                    className="image"
                  />
                  {row?.fullname}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.sex}</TableCell>
              <TableCell className="tableCell">
                {moment(row?.updatedAt).format("YYYY / MMM / DD")}
              </TableCell>
              <TableCell className="tableCell">
                {row?.total_money}
              </TableCell>
              <TableCell className="tableCell">
                {row?.isAdmin === true ? 
                <span className={`status Admin`}>admin</span>
                :<span className={`status User`}>customer</span>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
