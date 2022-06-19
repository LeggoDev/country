import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = ({ darkMode }) => {
    const [countries, setCountries] = useState([])
    const [text, setText] = useState('')
    const [allRegions, setAllRegions] = useState('')
    const [region, setRegion] = useState('')
    const [isPressed, setIsPressed] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const countriesResponse = await response.json();
            setCountries(countriesResponse)
            const tempTab = []
            for (let country of countriesResponse) tempTab.push(country.region)
            setAllRegions([...new Set(tempTab)])
            setLoading(false)
        }

        fetchCountries()
    }, [])

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleClick = (continent) => {
        setRegion(continent)
        setIsPressed(false)
    }

    return (
        <main className='Home' style={{ background: darkMode ? '#202C36' : '#F2F2F2' }}>
            <section className='filter'>
                <form onSubmit={(e) => e.preventDefault()} style={{ background: darkMode ? '#2B3844' : '#ffffff' }}>
                    <img src={darkMode ? '../img/search-dark.svg' : '../img/search.svg'} alt="search" />
                    <input className={darkMode ? 'dark-placeholder' : 'light-placeholder'} style={{ color: darkMode ? '#ffffff' : '#848484' }} type="text" placeholder='Search for a country…' value={text} onChange={handleChange} />
                </form>
                <div className='select-container'>
                    <div className='select' style={{ background: darkMode ? '#2B3844' : '#ffffff' }} onClick={() => setIsPressed(!isPressed)}>
                        <span style={{ color: darkMode ? '#ffffff' : '#111517' }}>Filter by Region</span>
                        <img style={{ transform: isPressed ? 'rotate(0deg)' : 'rotate(-90deg)' }} src={darkMode ? '../img/arrow-dark.svg' : '../img/arrow.svg'} alt="arrow" />
                    </div>
                    {isPressed && (
                        <div className='select-list' style={darkMode ? { background: '#2B3844', color: '#ffffff' } : { background: '#ffffff', color: '#111517' }}>
                            <ul>
                                {allRegions.map((continent, index) => (
                                    <li
                                        key={index}
                                        style={{ marginBottom: index < allRegions.length - 1 ? '0.8vh' : '' }}
                                        onClick={() => handleClick(continent)}
                                    >
                                        {continent}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>
            <section className='flags'>
                {loading && <h2 style={{ textAlign: 'center', color: darkMode ? ' #ffffff' : '#111517' }}>Loading countries...</h2>}
                {countries
                    .filter(country => country.name.common.includes(text))
                    .filter(country => region ? country.region === region : country.region)
                    .map((country, index) => {
                        return (
                            <div className='country' style={{ background: darkMode ? '#2B3844' : '#ffffff' }} key={index}>
                                <img src={country.flags.svg} alt="flag" />
                                <section>
                                    <h2 style={{ color: darkMode ? '#ffffff' : '#111517' }}>{country.name.common}</h2>
                                    <ul>
                                        <li style={{ color: darkMode ? '#ffffff' : '#111517' }}><span>Population:</span> {country.population.toLocaleString()}</li>
                                        <li style={{ color: darkMode ? '#ffffff' : '#111517' }}><span>Region:</span> {country.region}</li>
                                        <li style={{ color: darkMode ? '#ffffff' : '#111517' }}><span>Capital:</span> {country.capital}</li>
                                    </ul>
                                </section>
                            </div>
                        )
                    })}
            </section>
        </main>
    )
}

export default Home

/*

<Link to={`/${country.name.common.toLowerCase()}`} key={index} state={country}>
</Link>

*/