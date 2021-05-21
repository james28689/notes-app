import "./calendar.css";
import arrow from "../Icons/arrow.svg";

function Calendar( props ) {
    return (
        <div id="calendarView">
            <div class="calendar">
                <div class="calendarButtons">
                    <h2>May 2021</h2>
                    <img src={arrow} alt="<"></img>
                    <img src={arrow} alt=">"></img>
                </div>
                <div class="days">
                    <p>MON</p>
                    <p>TUE</p>
                    <p>WED</p>
                    <p>THU</p>
                    <p>FRI</p>
                    <p>SAT</p>
                    <p>SUN</p>
                    <div class="day"><p>1</p></div>
                    <div class="day"><p>2</p></div>
                    <div class="day"><p>3</p></div>
                    <div class="day"><p>4</p></div>
                    <div class="day"><p>5</p></div>
                    <div class="day"><p>6</p></div>
                    <div class="day"><p>7</p></div>
                    <div class="day"><p>8</p></div>
                    <div class="day"><p>9</p></div>
                    <div class="day"><p>10</p></div>
                    <div class="day"><p>11</p></div>
                    <div class="day"><p>12</p></div>
                    <div class="day"><p>13</p></div>
                    <div class="day"><p>14</p></div>
                    <div class="day"><p>15</p></div>
                    <div class="day"><p>16</p></div>
                    <div class="day"><p>17</p></div>
                    <div class="day"><p>18</p></div>
                    <div class="day"><p>19</p></div>
                    <div class="day"><p>20</p></div>
                    <div class="day selected"><p>21</p></div>
                    <div class="day"><p>22</p></div>
                    <div class="day"><p>23</p></div>
                    <div class="day"><p>24</p></div>
                    <div class="day"><p>25</p></div>
                    <div class="day"><p>26</p></div>
                    <div class="day"><p>27</p></div>
                    <div class="day"><p>28</p></div>
                    <div class="day"><p>29</p></div>
                    <div class="day"><p>30</p></div>
                </div>
            </div>
            <div class="timetable">
            </div>
            <div class="eventsDetails">
            </div>
        </div>
    )
}

export default Calendar;