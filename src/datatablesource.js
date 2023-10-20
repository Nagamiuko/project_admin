import './datatable.scss'
export const userColumns = [
  { field: "_id", headerName: "ID", width: 150 },
  {
    field: "fullname",
    headerName: "User",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.avatar?.avatar_url || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.fullname}
        </div>
      );
    },
  },
  {
    field: "isAdmin",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row?.isAdmin === true ?
          <span className={`status Admin`}>admin</span> 
          :
          <span className={`status User`}>customer</span> 
          }
        </div>
      );
    },
  },
];

export const bookColumns = [
  { field: "_id", headerName: "ID", width: 150 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.cover_image?.cover_image_url || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "UserBooks",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          {params.row.mangauser?.fullname}
        </>
      );
    },
  },
  {
    field: "type",
    headerName: "Type",
    width: 200,
    renderCell:(params) => {
        return(
          <>
          {params.row.typebookAndnovel}
          </>
        )
    }
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
