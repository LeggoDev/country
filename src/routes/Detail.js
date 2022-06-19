import React from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

const Detail = ({ darkMode }) => {
    const navigate = useNavigate()
    const location = useLocation();
    const country = location.state

    console.log(country)

    return (
        <main className='Detail' style={{ background: darkMode ? '#202C36' : '#F2F2F2' }}>
            <button onClick={() => navigate(-1)} style={{ background: darkMode ? '#2B3844' : '#ffffff' }}>
                <img src={darkMode ? '../img/back-arrow-dark.svg' : '../img/back-arrow.svg'} alt="back-arrow" />
                <span style={{ color: darkMode ? '#ffffff' : '#848484' }}>Back</span>
            </button>
            <section>
                <img src={country.flags.svg} alt={country.name.common} />
                <div>
                    <h2>{country.name.common}</h2>
                    <div className='informations'>
                        <ul>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                        </ul>
                    </div>
                    <div className='border-countries'>
                        <h3>Border Countries: </h3>
                        <ul>{country.borders.map((element, index) => <li style={{ marginRight: index < country.borders.length - 1 ? '0.6vw' : '' }} key={index}>{element}</li>)}</ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Detail