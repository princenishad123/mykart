import React from "react";
import Layout from "../components/layout/Layout";

const HelpCenter = () => {
  return (
    <Layout title={"Contact-us"} description={"Contact us"}>
      <div className="w-[70%] mx-auto max-md:w-[95%]">
        <h1 className="text-xl font-bold">Contact us </h1>
        <br />
        <br />

        <div className="flex gap-6 flex-wrap max:md:flex-col">
          <div>
            <p>
              We are here to assist you with any questions or concerns you may
              have. Please feel free to reach out to us through any of the
              following methods:
              <br />
              <ul>
                <li>
                  <b>owner</b> : Prince Nishad
                </li>
                <li className="font-bold">
                  Phone : +91 9936752250 <br />
                  Email : support123@gmail.com <br />
                  WhatsApp : 8707539855 <br />
                </li>
                <li>
                  <b>Address</b> : Uttar Pradesh, Kathkuiyan, katya , <br /> Pin
                  Code : 274303 <br /> distric : Kushinagar
                </li>
              </ul>
              <br />
              Give us a call at 9936752250. Our customer service team is
              available to help you with your inquiries. Email You can also
              email us at{" "}
              <span className="text-blue-700">support123@gmail.com</span> . We
              strive to respond to all emails within 24 hours.
              <h3>Office Hours</h3>
              Our office hours are Monday to Friday, 9:00 AM to 6:00 PM. We
              value your feedback and look forward to hearing from you! Let me
              know if you need any modifications or additional information.
            </p>
          </div>
          <div className="w-[350px] h-[350px] max-sm:w-full overflow-hidden">
            <img
              className="w-full"
              src="https://media.istockphoto.com/id/1312447731/photo/business-woman-at-office-stock-photo.jpg?s=612x612&w=0&k=20&c=wMTxmlwnehNF6NwhHBBfOahPqhE2zSWVkA-VD4yhDxY="
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelpCenter;
