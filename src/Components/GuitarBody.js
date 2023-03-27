import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { playGuitarBody } from '../Utils/sounds.js';

function GuitarBody({ currFrets }) {
    const [currStrings, setCurrStrings] = useState([]);
    const [strumDir, setStrumDir] = useState('down');
    const [isMarkerVisible, setIsMarkerVisible] = useState(false);

    function updateStrumDir(e) {
        setStrumDir(() => (e.target.value === 'down' ? 'up' : 'down'));
    }

    function getCurrStrings(string, dir) {
        let strings = [0, 1, 2, 3, 4, 5];
        return strumDir === 'down' ? strings.slice(string) : strings.slice(0, string + 1);
    }

    function handleBodyClick(e) {
        if (!e.target.closest('.strum-dir-btn')) {
            playGuitarBody(currStrings, currFrets);
            setIsMarkerVisible(true);
            setTimeout(() => {
                setIsMarkerVisible(false);
            }, 500);
        }
    }

    function setStringsMarkerStyle(e) {
        if (e.target.className === 'body-string') {
            const startString = +e.target.id.replace('body-string-', '');
            setCurrStrings(getCurrStrings(startString, strumDir));
        }
    }

    function resetStringsMarkerStyle() {
        setCurrStrings([]);
    }

    const stringsMarkerStyle = {
        height: `${(100 / 6) * currStrings.length}%`,
        top: `${strumDir === 'down' ? '0' : 'unset'}`,
        bottom: `${strumDir === 'down' ? 'unset' : '0'}`
    };

    return (
        <div className="guitar-body-container">
            <div
                className="guitar-body"
                onMouseMove={setStringsMarkerStyle}
                onMouseLeave={resetStringsMarkerStyle}
                onClick={handleBodyClick}
            >
                <label className="strum-dir-btn" htmlFor="strum-dir">
                    {strumDir === 'down' ? <FaArrowDown /> : <FaArrowUp />}
                    <input id="strum-dir" type="checkbox" name="strum-dir" value={strumDir} onChange={updateStrumDir} />
                </label>
                <div className="body-strings">
                    <div className="body-string" id="body-string-5"></div>
                    <div className="body-string" id="body-string-4"></div>
                    <div className="body-string" id="body-string-3"></div>
                    <div className="body-string" id="body-string-2"></div>
                    <div className="body-string" id="body-string-1"></div>
                    <div className="body-string" id="body-string-0"></div>
                    {
                        <div
                            id="strings-marker"
                            className={isMarkerVisible ? 'strings-marker visible' : 'strings-marker'}
                            style={stringsMarkerStyle}
                        ></div>
                    }
                </div>
            </div>
        </div>
    );
}

export default GuitarBody;