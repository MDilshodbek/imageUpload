import "./App.css";
// import { Button, Form, Input, Upload } from "antd";

import { Card, Button, Modal } from "antd";
import { useEffect, useState } from "react";
const { Meta } = Card;

function App() {
  const [flowers, setFlowers] = useState([]);
  const [open, setOpen] = useState(false);
  // const onSubmit = (values) => {
  //   console.log(values);
  // };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8080/api/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7"
      );

      const data = await response.json();
      setFlowers(data.data);
    };

    fetchData();
  }, []);
  return (
    (
      <Modal
        visiable={open}
        open={open}
        onCancel={() => setOpen(false)}
        title="Add Flower"
      ></Modal>
    ),
    (
      <div className="button">
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Add
        </button>
      </div>
    ),
    (
      <div>
        <div className="box">
          {flowers.map(({ _id, main_image, title, short_description }) => (
            <Card
              key={_id}
              hoverable
              style={{
                width: 440,
              }}
              cover={<img alt="example" src={main_image} />}
            >
              <Meta title={title} description={short_description} />
            </Card>
          ))}
        </div>
      </div>
    )
  );
}

export default App;
