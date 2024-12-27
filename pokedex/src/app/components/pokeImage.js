import React from 'react';

export default function PokeImage({ json }) {
    if (json == null) {
        return null;
    }

    const {name, sprites} = json;
    const image = sprites && sprites.front_default;

    return (
        <div>
            <img src={image} alt={name} className="w-[11rem] mx-2 sm:w-[20rem]"></img>
        </div>
    );
}