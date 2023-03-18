import React from 'react'
import Layout from '../components/layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpg"
            alt="privacy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-5 ">
          <p className="text-justify mt-2" style={{fontFamily: "Poppins",fontSize:"10px", fontWeight: "200"}}>
           <li>At our online book store, we take the privacy of our customers seriously. This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website and make purchases from our online store. By using our website and making purchases, you consent to the terms of this Privacy Policy.</li>
           <li>We collect personal information such as your name, address, email address, and payment information when you place an order on our website. We use this information to process your order, communicate with you about your order, and to provide you with customer service. We may also use your email address to send you promotional offers and updates about our products and services, but you may opt out of these communications at any time.</li>
           <li>We use cookies and other tracking technologies to collect information about your browsing behavior on our website. This information may include your IP address, browser type, and the pages you visit on our website. We use this information to analyze website traffic, to improve our website and to provide you with a better customer experience.</li>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy
