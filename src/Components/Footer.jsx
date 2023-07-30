import "./Styling.css"
const Footer = () =>
{
    return (

        <footer className="footer-container" style={{ backgroundColor: "blue", color: "white" }}>
            <p>&copy; {new Date().getFullYear()} Created by Raphael Felicio.</p>
        </footer>
    );
};

export default Footer;