import React, { useContext } from 'react';
import { MyContext } from '../Grand/Grand';

const Myself = () => {
    const ring = useContext(MyContext)
    return (
        <div>
            <h3>mui nije</h3>
            <p>gift:{ring}</p>
        </div>
    );
};

export default Myself;