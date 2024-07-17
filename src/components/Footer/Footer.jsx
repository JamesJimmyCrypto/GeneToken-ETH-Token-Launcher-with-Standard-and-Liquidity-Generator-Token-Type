import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { Discord, X } from "iconoir-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-t-gray-550 py-8">
      <Container>
        <div className="relative flex flex-col items-center justify-center gap-5">
          <div className="relative w-14">
            <img
              src="/assets/images/logo.svg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <ul className="relative my-5 flex items-center justify-center flex-wrap gap-5">
            <li>
              <Link className="inline-block hover:opacity-60">Security</Link>
            </li>
            <li>
              <Link className="inline-block hover:opacity-60">Terms</Link>
            </li>
            <li>
              <Link className="inline-block hover:opacity-60">Privacy</Link>
            </li>
            <li>
              <Link className="inline-block hover:opacity-60">Docs</Link>
            </li>
            <li>
              <Link className="inline-block hover:opacity-60"><Discord /></Link>
            </li>
            <li>
              <Link className="inline-block hover:opacity-60"><X /></Link>
            </li>
          </ul>
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
