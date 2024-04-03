import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserLanguage } from '../../../redux/signupActions';

const SearchLang = () => {
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => state.signup.currentUserId);
    // Indian languages data (dummy data for demonstration)
    const indianLanguages = [
        "Hindi", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu", "Gujarati", "Kannada", "Odia", "Punjabi", "Malayalam",
        "Assamese", "Maithili", "Sanskrit", "Sindhi", "Nepali", "Santali", "Kashmiri", "Konkani", "Dogri", "Manipuri", "Bodo"
    ];
    const signupData = useSelector(state => state.signup.formData);


    // Function to generate three random language names
    const generateRandomLanguages = () => {
        const randomLanguages = [];
        while (randomLanguages.length < 3) {
            const randomIndex = Math.floor(Math.random() * indianLanguages.length);
            const randomLanguage = indianLanguages[randomIndex];
            if (!randomLanguages.includes(randomLanguage)) {
                randomLanguages.push(randomLanguage);
            }
        }
        return randomLanguages;
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [randomLanguages, setRandomLanguages] = useState(generateRandomLanguages());
    const [clickedText, setClickedText] = useState('');

    // Function to handle input change
    const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // Filter languages based on search term
    const results = indianLanguages.filter(language =>
        language.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
};

    // Function to handle click on search result or random language
    const handleClick = (language) => {
        setClickedText(language);
        setSearchResult([language]);
        dispatch(updateUserLanguage(currentUserId, language));
        console.log(signupData);
    };

    return (
        <div className='px-16'>
            <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">Language Selection</h1>
            <p className="text-[#6F6C90] font-poppins text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac metus id velit</p>
            <div className='mt-4 font-poppins relative'>

                <div className="flex items-center">
                    {/* <img src={Search} /> */}
                    <input
                        type="text"
                        placeholder="Search languages..."
                        value={searchTerm}
                        onChange={handleChange}
                        className="w-full border-2 bg-[#B8E1E2] border-[#EFF0F6] rounded-2xl px-4 py-4 pl-10" // Added pl-10 to adjust input field position
                    />

                </div>
            </div>
            {/* Display search result */}
            {searchResult.length > 0 && (
    <div className={`mt-4 bg-white rounded-2xl border-2 border-[#098F8A] p-4 font-poppins text-md`}>
        {searchResult.map((result, index) => (
            <div
                key={index}
                className={`cursor-pointer rounded-md p-2 mb-2 ${result === clickedText ? 'text-[#098F8A]' : 'text-[#170F49]'}`}
                onClick={() => handleClick(result)}
            >
                {result}
            </div>
        ))}
    </div>
)}
            {/* Display three random language names */}
            <div className="mt-4 bg-white rounded-2xl border-2 border-[#098F8A] p-4 font-poppins text-sm text-[#170F49]">
                {randomLanguages.map((language, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer hover:outline outline-[#098F8A] rounded-md p-2 mb-2 ${language === clickedText ? 'text-[#098F8A]' : 'text-[#170F49]'}`}
                        onClick={() => handleClick(language)}
                    >
                        {language}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchLang;
