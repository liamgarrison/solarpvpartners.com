import React from "react";

const Footer = () => (
  <footer className="bg-white shadow-sm border-t">
    <div className="container mx-auto px-4 py-5  border-gray-200">
      <p className="text-center text-gray-700">
        © {new Date().getFullYear()} Solar PV Partners Limited
      </p>
      <p className="text-center text-gray-700">
        Hill View Farm, Hensting Lane, Owslebury, Winchester, Hampshire, SO21
        1LE
      </p>
    </div>
  </footer>
);

export default Footer;
