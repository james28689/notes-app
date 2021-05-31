import "./calendar.css";
import arrow from "../Icons/arrow.svg";

function Calendar( props ) {
    return (
        <div id="calendarView">
            <div className="calendar">
                <div className="calendarButtons">
                    <h2>May 2021</h2>
                    <img src={arrow} alt="<"></img>
                    <img src={arrow} alt=">"></img>
                </div>
                <div className="days">
                    <p>MON</p>
                    <p>TUE</p>
                    <p>WED</p>
                    <p>THU</p>
                    <p>FRI</p>
                    <p>SAT</p>
                    <p>SUN</p>
                    <div className="day"><p>1</p></div>
                    <div className="day"><p>2</p></div>
                    <div className="day"><p>3</p></div>
                    <div className="day"><p>4</p></div>
                    <div className="day"><p>5</p></div>
                    <div className="day"><p>6</p></div>
                    <div className="day"><p>7</p></div>
                    <div className="day"><p>8</p></div>
                    <div className="day"><p>9</p></div>
                    <div className="day"><p>10</p></div>
                    <div className="day"><p>11</p></div>
                    <div className="day"><p>12</p></div>
                    <div className="day"><p>13</p></div>
                    <div className="day"><p>14</p></div>
                    <div className="day"><p>15</p></div>
                    <div className="day"><p>16</p></div>
                    <div className="day"><p>17</p></div>
                    <div className="day"><p>18</p></div>
                    <div className="day"><p>19</p></div>
                    <div className="day"><p>20</p></div>
                    <div className="day"><p>21</p></div>
                    <div className="day"><p>22</p></div>
                    <div className="day"><p>23</p></div>
                    <div className="day"><p>24</p></div>
                    <div className="day"><p>25</p></div>
                    <div className="day"><p>26</p></div>
                    <div className="day"><p>27</p></div>
                    <div className="day"><p>28</p></div>
                    <div className="day"><p>29</p></div>
                    <div className="day"><p>30</p></div>
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