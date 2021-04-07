import React from "react";
import Header from "parts/Header";
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap";

export default function Live(props) {
  return (
    <div>
      <Header {...props} />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <CardImg
              top
              width="100%"
              src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2021/03/29/d216b437-ff1d-4daf-9b64-8d948d3a5d44-1617009712505-a197a75cd198a846f2d03553336d0f79.jpg"
              alt="Card image cap"
            />
            <Card body inverse color="danger">
              <CardBody inverse color="danger">
                <CardTitle tag="h5">Aturan Anti Cinta</CardTitle>
                <CardText>
                  Setlist legendaris kembali. Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.
                </CardText>
                <Button className="btn-block" color="info">Button</Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-4">
            <div className="item column-4 row-2">
              <figure className="img-wrapper">
                <img
                  src="https://pbs.twimg.com/media/Exj3d-eVoAM98rL?format=jpg&name=large"
                  className="img-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
