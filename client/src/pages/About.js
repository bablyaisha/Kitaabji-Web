import React from 'react'
import Layout from '../components/layout/Layout'

const About = () => {
  return (
    <Layout title={"About Kitaabji"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <img
          src="/images/about.jpg"
          alt="about"
          style={{ width: "100%", marginTop: "60px" }}
        />
      </div>
      <div className="col-md-4 p-3 m-5">
        <p className="text-justify mt-2" style={{fontFamily: "Poppins", lineHeight: "2", fontWeight: "700"}}>
        Welcome to our online bookstore where we offer the latest and greatest books from top authors around the world for IIT-JEE and NEET. For any book which is not found on our website you can directly WhatsApp us regarding the same.
        </p>
      </div>
    </div>
  </Layout>
  )
}

export default About
