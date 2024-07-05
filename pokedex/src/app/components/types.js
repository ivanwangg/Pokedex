import React from 'react';

export default function Types({ json }) {
    
    let types = json && json.types ? json.types.map(e => (
        <p>
            {e.type.name.toUpperCase()}
        </p>
    )):[];

    let color = null

    function change(index) {
        switch(json.types[index].type.name) {
            case "normal": color = "rgb(161 161 170)"
                break
            case "fire": color = "rgb(248 113 113)"
                break
            case "water": color = "rgb(96 165 250)"
                break
            case "electric": color = "rgb(253 224 71)"
                break
            case "grass": color = "rgb(34 197 94)"
                break
            case "ice": color = "rgb(165 243 252)"
                break
            case "fighting": color = "rgb(190 18 60)"
                break
            case "poison": color = "rgb(192 38 211)"
                break
            case "ground": color = "rgb(253 230 138)"
                break
            case "flying": color = "rgb(167 139 250)"
                break
            case "psychic": color = "rgb(236 72 153)"
                break
            case "bug": color = "rgb(190 242 100)"
                break
            case "rock": color = "rgb(202 138 4)"
                break
            case "ghost": color = "rgb(134 25 143)"
                break
            case "dragon": color = "rgb(109 40 217)"
                break
            case "dark": color = "rgb(41 37 36)"
                break
            case "steel": color = "rgb(212 212 216)"
                break
            case "fairy": color = "rgb(251 207 232)"
                break
            default:
                color = "rgb(0 0 0)"
        }
    }

    return (
        <div className="flex flex-row mt-6">
            {types.map((typeName, index) => (
                <div className="flex flex-row pr-2 whitespace-nowrap">
                    {change(index)}
                    <il className="text-white pr-2 pl-2 rounded-md text-sm" style={{ backgroundColor: color, boxShadow: `0 0 10px 0px ${color}`}}>
                      {typeName}
                    </il>
                </div>
            ))}
        </div>
    );
}
