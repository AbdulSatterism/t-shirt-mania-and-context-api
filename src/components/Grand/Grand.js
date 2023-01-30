import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grand.css'

export const MyContext = createContext('dadur ring')

const Grand = () => {
    return (
        <MyContext.Provider value='golden ring'>
            <div className='grand'>
                <h1>Dadu vai</h1>
                <section className='flex'>
                    <Father></Father>
                    <Uncle></Uncle>
                </section>
            </div>
        </MyContext.Provider>
    );
};

export default Grand; <h1>Dadu vai</h1>