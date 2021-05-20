import "./Main.css";

import Search from "../Search/search";
import React, {useEffect, useContext} from 'react';
import {Context} from '../store';

function Main({ children }) {

    const [state, dispatch] = useContext(Context);

    return (
        <div id="Main">

            {state.selected === 0 &&
                <h2>
                Notes
                </h2>
            }

            {state.selected === 1 &&
                <h2>
                    Calendar
                </h2>
            }

            <p>This is the start of a design based off <a href="https://cdn.dribbble.com/users/65090/screenshots/14082104/media/8349b8ac58729f7ef4ae9b784081a824.png">this</a></p>
        </div>
    )
}

export default Main;