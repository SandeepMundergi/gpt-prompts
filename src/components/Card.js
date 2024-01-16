import React, { useState, useEffect } from 'react';
import data from '../output.json'
const Card = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        setJsonData(data);
    }, []);
    return (
        <div className='text-light container'>
            {jsonData && (
                <div className='d-flex flex-wrap gap-1'>
                    {Object.keys(jsonData).map(category => (
                        <div key={category} className="card mb-3" style={{ width: "20rem" }}>
                            <div className="card-body">
                                <h2 className="card-title">{category}</h2>
                                {/* <ul className="list-group">
                          {jsonData[category].map(prompt => (
                            <li key={prompt} className="list-group-item">{prompt}</li>
                          ))}
                        </ul> */}
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Card