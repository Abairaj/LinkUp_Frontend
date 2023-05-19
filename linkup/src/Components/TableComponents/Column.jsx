import React, { useState } from 'react'

export default function Column() {
    const [data,setData] = useState([])

    useEffect(() => {
        FetchData();
      }, []);
    
      const FetchData = async () => {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/admin/get_userlist/`
        );
        setData(response.data);
      };
  return (
    <div>
      
    </div>
  )
}
