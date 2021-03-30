import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";

import Bca from "assets/images/logo-bca.jpg";
import Mandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, itemDetail, checkout } = props;

  const tax = 10;
  const subTotal = itemDetail.price * checkout.duration;
  const grandTotal = (subTotal + tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container mb-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{paddingRight: 80}}>
            <Fade delay={300}>
              <p className="mb-3">Transfer Pembayaran :</p>
              <p>Tax: {tax}</p>
              <p>Sub Total: ${subTotal} USD</p>
              <p>Total: <b>${grandTotal} USD</b></p>

              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={Bca} alt="bank central asia" width={68}/>
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd><b>2114 1993</b></dd>
                    <dd><b>Inzoid</b></dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={Mandiri} alt="mandiri" width={68}/>
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd><b>2114 1993</b></dd>
                    <dd><b>Inzoid</b></dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{paddingLeft: 80}}>
            <Fade delay={600}>
              <label htmlFor="payment">Upload Bukti Pembayaran</label>
              <InputFile 
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText 
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText 
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
