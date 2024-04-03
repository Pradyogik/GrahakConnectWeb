import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserCompanyDetails } from '../../../redux/signupActions';

const Companydetails = () => {
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => state.signup.currentUserId);
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const signupData = useSelector(state => state.signup.formData);


    const handleDescriptionBlur = () => {
        dispatch(updateUserCompanyDetails(currentUserId, { description }));
        console.log(signupData);
    };

    return (
        <div className='px-16'>
            <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">Company details</h1>
            <p className="text-[#6F6C90] font-poppins text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac metus id velit</p>
            <div className='mt-4 font-poppins'>
                <label className="block  text-[#170F49] text-md font-medium mb-2">Company Description</label>
                <textarea 
                    placeholder="Enter description" 
                    className="w-full border-2 border-[#EFF0F6] rounded-2xl h-44 px-4 py-4"
                    value={description}
                    onChange={handleDescriptionChange}
                    onBlur={handleDescriptionBlur}
                />
            </div>
        </div>
    );
};

export default Companydetails;