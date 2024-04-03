import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProducts } from '../../../redux/signupActions'; 

const ProductDetails = () => {
  const currentUserId = useSelector(state => state.signup.currentUserId);
    const userData = useSelector(state => state.signup.formData[currentUserId]);
  const dispatch = useDispatch();
  let products = [];

  const handleProductChange = (event, productIndex) => {
    products[productIndex] = event.target.value;
  };

  const handleBlur = () => {
    dispatch(updateUserProducts(currentUserId, products));
    console.log('User data:', userData);
  };

  return (
    <div className='px-16'>
      <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">Product details</h1>
      <p className="text-[#6F6C90] font-poppins text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac metus id velit</p>
      <div className='mt-4 font-poppins'>
        <label className="block  text-[#170F49] text-md font-medium mb-2">Product 1 </label>
        <input placeholder="Hotel Booking services" className="w-full border-2 border-[#EFF0F6] rounded-2xl px-4 py-2" onChange={(event) => handleProductChange(event, 0)} onBlur={handleBlur} />
        <label className="block  text-[#170F49] text-md font-medium mb-2 mt-4">Product 2 </label>
        <input placeholder="Parking Booking services" className="w-full border-2 border-[#EFF0F6] rounded-2xl px-4 py-2" onChange={(event) => handleProductChange(event, 1)} onBlur={handleBlur} />
        <label className="block  text-[#170F49] text-md font-medium mb-2 mt-4">Product 3 </label>
        <input placeholder="Cab Booking services" className="w-full border-2 border-[#EFF0F6] rounded-2xl px-4 py-2" onChange={(event) => handleProductChange(event, 2)} onBlur={handleBlur} />
      </div>
    </div>
  );
};

export default ProductDetails;