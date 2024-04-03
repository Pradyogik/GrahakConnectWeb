import React, { useState, useRef } from 'react';
import upload from "../../../images/Onboarding/upload.svg";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserWebsiteUrl, updateUserCompanyLogo } from '../../../redux/signupActions'; 
import '../../../firebase'
const Companyupload = () => {
    const currentUserId = useSelector(state => state.signup.currentUserId);
    const userData = useSelector(state => state.signup.formData[currentUserId]);
    const dispatch = useDispatch();
    const [previewUrl, setPreviewUrl] = useState(null);
    const fileInputRef = useRef();

    const handleWebsiteUrlChange = (event) => {
        dispatch(updateUserWebsiteUrl(currentUserId, event.target.value));
    };

    const handleFileUpload = (file) => {
        setPreviewUrl(URL.createObjectURL(file));
        const storage = getStorage();
        const storageRef = ref(storage, 'companyLogos/' + currentUserId + '/' + file.name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }, 
            (error) => {
                console.error('Error uploading file:', error);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    dispatch(updateUserCompanyLogo(currentUserId, downloadURL));
                });
            }
        );
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        handleFileUpload(file);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        handleFileUpload(file);
    };

    return (
        <div className='px-16'>

            <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">Company details</h1>
            <p className="text-[#6F6C90] font-poppins text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac metus id velit</p>
            <div className='mt-4 font-poppins'>
                <label className="block  text-[#170F49] text-md font-medium mb-2">Website Links </label>
                <textarea placeholder="Enter description" className="w-full border-2 border-[#EFF0F6] rounded-2xl h-16 px-4 py-4" onChange={handleWebsiteUrlChange} />
            </div>
            <h1 className="text-[#170F49] text-md mb-6 mt-4 font-poppins font-medium">Company Logo</h1>

            <div className="flex justify-center items-center ">
                <div className="w-3/4 py-8 relative border-2 border-[#098F8A] border-dashed rounded-lg p-6" id="dropzone" onDragOver={(event) => event.preventDefault()} onDrop={handleDrop}>
                    <div className="text-center">
                        <img className="mx-auto h-12 w-12" src={upload} alt="" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">
                            <label htmlFor="file-upload" className="relative cursor-pointer">
                                <span> Choose a file or drag & drop it here</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileInputChange} ref={fileInputRef} />
                            </label>
                        </h3>
                        <button className="mt-1 bg-white border border-gray-300  text-[#54575C] px-4 py-2 rounded-lg " onClick={() => fileInputRef.current.click()}>
                            Browse
                        </button>
                    </div>
                    <img src={previewUrl} className={`mt-4 mx-auto max-h-40 ${previewUrl ? '' : 'hidden'}`} id="preview" />
                </div>
            </div>
        </div>
    );
};

export default Companyupload;