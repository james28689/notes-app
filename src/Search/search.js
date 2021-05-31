import "./search.css";
import search from "../Icons/search.svg";

function Search() {
    return (
        <div className="search">
            {/* <img src={search} alt=""/> */}
            <input placeholder="Search"></input>
        </div>
    )
}

export default Search;