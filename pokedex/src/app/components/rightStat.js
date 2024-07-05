import React, {useState, useEffect} from "react";

export default function RightStat({ json }) {
    if (json == null) {
        return null;
    }
    const [bgColor1, setBgColor1] = useState('rgb(74 222 128)');
    const [textColor1, setTextColor1] = useState('white');
    const [bgColor2, setBgColor2] = useState('');
    const [textColor2, setTextColor2] = useState('black');
    const [bgColor3, setBgColor3] = useState('');
    const [textColor3, setTextColor3] = useState('black');

    const stat1 = json.stats[0].base_stat
    const stat2 = json.stats[1].base_stat
    const stat3 = json.stats[2].base_stat
    const stat4 = json.stats[3].base_stat
    const stat5 = json.stats[4].base_stat
    const stat6 = json.stats[5].base_stat

    let [stat1Val, setStat1Val] = useState(stat1);
    let [stat2Val, setStat2Val] = useState(stat2);
    let [stat3Val, setStat3Val] = useState(stat3);
    let [stat4Val, setStat4Val] = useState(stat4);
    let [stat5Val, setStat5Val] = useState(stat5);
    let [stat6Val, setStat6Val] = useState(stat6);

    const [stat1Width, setStat1Width] = useState(255);
    const [stat2Width, setStat2Width] = useState(255);
    const [stat3Width, setStat3Width] = useState(255);
    const [stat4Width, setStat4Width] = useState(255);
    const [stat5Width, setStat5Width] = useState(255);
    const [stat6Width, setStat6Width] = useState(255);

    useEffect(() => {
        change(0)
    },[json])
    
    function change(i) {
        switch(i) {
            case 0:
                setBgColor1("rgb(74 222 128)")
                setTextColor1("white")
                setBgColor2("")
                setTextColor2("black")
                setBgColor3("")
                setTextColor3("black")
                setStat1Val(stat1)
                setStat2Val(stat2)
                setStat3Val(stat3)
                setStat4Val(stat4)
                setStat5Val(stat5)
                setStat6Val(stat6)
                setStat1Width(255)
                setStat2Width(255)
                setStat3Width(255)
                setStat4Width(255)
                setStat5Width(255)
                setStat6Width(255)
                break;
            case 1:
                setBgColor1("")
                setTextColor1("black")
                setBgColor2("rgb(74 222 128)")
                setTextColor2("white")
                setBgColor3("")
                setTextColor3("black")
                setStat1Val(Math.floor(stat1 * 2 + 110))
                setStat2Val(Math.floor(((stat2 * 2 + 5) * 0.9)))
                setStat3Val(Math.floor(((stat3 * 2 + 5) * 0.9)))
                setStat4Val(Math.floor(((stat4 * 2 + 5) * 0.9)))
                setStat5Val(Math.floor(((stat5 * 2 + 5) * 0.9)))
                setStat6Val(Math.floor(((stat6 * 2 + 5) * 0.9)))
                setStat1Width(714)
                setStat2Width(526)
                setStat3Width(614)
                setStat4Width(535)
                setStat5Width(614)
                setStat6Width(504)
                break;
            case 2:
                setBgColor1("")
                setTextColor1("black")
                setBgColor2("")
                setTextColor2("black")
                setBgColor3("rgb(74 222 128)")
                setTextColor3("white")
                setStat1Val(stat1 * 2 + 204)
                setStat2Val(Math.floor(((stat2 * 2 + 99) * 1.1)))
                setStat3Val(Math.floor(((stat3 * 2 + 99) * 1.1)))
                setStat4Val(Math.floor(((stat4 * 2 + 99) * 1.1)))
                setStat5Val(Math.floor(((stat5 * 2 + 99) * 1.1)))
                setStat6Val(Math.floor(((stat6 * 2 + 99) * 1.1)))
                setStat1Width(714)
                setStat2Width(526)
                setStat3Width(614)
                setStat4Width(535)
                setStat5Width(614)
                setStat6Width(504)
                break;
        }
    }

    return (
        <div className="flex flex-col h-full w-1/3 mr-28 transform -skew-y-6">
            <div className="flex flex-row justify-between items-center w-full h-14">
                <button className="w-1/4 h-[55%] text-lg font-bold rounded-md ml-10" onClick={() => change(0)} style={{ backgroundColor: bgColor1, color: textColor1 }}>
                    Base
                </button>
                <button className="w-1/4 h-[55%] text-lg font-bold rounded-md" onClick={() => change(1)} style={{ backgroundColor: bgColor2, color: textColor2 }}>
                    Min
                </button>
                <button className="w-1/4 h-[55%] text-lg font-bold rounded-md" onClick={() => change(2)} style={{ backgroundColor: bgColor3, color: textColor3 }}>
                    Max
                </button>
            </div>
            <div className="w-full h-2 bg-blue-400"></div>
            <div className="flex flex-row justify-end items-center h-full w-full">
                <div className="w-1/4 h-full">
                    <ul className="flex flex-col items-end font-bold text-lg">
                        <il className = "mt-4">HP</il>
                        <il className = "mt-4">Attack</il>
                        <il className = "mt-4">Defense</il>
                        <il className = "mt-4">Sp. Attack</il>
                        <il className = "mt-4">Sp. Defense</il>
                        <il className = "mt-4">Speed</il>
                    </ul>
                </div>
                <div className="pl-5 w-[60%] h-full ">
                    <ul className="flex flex-col items-start">
                        <div className="w-full h-5 mt-5 bg-gray-200 rounded-md">
                            <div style={{ width: `${(stat1Val / stat1Width) * 100}%`}} className="flex flex-row justify-end items-center h-5 bg-green-400 rounded-md text-white pr-1 text-sm pl-5">{stat1Val}</div>
                        </div>
                        <div className="w-full h-5 mt-6 bg-gray-200 rounded-md">
                            <div style={{ width: `${(stat2Val / stat2Width) * 100}%`}} className="flex flex-row justify-end items-center h-5 bg-green-400 rounded-md text-white pr-1 text-sm pl-5">{stat2Val}</div>
                        </div>
                        <div className="w-full h-5 mt-6 bg-gray-200 rounded-md">
                            <div style={{ width: `${(stat3Val / stat3Width) * 100}%`}} className="flex flex-row justify-end items-center h-5 bg-green-400 rounded-md text-white pr-1 text-sm pl-5">{stat3Val}</div>
                        </div>
                        <div className="w-full h-5 mt-6 bg-gray-200 rounded-md">
                            <div style={{ width: `${(stat4Val / stat4Width) * 100}%`}} className="flex flex-row justify-end items-center h-5 bg-green-400 rounded-md text-white pr-1 text-sm pl-5">{stat4Val}</div>
                        </div>
                        <div className="w-full h-5 mt-6 bg-gray-200 rounded-md">
                            <div style={{ width: `${(stat5Val / stat5Width) * 100}%`}} className="flex flex-row justify-end items-center h-5 bg-green-400 rounded-md text-white pr-1 text-sm pl-5">{stat5Val}</div>
                        </div>
                        <div className="w-full h-5 mt-6 bg-gray-200 rounded-md">
                            <div style={{ width: `${(stat6Val / stat6Width) * 100}%`}} className="flex flex-row justify-end items-center h-5 bg-green-400 rounded-md text-white pr-1 text-sm pl-5">{stat6Val}</div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
