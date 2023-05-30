import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Info = () => {
    const {id} =  useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        importData();
      }, [id]);
    async function importData() {
        try {
          const module = await import(`../../data/${id}.json`);
          setData(module.default);
        } catch (error) {
          console.error(error);
        }
      }
      console.log(data);
  return (
    <div>{data?.map((d)=>d.PageName)}</div>
  )
}

export default Info