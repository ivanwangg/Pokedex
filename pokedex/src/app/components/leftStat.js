import React from "react";
import Types from "./types";
import Abilities from "./abilities";
import Forms from "./forms";

export default function LeftStat({ json }) {
    if (json == null) {
        return null;
    }

    const sixInfo = ["ID", "Height", "Weight", "Type", "Forms", "Abilities"]

    return (
        <div className="flex flex-col justify-start items-end h-full w-[19rem] transform sm:w-[30rem] lg:skew-y-6 lg:mb-20">
            <div className="flex flex-row justify-center items-center w-full mb-[0.5rem] sm:my-[0.9rem]">
                <p className="w-[9rem] font-bold rounded-md bg-green-400 text-white text-center sm:text-lg">
                    Information
                </p>
            </div>
            <div className="w-full h-2 bg-red-400"></div>
            <div className="flex flex-row justify-end items-start w-full">
                <div className="pt-1 sm:pt-0">
                    <ul className="flex flex-col items-end font-bold text-lg">
                        {sixInfo.map((statName, index) => (
                            <li className="sm:mt-4" key={index}>{statName}</li>
                        ))}
                    </ul>
                </div>
                <div className="pl-5 w-full h-full">
                    <ul className="flex flex-col items-start text-md w-full">
                        <il className="mt-[0.44rem] sm:mt-5">#{json.id}</il>
                        <il className="mt-1 sm:mt-5">{json.height * 10} cm / {(json.height * 10 / 30.48).toFixed(2)} ft</il>
                        <il className="mt-1 sm:mt-5">{json.weight / 10} kg / {(json.weight / 10 * 2.205).toFixed(2)} lb</il>
                        <Types json = {json}></Types>
                        <Forms json = {json}></Forms>
                        <Abilities json = {json}></Abilities>
                    </ul>
                </div>
            </div>
        </div>
    )
}
