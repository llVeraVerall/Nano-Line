import React from 'react';
import './quare.scss';
import { initialData } from '../initial-data'; 

export const Quare = () => {
    // const state = props.initialData;
    return (
        <div>
            {initialData.map((data, key) => {
                 return (
                    <div key={key}>{data.blockOrder}</div>
            )})}
            <div className='quare-wrapp'></div>
        </div>
    )
}

