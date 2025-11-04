import React from 'react';

function Header() {
    return (
        <header className="header" style={{
            width: "100%",
            backgroundColor: "#f6f3edff", // Medium's signature yellow/cream background
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)", // Subtle bottom border
            position: "sticky",
            top: "0",
            zIndex: "100",
            display: "flex",
            justifyContent: "center",
            height: "75px", // Specific height for the header
            alignItems: "center" // Vertically center content
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: "1100px", // Content max width
                padding: "0 24px", // Horizontal padding
            }}>
                <h1 className="logo" style={{
                    fontFamily: "'Spectral', serif", // Assuming a similar font for "Medium" logo
                    fontSize: "32px",
                    fontWeight: "normal", // Not bold in the image
                    color: "black",
                    margin: "0"
                }}>Medium</h1>
                
                <nav className="nav" style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "25px" // Adjusted spacing between nav items
                }}>
                    <a href="https://medium.com/about" style={{ textDecoration: "none", color: "black", fontSize: "15px" }}>Our story</a>
                    <a href="https://medium.com/membership" style={{ textDecoration: "none", color: "black", fontSize: "15px" }}>Membership</a>
                    <a href="#write" style={{ textDecoration: "none", color: "black", fontSize: "15px" }}>Write</a>
                    <a href="#signin" style={{ textDecoration: "none", color: "black", fontSize: "15px" }}>Sign in</a>
                    
                    <button className="get-started-btn" style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "8px 16px", // Slightly adjusted button padding
                        borderRadius: "999em",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "15px",
                        marginLeft: "10px"
                    }}>Get started</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;