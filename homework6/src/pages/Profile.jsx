import React from 'react';
import CustomCheckbox from '../components/CustomCheckbox';
import { shallowEqual, useSelector } from 'react-redux';
import { getProfile } from '../store/profileSelectors.js';

const Profile = () => {
    const pages = useSelector(getProfile, shallowEqual);//((state) => state.pages);
    return (
        <div>
            Page Profile<br/>
            <CustomCheckbox/>
        </div>
    );
}
export {Profile};
