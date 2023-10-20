import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import StyleIcon from '@mui/icons-material/Style';

const Widget = ({ type , dataBook, dataUser }) => {
  let data;
  //temporary
  const amount = 50;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isUser:true ,
        link: "See all users",
        datauser:dataUser,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "books":
      data = {
        title: "PRODUCT",
        isMoney: false,
        link: "View all Product",
        databook:dataBook,
        icon: (
          <StyleIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isUser && data.datauser} {data.databook}
          </span>
           <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
          </div>
          {data.icon}
        </div>
    </div>
  );
};

export default Widget;
