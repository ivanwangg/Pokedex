import React from "react";
import Types from "./types";
import Abilities from "./abilities";
import Forms from "./forms";

export default function LeftStat({ json }) {
    if (json == null) {
        return null;
    }

    return (
        <div className="flex flex-col justify-start items-end h-full w-1/3 ml-28 transform skew-y-6">
            <div className="flex flex-row justify-center items-center w-full h-14">
                <p className="w-1/3 h-[55%] text-lg font-bold rounded-md bg-green-400 text-white text-center">
                    Information
                </p>
            </div>
            <div className="w-full h-2 bg-red-400"></div>
            <div className="flex flex-row justify-end items-center h-full w-full">
                <div className="h-full">
                    <ul className="flex flex-col items-end font-bold text-lg">
                        <il className = "mt-4">ID</il>
                        <il className = "mt-4">Height</il>
                        <il className = "mt-4">Weight</il>
                        <il className = "mt-4">Abilities</il>
                        <il className = "mt-4">Type</il>
                        <il className = "mt-4">Forms</il>
                    </ul>
                </div>
                <div className="pl-5 w-full h-full">
                    <ul className="flex flex-col items-start text-md">
                        <il className = "mt-5">#{json.id}</il>
                        <il className = "mt-5">{json.height * 10} cm / {(json.height * 10 / 30.48).toFixed(2)} ft</il>
                        <il className = "mt-5">{json.weight / 10} kg / {(json.weight / 10 * 2.205).toFixed(2)} lb</il>
                        <Abilities json = {json}></Abilities>
                        <Types json = {json}></Types>
                        <Forms json = {json}></Forms>
                    </ul>
                </div>
            </div>
        </div>
    )
}
