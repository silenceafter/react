import React from 'react';
import CustomCheckbox from '../components/CustomCheckbox';
import { useSelector } from 'react-redux';

const Profile = () => {
    const pages = useSelector((state) => state.pages);
    return (
        <div>
            Page Profile<br/>
            <CustomCheckbox/>
        </div>
    );
}
export {Profile};
