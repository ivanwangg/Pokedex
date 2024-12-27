import React, { useState, useEffect } from "react";

export default function RightStat({ json }) {
    if (json == null) {
        return null;
    }

    const initialStats = json.stats.map(stat => stat.base_stat);

    const [stats, setStats] = useState(initialStats);
    const [statWidths, setStatWidths] = useState(Array(6).fill(255));
    const [bgColors, setBgColors] = useState([
        "rgb(74 222 128)", "", ""  // Base, Min, Max
    ]);
    const [textColors, setTextColors] = useState(["white", "black", "black"]);

    const sixStats = ["HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"];

    // Update stats based on selected mode
    const change = (i) => {
        switch (i) {
            case 0: // Base
                setBgColors(["rgb(74 222 128)", "", ""]);
                setTextColors(["white", "black", "black"]);
                setStats(initialStats);
                setStatWidths(Array(6).fill(255));
                break;
            case 1: // Min
                setBgColors(["", "rgb(74 222 128)", ""]);
                setTextColors(["black", "white", "black"]);
                setStats(initialStats.map((val, idx) => {
                    if (idx === 0) {
                        return Math.floor(val * 2 + 110);
                    } else {
                        return Math.floor((val * 2 + 5) * 0.9);
                    }
                }));
                setStatWidths([714, 526, 614, 535, 614, 504]);
                break;
            case 2: // Max
                setBgColors(["", "", "rgb(74 222 128)"]);
                setTextColors(["black", "black", "white"]);
                setStats(initialStats.map((val, idx) => {
                    if (idx === 0) {
                        return Math.floor(val * 2 + 204);
                    } else {
                        return Math.floor((val * 2 + 99) * 1.1);
                    }
                }));
                setStatWidths([714, 526, 614, 535, 614, 504]);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (json) {
            change(0);
        }
    }, [json]);

    return (
        <div className="flex flex-col w-[19rem] justify-start items-end h-full transform sm:w-[30rem] lg:-skew-y-6 lg:mb-20">
            <div className="flex flex-row justify-between items-center w-full mb-[0.5rem] sm:my-[0.9rem]">
                <button className="w-[8.1rem] font-bold rounded-md sm:text-lg" onClick={() => change(0)} style={{ backgroundColor: bgColors[0], color: textColors[0] }}>
                    Base
                </button>
                <button className="w-[8.1rem] font-bold rounded-md sm:text-lg" onClick={() => change(1)} style={{ backgroundColor: bgColors[1], color: textColors[1] }}>
                    Min
                </button>
                <button className="w-[8.1rem] font-bold rounded-md sm:text-lg" onClick={() => change(2)} style={{ backgroundColor: bgColors[2], color: textColors[2] }}>
                    Max
                </button>
            </div>
            <div className="w-full h-2 bg-blue-400"></div>
            <div className="flex flex-row justify-end items-start w-full">
                <div className="h-full">
                    <ul className="flex flex-col items-end font-bold text-lg">
                        {sixStats.map((statName, index) => (
                            <li className="mt-1 sm:mt-4" key={index}>{statName}</li>
                        ))}
                    </ul>
                </div>
                <div className="pl-5 w-[12rem] sm:w-[17rem]">
                    <ul className="flex flex-col items-start">
                        {stats.map((stat, index) => (
                            <div className="w-full mt-2 mb-1 bg-gray-200 rounded-md sm:mt-5" key={index}>
                                <div
                                    style={{ width: `${(stat / statWidths[index]) * 100}%` }}
                                    className="flex flex-row justify-end items-center h-5 bg-green-400 rounded-md text-white pr-1 text-sm pl-5"
                                >
                                    {stat}
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
