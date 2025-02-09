// import React from "react";
import { BsFacebook, BsGeoAlt, BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";

const Footer = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <>
      {/* adding the footer */}
      <footer className="fixed left-0 bottom-0 w-full h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between sm:px-20 text-white bg-gray-800">
        {/* adding copyright section */}
        <section className="text-lg">
        &copy; {year} | All Rights Reserved
        </section>

        {/* adding the social media section */}
        <section className="flex items-center justify-center gap-5 text-2xl text-white">
          
          {/* 1. fb */}
          <a
            target="_black"
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
            href="https://www.facebook.com/share/1Cwiba6ktH/"
          >
            <BsFacebook />
          </a>

          {/* 2. Instagram */}
          <a
            target="_black"
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
            href="https://www.instagram.com/bmakarateacademy/"
          >
            <BsInstagram />
          </a>

          {/* 3. YouTube */}
          <a
            target="_black"
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
            href="https://www.youtube.com/@BMAkarateAcademy"
          >
            <BsYoutube />
          </a>

          {/* 4. Whatsapp */}
          <a
            target="_black"
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
            href="https://wa.me/917001406171"
          >
            <BsWhatsapp />
          </a>

          {/* 5. GoogleMap */}
          <a
            target="_black"
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
            href="https://g.co/kgs/sG7Sq2r"
          >
            <BsGeoAlt />
          </a>
        </section>
      </footer>
    </>
  );
};

export default Footer;