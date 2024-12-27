import React from 'react';

export default function Abilities({ json }) {
    
    let abilities = json && json.types ? json.abilities.map(e => (
        <p>
            {e.ability.name.toUpperCase()}
        </p>
    )):[];

    return (
        <div className="flex flex-row mt-[0.4rem] flex-wrap sm:mt-[1.4rem]">
            {abilities.map((abilityName) => (
                <div className="flex flex-row pr-2 whitespace-nowrap">
                    <il className="bg-green-400 text-white pr-2 pl-2 rounded-md text-sm mb-1">
                      {abilityName}
                    </il>
                </div>
            ))}
        </div>
    );
}
