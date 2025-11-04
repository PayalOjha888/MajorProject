import React from "react";

function Footer() {
    return (
        <footer className="footer" style={{
            backgroundColor: "#F2F2EF", // Consistent background color
            padding: "40px 24px",
            borderTop: "1px solid rgba(0, 0, 0, 0.1)", // Top border line as in the image
            textAlign: "center"
        }}>
            <nav style={{
                display: "flex",
                justifyContent: "flex-start", // Align links to the left in the footer's max-width container
                flexWrap: "wrap",
                gap: "20px", // Spacing between links
                maxWidth: "1100px", // Match content width
                margin: "0 auto" // Center the footer nav container
            }}>
                {/* Common link styles, smaller font as in the image */}
                <a href="#help" style={{ textDecoration: "none", color: "#757575", fontSize: "13px" }}>Help</a>
                <a href="#status" style={{ textDecoration: "none", color: "#757575", fontSize: "13px" }}>Status</a>
                <a href="#about" style={{ textDecoration: "none", color: "#757575", fontSize: "13px" }}>About</a>
                <a href="#careers" style={{ textDecoration: "none", color: "#757575", fontSize: "13px" }}>Careers</a>
                <a href="#press" style={{ textDecoration: "none", color: "#757575", fontSize: "13px" }}>Press</a>
                <a href="#blog" style={{ textDecoration: "none", color: "#757575", fontSize: "13px" }}>Blog</a>
                <a href="#privacy" style={{ textDecoration: "none", color: "#757575", fontSize: "13px" }}>Privacy</a>
                <a href="#rules" style={{ textDecoration: "none", color: "#757575", fontSize: "13px" }}>Rules</a>
                <a href="#terms" style={{ textDecoration: "none", color: "#757575", fontSize: "13px" }}>Terms</a>
                <a href="#texttospeech" style={{ textDecoration: "none", color: "#757575", fontSize: "13px" }}>Text to speech</a>
            </nav>
        </footer>
    );
}

export default Footer;