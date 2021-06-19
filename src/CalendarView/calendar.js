import "./calendar.css";
import arrow from "../Icons/arrow.svg";
import {Context} from '../store';
import {useContext} from "react";

function Calendar( props ) {
    var [state] = useContext(Context);

    var daysInMonth = function(month,year) {
        return new Date(year, month, 0).getDate();
    };

    var days = [];
    for (var i = 1; i < daysInMonth(6, 2021)+1; i++) {
        days.push(<div key={i} className={"day " + ((state.selectedDay === i) ? "selected" : "")}><p>{i}</p></div>);
    }

    return (
        <div id="calendarView">
            <div className="calendar">
                <div className="calendarButtons">
                    <h2>May 2021</h2>
                    <img className="icon" src={arrow} alt="<"></img>
                    <img className="icon" src={arrow} alt=">"></img>
                </div>
                <div className="days">
                    <p>MON</p>
                    <p>TUE</p>
                    <p>WED</p>
                    <p>THU</p>
                    <p>FRI</p>
                    <p>SAT</p>
                    <p>SUN</p>

                    {days}
                </div>
            </div>
            <div className="timetable">
            </div>
            <div className="eventsDetails">
            </div>
        </div>
    )
}

export default Calendar;