import * as React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 mb-8">
                        <img src={require('../assets/img/La_Pointe__WI_UnitedStates.jpg')} width={50} height={400} className="card-img-top" alt="Welcome" />
                        <div className="card-body">
                            <h5 className="card-title">Welcome to Our Website</h5>
                            <p className="card-text">Welcome to the Relaxation SPA, your sanctuary for relaxation, rejuvenation, and tranquility.
                                At Relaxation SPA, we believe in the transformative power of self-care. Step into our serene oasis, where every detail is crafted to provide you with an unparalleled spa experience.
                                Indulge your senses as you escape the hustle and bustle of daily life. From the moment you enter, you'll be enveloped in a soothing ambiance, where soft lighting, calming music, and fragrant aromatherapy oils create an atmosphere of pure bliss.
                                Our team of skilled therapists is dedicated to your well-being, offering a range of luxurious treatments designed to melt away tension, soothe tired muscles, and restore balance to the mind, body, and spirit.
                                Whether you're seeking a blissful massage, a rejuvenating facial, or a pampering spa package, our personalized services are tailored to meet your individual needs and preferences.
                                Take a moment to unwind, recharge, and reconnect with yourself at the Relaxation SPA. Your journey to relaxation begins here.</p>
                                Note: All Images are from pexels.com
                            <Link className="nav-link" to="/BookAppointment">Book Appointment Today!</Link>
                            <Link className="nav-link" to="/Products">Buy our Luxurious Products! </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
