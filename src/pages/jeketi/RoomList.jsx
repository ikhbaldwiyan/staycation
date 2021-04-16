import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Col, Table , Button, FormGroup, Input } from 'reactstrap';

export default function RoomList({setRoomId}) {
  const handleInputId = (event) => {
    setRoomId(event.target.value);
  }

  const [room, setRoom] = useState("");

  useEffect(() => {
    axios.get('/room_status_list.json').then((res) => {
      const listRoom = res.data;
      setRoom(listRoom);
    })
  });

  return (
    <Row>
      <Col>
        <FormGroup>
          <Input type="number" placeholder="Masukan ID Showroom" onChange={handleInputId} />
        </FormGroup>
        <Table dark>
          <thead>
            <tr>
              <th 
                colSpan="2" 
                style={{backgroundColor: '#24a2b7', color: 'white', border: 'none'}}>
                Daftar Showroom Member JKT48 
              </th>
            </tr>
          </thead>

          {/* Is live */}
          {room && room.map((item, idx) => (
            item.name.includes("JKT48") && item.is_live &&
            <tbody key={idx}>
              <tr>
                <td>{item.url_key.substr(6)} <Button color="danger" className="btn-sm ml-3 text-white">Live Now</Button></td>
                <td>
                  <Button
                    color="primary"
                    style={{backgroundColor: '#24a2b7', color: 'white', border: 'none'}}
                    onClick={() => setRoomId([item.id])}>
                    See Room
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}

          {/* Not Live */}
          {room && room.map((item, idx) => (
            item.name.includes("JKT48") && 
            <tbody key={idx}>
              <tr>
                <td>{item.url_key.substr(6)}</td>
                <td>
                  <Button
                    color="primary"
                    style={{backgroundColor: '#24a2b7', color: 'white', border: 'none'}}
                    onClick={() => setRoomId([item.id])}>
                    See Room
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Col>
    </Row>
  )
}
