const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <p>Subscribe to Newsletter</p>
            <p>
              Get emails from me about web development, tech, and early access to new articles
            </p>
          </div>
          <div>
            <input placeholder="john.doe@example.com" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="socials">
          <ul className="socials-list">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
