import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const AvailablePhone = () => {
    const [phones, setPhones] = useState([]);
    const [filterOption, setFilterOption] = useState("type");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true); // New state for loading indicator

    useEffect(() => {
        setLoading(true); // Set loading to true when starting the fetch

        fetch("https://phone-server-gilt.vercel.app/allphone")
            .then((res) => res.json())
            .then((data) => {
                setPhones(data);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []);

    const filteredPhones = phones.filter((phone) =>
        phone[filterOption].toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
        setSearchTerm("");
    };

    return (
        <div>
            <h1 className="text-center mt-14 text-5xl font-bold">
                Featured <span className="text-[#4F6F52]">Phones</span>
            </h1>

            <div className="my-4 flex items-center space-x-4 bg-gradient-to-r from-[#4F6F52] via-[#557959] to-[#e7ede7] text-white rounded-lg p-4 shadow-md ">
                <label htmlFor="filterOption" className="text-xl font-semibold">
                    Filter By:
                </label>
                <select
                    id="filterOption"
                    onChange={handleFilterChange}
                    value={filterOption}
                    className="p-2 rounded-md bg-white text-gray-800"
                >
                    <option value="type">Type</option>
                    <option value="processor">Processor</option>
                    <option value="OS">OS</option>
                    <option value="memory">Memory</option>
                    <option value="mobilename">Mobile Name</option>
                </select>

                {filterOption !== "type" && (
                    <input
                        type="text"
                        placeholder={`Search by ${filterOption}`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 rounded-md bg-white text-gray-800"
                    />
                )}
            </div>

            {loading ? (
                <span className="loading loading-spinner loading-lg"></span>
            ) : (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
                    {filteredPhones.map((phone) => (
                        <PhoneCard key={phone._id} phone={phone}></PhoneCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AvailablePhone;
