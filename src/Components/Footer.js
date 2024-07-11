import React from "react"; // Import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-1 fixed-bottom" style={{ marginTop: '5rem' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>About</h4>
                        <p>
                            This application created by Haeytham Almalak
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Contact</h4>
                        <p>
                            <a href="mailto:your-email@example.com" className="text-light">
                                halmalak@myseneca.ca
                            </a>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow</h4>
                        <p>
                            <a href="https://github.com/haeythamM" className="text-light">
                                Github
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
