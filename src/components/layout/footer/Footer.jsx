import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Instagram from "../../../assets/social_icons/instagram.png";
import Facebook from "../../../assets/social_icons/facebook.png";
import Twitter from "../../../assets/social_icons/twitter.png";
import LinkedIn from "../../../assets/social_icons/linkedin.png";
import Youtube from "../../../assets/social_icons/youtube.png";

const Footer = () => {
  return (
    <div className="w-full border bg-slate-100 py-2 mt-4 px-3">
      <div className="flex  justify-around max-md:flex-wrap max-sm:flex-col max-sm:px-6">
        <section>
          <h1 className="text-xl font-semibold py-4">Quick Links</h1>
          <ul>
            <NavLink>
              <li>Home</li>
            </NavLink>
            <NavLink>
              <li>About us</li>
            </NavLink>
            <NavLink>
              <li>Contact us</li>
            </NavLink>
            <NavLink>
              <li>Blog</li>
            </NavLink>
            <NavLink>
              <li>Orders</li>
            </NavLink>
          </ul>
        </section>
        <section>
          <h1 className="text-xl font-semibold py-4">Policy</h1>
          <ul>
            <NavLink>
              <li>Refund & cancellation</li>
            </NavLink>

            <NavLink>
              <li>Privacy Policy</li>
            </NavLink>

            <NavLink>
              <li>Emails</li>
            </NavLink>
            <NavLink>
              <li>+91 9936752250</li>
            </NavLink>
            <NavLink>
              <li>Location</li>
            </NavLink>
          </ul>
        </section>
        <section className="max-md:hidden">
          <h1 className="text-xl font-semibold py-4">Trendings</h1>
          <ul>
            <NavLink>
              <li>Men's</li>
            </NavLink>
            <NavLink>
              <li>Mobile</li>
            </NavLink>
            <NavLink>
              <li>T-shirts</li>
            </NavLink>
            <NavLink>
              <li>Jeans</li>
            </NavLink>
            <NavLink>
              <li>Jackets</li>
            </NavLink>
          </ul>
        </section>
        <section className="max-sm:w-full">
          <h1 className="text-xl font-semibold py-4">Follow us</h1>
          <ul className="flex">
            <NavLink>
              <li className="h-11 w-11 grid place-items-center mx-1 border rounded-full">
                <img src={Instagram} alt="instagram" />
              </li>
            </NavLink>
            <NavLink>
              <li className="h-11 p-1 w-11 grid place-items-center mx-1 border rounded-full">
                <img src={Facebook} alt="facebook" />
              </li>
            </NavLink>
            <NavLink>
              <li className="h-11 w-11 p-1 grid place-items-center mx-1 border rounded-full">
                <img src={Twitter} alt="twitter" />
              </li>
            </NavLink>
            <NavLink>
              <li className="h-11 w-11 p-1 grid place-items-center mx-1 border rounded-full">
                <img src={LinkedIn} alt="linkedin" />
              </li>
            </NavLink>
            <NavLink>
              <li className="h-11 w-11 p-1 grid place-items-center mx-1 border rounded-full">
                <img src={Youtube} alt="youtube" />
              </li>
            </NavLink>
          </ul>

          <div className="my-4">
            <h2 className="my-2">SUBSCRIBE US</h2>

            <div className="flex border items-center">
              <input
                type="email"
                placeholder="Email"
                className=" bg-white outline-none py-1 px-3 h-8"
              />
              <button className="bg-red-400 text-white h-8 px-3">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;