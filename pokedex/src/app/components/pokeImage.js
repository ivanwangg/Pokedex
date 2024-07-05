import React from 'react';

export default function PokeImage({ json }) {
    if (json == null) {
        return null;
    }

    const {name, sprites} = json;
    const image = sprites && sprites.front_default;

    return (
        <div className = "flex flex-col justify-center items-center w-1/3 h-full">
            <img src = {image} alt = {name} className="w-full h-full object-cover"></img>
        </div>
    );
}