import React, { useState } from 'react';
import Ecom from "../../../images/Onboarding/Ecom.svg";
import Healthcare from "../../../images/Onboarding/healthcare.svg";
import Marketing from "../../../images/Onboarding/marketing.svg";
import Settings from "../../../images/Onboarding/Setting.svg";
import { useDispatch ,useSelector} from 'react-redux';
import { updateUserCompanyType } from '../../../redux/signupActions';


const GridItem = ({ imgSrc, altText, text, onClick, isSelected }) => (
    <div
        className={`border border-[#EFF0F6] rounded-2xl flex justify-center items-center relative shadow-md cursor-pointer ${isSelected ? 'border-green-800 border-2' : ''}`}
        onClick={onClick}
    >
        <div className={`bg-[#098F8A] rounded-2xl bg-opacity-20 rounded-full h-14 w-14 flex justify-center items-center mr-4 ${isSelected ? 'border-2 border-green-500' : ''}`}>
            <img className="" src={imgSrc} alt={altText} />
        </div>
        <span className={`text-md ${isSelected ? 'text-[#098F8A]' : 'text-[#170F49]'}`}>{text}</span>
    </div>
);

const Companytype = () => {
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null);
    const currentUserId = useSelector(state => state.signup.currentUserId);

    const items = [
        { imgSrc: Ecom, altText: 'Ecommerce', text: 'Ecommerce' },
        { imgSrc: Healthcare, altText: 'Healthcare', text: 'Healthcare' },
        { imgSrc: Marketing, altText: 'Marketing', text: 'Marketing' },
        { imgSrc: Settings, altText: 'Settings', text: 'Settings' },
    ];

    const handleItemClick = (index) => {
        console.log(items[index].text);
        setSelectedItem(index);
        dispatch(updateUserCompanyType(currentUserId, items[index].text));


        // Submit the user data to Firebase
        
    }
    return (
        <div className='px-16'>
            <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">Company details</h1>
            <p className="text-[#6F6C90] font-poppins  text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac metus id velit</p>
            <div className="grid h-48 mt-4 font-poppins font-medium text-[#170F49] grid-cols-2 grid-rows-2 gap-4">
                {items.map((item, index) => (
                    <GridItem
                        key={index}
                        imgSrc={item.imgSrc}
                        altText={item.altText}
                        text={item.text}
                        onClick={() => handleItemClick(index)}
                        isSelected={selectedItem === index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Companytype;
