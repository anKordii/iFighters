import React from "react";

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <span className="text-muted">Copyright © 2022 iFighters. Wszelkie prawa zastrzeżone.</span>
      <span className="text-muted float-end">
      <a href={`/privacy`}>Polityka Prywatności</a>
      </span>
    </div>
  </footer>
  );
}

export default Footer;