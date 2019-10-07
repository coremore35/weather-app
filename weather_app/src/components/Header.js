import React from 'react'

function Header() {
    return (
        <div>
            <h1>Weather App</h1>
            <input type="text" name="search" placeholder="zip code" />
            <input type="submit" />
        </div>

    )
}

export default Header