


// import Reat from 'react';

const Navbar = () => {
    return (
        <div className=" flex  h-24 justify-between items-center">
            <section className=" flex justify-center items-center gap-2">
                <img className=" border-4 p-2 border-green-600 h-16 w-16  rounded-full" src="https://www.pngall.com/wp-content/uploads/2018/04/School.png" alt="" />  
                <h3 className=" font-semibold text-white">
                    Learn <br /> 
                    With Sumith
                </h3>
            </section>

            <section>
                <button className=' bg-gray-800 hover:bg-gray-700 outline-none  py-2 px-4 text-white rounded-2xl'>Get Admission</button>
            </section>
        </div>
    );
};

export default Navbar;