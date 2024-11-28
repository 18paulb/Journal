import { useState, useEffect } from "react";
import axios from "axios";
import Image from 'next/image'

export function NasaData({date}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/widget?date=${date}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data.url);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Information About the Day</h1>
      {data ? (
        <img src={data.url} alt="space image" width={200} height={200} />
      ) : (
        <p>No data</p>
      )}
    </>
  );
}
