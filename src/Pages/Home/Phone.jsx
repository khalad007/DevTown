import { useEffect, useState } from "react";
// import AllPhone from "./PhoneCard";
import { Link } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch('https://phone-server-gilt.vercel.app/phone')
        .then(res => res.json())
        .then(data => setPhones(data))
    })

    return (
        <div >
            <h1 className="text-center mt-14 text-5xl font-bold">Featured <span className="text-[#4F6F52]">Phones</span></h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 " >
                {
                    phones.map(phone => <PhoneCard
                        key={phone._id}
                        phone={phone}
                    ></PhoneCard>)
                }
            </div>
            <div className="text-center my-10">
                <Link to="availablePhone">
                    <button className="bg-[#4F6F52] text-white btn rounded  hover:bg-ghost">Show All Phone</button>
                </Link>

            </div>
        </div>
    );
};

export default Phone;

