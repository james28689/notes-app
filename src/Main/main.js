import "./Main.css";

import Calendar from "../CalendarView/calendar";
import React, {useEffect, useContext} from 'react';
import {Context} from '../store';

function Main({ children }) {

    const [state, dispatch] = useContext(Context);

    return (
        <div id="Main">

            {state.selected === 0 &&
                <div>

                <h2>
                Notes
                </h2>
                <p>This is the start of a design based off <a href="https://cdn.dribbble.com/users/65090/screenshots/14082104/media/8349b8ac58729f7ef4ae9b784081a824.png">this</a></p>
                </div>
            }

            {state.selected === 1 &&
                <Calendar />
            }
        </div>
    )
}

export default Main;