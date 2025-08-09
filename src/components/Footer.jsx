import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="container-px py-10 text-sm opacity-70">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {year} Gopal — All rights reserved.</p>
        <p>Built with React & Tailwind • Deployed on Vercel/Netlify</p>
      </div>
    </footer>
  );
};

export default Footer;
