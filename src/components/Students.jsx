


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
                <table className=' px-3 text-center   py-24 w-full sm:w-6/12 mx-auto'>
                    <thead className='  '>
                    <tr className='  font-bold bg-slate-950 text-xxl border-b px-3 text-white'>
                            <td className=' py-4 w-16'>ID</td>
                            <td className=' py-4 w-60'>Name</td>
                            <td className=' py-4 w-24'>Scores</td>
                        </tr>
                    </thead>

                    <tbody className='' >
                        {
                            rankedStudents.map(topStudent => 
                                <tr 
                                   className=' border-b border-gray-400 text-gray-300 font-semibold'
                                    key={topStudent.ID}>
                                        <td className='   py-2'>*{topStudent.ID}</td>
                                        <td className='   py-2'>{topStudent.Name}</td>
                                        <td className='   py-2'>{topStudent.Percentage}%</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* dueStudents */}
            <div className=' mt-3 '>
                <table className=' px-3 text-center  border-b py-24 w-full sm:w-6/12 mx-auto'>
                <thead>
                        <tr className='  font-bold bg-slate-950 text-xxl border-b px-3 text-white'>
                            <td className=' py-4 w-16'>ID</td>
                            <td className=' py-4 w-60'>Name</td>
                            <td className=' py-4 w-24'>Scores</td>
                        </tr>
                </thead>
                    <tbody>
                        {
                            dueStudents.map(dueStudent => 
                                <tr 
                                className=' border-b border-gray-400 text-gray-300 font-semibold'
                                 key={dueStudent.ID}>
                                     <td className='py-2'>{dueStudent.ID}</td>
                                     <td className='py-2'>{dueStudent.Name}</td>
                                     <td className='py-2'>{dueStudent.Percentage}%</td>
                             </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Students;