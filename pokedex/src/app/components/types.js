import React from 'react';

export default function Types({ json }) {
    if (!json || !json.types) {
        return null;
    }

    const typeColors = {
        normal: "rgb(161 161 170)",
        fire: "rgb(248 113 113)",
        water: "rgb(96 165 250)",
        electric: "rgb(253 224 71)",
        grass: "rgb(34 197 94)",
        ice: "rgb(165 243 252)",
        fighting: "rgb(190 18 60)",
        poison: "rgb(192 38 211)",
        ground: "rgb(253 230 138)",
        flying: "rgb(167 139 250)",
        psychic: "rgb(236 72 153)",
        bug: "rgb(190 242 100)",
        rock: "rgb(202 138 4)",
        ghost: "rgb(134 25 143)",
        dragon: "rgb(109 40 217)",
        dark: "rgb(41 37 36)",
        steel: "rgb(212 212 216)",
        fairy: "rgb(251 207 232)"
    };

    return (
        <div className="flex flex-row mt-[0.53rem] sm:mt-6">
            {json.types.map((e, index) => {
                const typeName = e.type.name;
                const color = typeColors[typeName] || "rgb(0 0 0)";
                return (
                    <div className="flex flex-row pr-2 whitespace-nowrap" key={index}>
                        <div
                            className="text-white pr-2 pl-2 rounded-md text-sm"
                            style={{ backgroundColor: color, boxShadow: `0 0 10px 0px ${color}` }}
                        >
                            {typeName.toUpperCase()}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
