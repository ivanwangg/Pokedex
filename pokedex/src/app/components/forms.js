import React from 'react';

export default function Forms({ json }) {
    
    let forms = json && json.types ? json.forms.map(e => (
        <p>
            {e.name.toUpperCase()}
        </p>
    )):[];

    return (
        <div className="flex flex-row mt-6">
            {forms.map((formName) => (
                <div className="flex flex-row pr-2 whitespace-nowrap">
                    <il className="bg-green-400 text-white pr-2 pl-2 rounded-md text-sm">
                      {formName}
                    </il>
                </div>
            ))}
        </div>
    );
}
