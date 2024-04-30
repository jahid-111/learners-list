


// import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Students = () => {

    const [rankedStudents, setRankedStudents ] = useState([]);
    const [dueStudents, setDueStudents] = useState([]);
    console.log(dueStudents)
        useEffect( ()=> {
            fetch("data.json")
            .then( res => res.json())
            .then (data => {

                const firstThreePerson = data.slice(0,3);
                      setRankedStudents(firstThreePerson);

                const resStudents =data.slice(3);
                      setDueStudents(resStudents) 
            })
            

        },[])

    return (
        <section className=' bg-gray-100'>
            {/* Raanked Students */}
            <div className=' '>
                <table className=' bg-gray-300 px-3 text-center  border border-red-400 py-24 w-full sm:w-6/12 mx-auto'>
                    <thead className='  '>
                        <tr className=' font-bold text-gray-800'>
                            <td className=' border-4 border-gray-500'>ID</td>
                            <td className=' border-4 border-gray-500'>Name</td>
                            <td className=' border-4 border-gray-500'>Scores</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            rankedStudents.map(topStudent => 
                                <tr 
                                   className=' border border-green-400 font-semibold'
                                    key={topStudent.ID}>
                                        <td className=' border border-gray-400 py-2'>{topStudent.ID}</td>
                                        <td className=' border border-gray-400 py-2'>{topStudent.Name}</td>
                                        <td className=' border border-gray-400 py-2'>{topStudent.Percentage}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
       

       {/* Rest Students */}
            <div>
                <table className=' hidden bg-gray-400 border py-24 w-full sm:w-9/12 mx-auto'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Scores</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            dueStudents.map(dueStudents => 
                                <tr key={dueStudents.ID}>
                                    <td>{dueStudents.ID}</td>
                                    <td>{dueStudents.Name}</td>
                                    <td>{dueStudents.Percentage}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
           

            
        </section>
    );
};

export default Students;