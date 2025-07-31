import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(term)
    }

    const changeHandle = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={onFormSubmit}>
                <input className="border-black border-solid rounded-lg border-2 m-3 p-4" onChange={changeHandle} value={term} />
            </form>
        </div>
    )
}

export default SearchBar;
