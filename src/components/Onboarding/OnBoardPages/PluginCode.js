import React from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../../firebase.js"; 

const PluginCode = () => {
  const currentUserId = useSelector((state) => state.signup.currentUserId);
  const userData = useSelector((state) => state.signup.formData[currentUserId]);

  const handleComplete = () => {
    const db = getDatabase(app);
    set(ref(db, 'users/' + currentUserId), userData);
  };

  

  return (
    <>
      <div className="relative max-w-2xl mx-auto mt-2">
        <div className=" text-[#6F6C90] p-4 rounded-md ">
          <div className="overflow-x-auto h-scr">
            <pre id="code" className="text-[#6F6C90] bg-yellow-100 ">
              {"        "}
              <code>
                {"\n"}&lt;div class="flex justify-center items-center text-white
                p-4"&gt;{"\n"}
                {"  "}&lt;h1 class="text-2xl"&gt;Hello, Tailwind CSS!&lt;/h1&gt;
                {"\n"}
                &lt;/div&gt;
              </code>
              {"\n"}
              {"\n"}
            </pre>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span></span>
            <button
              className="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
              data-clipboard-target="#code"
            >
              Copy
            </button>
          </div>
        </div>
        <button  onClick={handleComplete} className="bg-[#098F8A] text-white border-2 border-[#098F8A] rounded-3xl px-4 py-3 ">
          Next step
        </button>
      </div>
    </>
  );
};

export default PluginCode;
