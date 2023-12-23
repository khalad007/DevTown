import React from 'react';
import { Link } from 'react-router-dom';

const AvailablePhoneCard = ({ phone }) => {

    const { _id, price, mobilename, OS, memory, processor, type, img } = phone;

    return (
        <div className="card card-compact bg-base-100 shadow-xl my-8">
            <figure><img className="h-56 w-full" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{mobilename}</h2>

                {/* Food quantity */}
                {/* <p className="text-sm text-gray-500 mt-2">Serves <span className="font-bold">{foodQuantity}</span> people</p> */}
                {/* Pick up location */}
                <p className="text-sm mt-2"><span className="font-bold">Price :</span> {price}</p>
                {/* Expired */}
                {/* <p className="text-sm mt-2"><span className="font-bold">Expires on:</span> {new Date(expiredDateTime).toLocaleString()}</p> */}
                {/* Additional Notes */}
                <p className="text-sm mt-2"><span className="font-bold">Type :</span> {type}</p>
                <p className="text-sm mt-2"><span className="font-bold">Operating System :</span> {OS}</p>
                <p className="text-sm mt-2"><span className="font-bold">Memory :</span> {memory}</p>
                <p className="text-sm mt-2"><span className="font-bold">Processor :</span> {processor}</p>
                
            </div>

        </div>
    );
};

export default AvailablePhoneCard;
