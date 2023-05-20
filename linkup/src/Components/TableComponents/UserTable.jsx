import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./Column";

export default function UserTable() {
  const [userData, setUserdata] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/admin/get_userlist/`
    );
    setUserdata(response.data);
    console.log(response.data);
  };


  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => userData, []);

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table style={{color:'white'}} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup)=>{
       <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column)=>{
            <th{...column.getHeaderGroupProps()}>{column.render('Header')}</th>
            
        })}
       <th></th>
     </tr>
        })}
 
      </thead>
      <tbody {...getTableBodyProps}>
      {rows.map(row =>{
        prepareRow(row)
        return(
            <tr {...row.getRowProps()}>
            {row.cells.map((cell)=>{
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
            
            </tr>
            
        )
      })}
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
