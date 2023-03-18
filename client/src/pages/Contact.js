import React from 'react'
import Layout from '../components/layout/Layout'
import { BiMailSend, BiPhoneCall} from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpg"
            alt="contactUs"
            style={{ width: "100%"}}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2" style={{fontFamily: "Poppins", lineHeight: "2", fontWeight: "700"}}>
            For any query about the products feel free to call or whatsApp anytime, we will do our best to get back 
            to you as soon as possible!
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.kitaabjii@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 7258904949
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
