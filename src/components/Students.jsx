


// import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Students = () => {

    const [rankedStudents, setRankedStudents ] = useState([]);
    const [dueStudents, setDueStudents] = useState([]);
        useEffect( ()=> {
            fetch("data.json")
            .then( res => res.json())
            .then (data => {
                const firstThreePerson = data.slice(0,3);
                      setRankedStudents(firstThreePerson);
                const resStudents =data.slice(3);
                      setDueStudents(resStudents) ;
            })
        },[])

    return (
        <section className=' '>
            {/* Raanked Students */}
            <div className=' '>
                <table className=' px-3 text-center  border border-red-400 py-24 w-full sm:w-6/12 mx-auto'>
                    <thead className='  '>
                        <tr className=' font-bold px-3   text-gray-800'>
                            <td className=' py-2 border-2 bg-green-400 border-gray-300 w-16'>ID</td>
                            <td className=' py-2 border-2 bg-green-400 border-gray-300 w-60'>Name</td>
                            <td className=' py-2 border-2 bg-green-400 border-gray-300 w-24'>Scores</td>
                        </tr>
                    </thead>

                    <tbody className='' >
                        {
                            rankedStudents.map(topStudent => 
                                <tr 
                                   className=' border font-semibold'
                                    key={topStudent.ID}>
                                        <td className=' bg-gradient-to-r from-yellow-200  bg-gray-300 border border-gray-400 py-2'>*{topStudent.ID}</td>
                                        <td className=' bg-gradient-to-r from-yellow-200  bg-gray-300 border border-gray-400 py-2'>{topStudent.Name}</td>
                                        <td className=' bg-gradient-to-r from-yellow-200  bg-gray-300 border border-gray-400 py-2'>{topStudent.Percentage}%</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* dueStudents */}
            <div className=' '>
                <table className=' px-3 text-center  border border-red-400 py-24 w-full sm:w-6/12 mx-auto'>
                    <thead className='  '>
                        <tr className=' font-bold text-gray-800'>
                            <td className=' py-2 border-2 bg-green-400 border-gray-100 w-16'>ID</td>
                            <td className=' py-2 border-2 bg-green-400 border-gray-100 w-60'>Name</td>
                            <td className=' py-2 border-2 bg-green-400 border-gray-100 w-24'>Scores</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            dueStudents.map(topStudent => 
                                <tr 
                                   className=' border border-green-400 font-semibold'
                                    key={topStudent.ID}>
                                        <td className=' bg-gray-300 border border-gray-00 py-2'>{topStudent.ID}</td>
                                        <td className=' bg-gray-300 border border-gray-00 py-2'>{topStudent.Name}</td>
                                        <td className=' bg-gray-300 border border-gray-00 py-2'>{topStudent.Percentage}%</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Students;