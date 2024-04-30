




// import React from 'react';

const Cover = () => {
    return (
        <div className=" w-11/12 mx-auto py-3 sm:flex sm:flex-row-reverse justify-evenly items-center  ">
           <img
                className=" sm:w-6/12 sm:h-[550px]"
                     src="https://static.vecteezy.com/system/resources/previews/025/003/261/original/cute-cartoon-boy-student-character-on-transparent-background-generative-ai-png.png" alt="" />

            <div className=" sm:w-6/12 ">
                <h2 className=" text-4xl sm:text-6xl font-semibold text-yellow-50 my-2">
                    The Future of Learning starts with students at the center
                </h2>
                <button className=' mt-3 bg-green-700 hover:bg-green-600 outline-none  py-2 px-4 text-white rounded-2xl'>Get Admission</button>
            </div>
        </div>
    );
};

export default Cover;