import { useState, useEffect } from "react";
import axios from "axios";
import { ImageWidget } from "./imageWidget";

export function NasaWidget({ date }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/widget?date=${date}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {data ? (
        <ImageWidget
          title={data.title}
          imageSrc={data.url}
          description={data.explanation}
          tags={null}
        />
      ) : (
        <p>No data</p>
      )}
    </>
  );
}
