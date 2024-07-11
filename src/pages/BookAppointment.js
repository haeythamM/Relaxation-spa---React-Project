import React, { useState } from 'react';
import Card from '../Components/Card';

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        service: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); 
    };

    return (
        <div className="container">
            <Card title="Book Appointment">
                <form onSubmit={handleSubmit} style={{ padding: '20px', backgroundColor: '#FDE5A9' }}>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label htmlFor="name" style={{ marginBottom: '5px', display: 'block' }}>Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={handleInputChange} style={{ width: '100%', padding: '10px', border: '1px solid #C4AE74', borderRadius: '5px' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label htmlFor="service" style={{ marginBottom: '5px', display: 'block' }}>Type of Service</label>
                        <select className="form-control" id="service" onChange={handleInputChange} style={{ width: '100%', padding: '10px', border: '1px solid #C4AE74', borderRadius: '5px' }}>
                            <option value="">Choose...</option>
                            <option value="Manicure">Manicure</option>
                            <option value="Pedicure">Pedicure</option>
                            <option value="Massage">Massage</option>
                            <option value="Facial">Facial</option>
                        </select>
                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label htmlFor="phone" style={{ marginBottom: '5px', display: 'block' }}>Phone Number</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" onChange={handleInputChange} style={{ width: '100%', padding: '10px', border: '1px solid #C4AE74', borderRadius: '5px' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label htmlFor="message" style={{ marginBottom: '5px', display: 'block' }}>Message</label>
                        <textarea className="form-control" id="message" rows="3" placeholder="Enter your message" onChange={handleInputChange} style={{ width: '100%', padding: '10px', border: '1px solid #C4AE74', borderRadius: '5px' }}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '10px', backgroundColor: '#00293F', color: '#fff', border: 'none', borderRadius: '5px' }}>Submit</button>
                </form>
            </Card>
        </div>
    );
}
export default BookAppointment;
