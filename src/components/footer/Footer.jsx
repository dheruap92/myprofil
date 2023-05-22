import React from "react";

function Footer() {
  return (
    <>
      <div>
        <footer id="footer">
          <div className="container">
            <div className="copyright">
              © Copyright
              <strong>
                <span>iPortfolio</span>
              </strong>
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>
        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
      </div>
    </>
  );
}

export default Footer;
