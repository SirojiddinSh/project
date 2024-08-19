import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer_div1">
                <div className="footer_title">
                    <h2>MORENT</h2>
                    <h4>
                        Our vision is to provide convenience and help increase
                        your sales business.
                    </h4>
                </div>
                <div className="footer_links">
                    <div>
                        <ul>
                            <h2>About</h2>
                            <li>How it works</li>
                            <li>Featured</li>
                            <li>Partnership</li>
                            <li>Bussiness Relation</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h2>Community</h2>
                            <li>HEvents</li>
                            <li>Blog</li>
                            <li>Podcast</li>
                            <li>Invite a friend</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h2>Socials</h2>
                            <li>Discord</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer_div2">
                <p>©2022 MORENT. All rights reserved</p>
                <div>
                    <h4>Privacy & Policy</h4>
                    <h4>Terms & Condition</h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
