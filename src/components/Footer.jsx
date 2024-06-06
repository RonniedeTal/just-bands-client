import React from "react";

import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <Card className="text-center custom-card">
      <Card.Body>
        <div className="footer-links">
          <div className="social-links">
            <a href="/about">About Us</a>
            <a href="https://github.com/RonniedeTal/just-bands-client">
              GithubClient
            </a>
            <a href="https://github.com/RonniedeTal/just-bands-server">
              GithubServer
            </a>
          </div>
        </div>
        <Card.Footer className="text-muted custom-card">
          © 2024 Just Bands Inc. All rights reserved. Unauthorized reproduction,
          distribution, or public performance of this material is prohibited.
          For permissions, contact [JustBands@juustbands.com]..
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default Footer;
