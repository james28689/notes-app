import React, {useEffect, useContext} from 'react';
import {Context} from '../store';
import "./Tab.css";

function Tab(props) {

    const [state, dispatch] = useContext(Context);


    return (
        <div>

            { props.items.map((item, key) => {
                return (
                    <div key={key} className={`tab ${key === state.selected ? "selected" : ""}`} onClick={() => {dispatch({type: 'SET_PAGE', payload: key});}}>
                        <img src={item.icon} alt=""/>
                        <p>
                            { item.name }
                        </p>
                    </div>
                )
            })
            }

        </div>
    )
}

export default Tab;