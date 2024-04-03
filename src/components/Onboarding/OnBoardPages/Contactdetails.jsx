import React, { useState, useEffect } from 'react';
import Ecom from "../../../images/Onboarding/contact.svg";
import mail from "../../../images/Onboarding/mail.svg";
import Marketing from "../../../images/Onboarding/call.svg";
import Company from "../../../images/Onboarding/company.svg";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserContactDetails } from '../../../redux/signupActions';
const ContactDetails = () => {
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => state.signup.currentUserId);
    const signupData = useSelector(state => state.signup.formData);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [company, setCompany] = useState('');
    useEffect(() => {
        if (name && email && phoneNumber && company) {
            console.log('Contact details:', { name, email, phoneNumber, company });
            dispatch(updateUserContactDetails(currentUserId, { name, email, phoneNumber, company }));
            console.log(signupData);
        };
        }, [name, email, phoneNumber, company]);
    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    
    };

    return (
        <div className='px-16'>
            <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">Contact details</h1>
            <p className="text-[#6F6C90] font-poppins text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac metus id velit</p>
            <div className="flex font-poppins mt-4">
                <div className="w-3/4 relative">
                    <label className="block text-[#170F49] text-sm font-medium mb-2">Name</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Aditya Mishra"
                            value={name}
                            onChange={(event) => handleInputChange(setName, 'name')(event)}
                            className="w-full border-2 border-[#EFF0F6] rounded-3xl px-4 py-2"
                        />                     
                        <img src={Ecom} alt="Ecom" className="absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-5" />
                    </div>
                </div>
                <div className="w-3/4 ml-4 relative">
                    <label className="block text-[#170F49] text-sm font-medium mb-2">Email </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Email address"
                            value={email}
                            onChange={(event) => handleInputChange(setEmail, 'email')(event)}
                            className="w-full border-2 border-[#EFF0F6] rounded-3xl px-4 py-2"
                        />           
                        <img src={mail} alt="Healthcare" className="absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-5" />
                    </div>
                </div>
            </div>
            <div className="flex font-poppins mt-4">
                <div className="w-3/4 mr-4 relative">
                    <label className="block text-[#170F49] text-sm font-medium mb-2">Phone Number</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="(123) 456 - 7890"
                            value={phoneNumber}
                            onChange={(event) => handleInputChange(setPhoneNumber, 'phoneNumber')(event)}
                            className="w-full border-2 border-[#EFF0F6] rounded-3xl px-4 py-2"
                        />
                        <img src={Marketing} alt="Marketing" className="absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-5" />
                    </div>
                </div>
                <div className="w-3/4 relative">
                    <label className="block text-[#170F49] text-sm font-medium mb-2">Company</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter company name"
                            value={company}
                            onChange={(event) => handleInputChange(setCompany, 'company')(event)}
                            className="w-full border-2 border-[#EFF0F6] rounded-3xl px-4 py-2"
                        />
                        <img src={Company} alt="Settings" className="absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
