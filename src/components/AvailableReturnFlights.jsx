import { useState } from 'react';
import {useSpring, animated} from 'react-spring'
import FlightSearchParameters from './FlightSearchParameters'
import ReturnFlightOption from './ReturnFlightOption'
import ErrorMessageNoAvailableFlights from './ErrorMessageNoAvailableFlights'

function AvailableReturnFlights ({flightSearchParams, setSectionShown, setChosenReturnFlight, chosenReturnFlight, chosenDepartureFlight, formatPlaces, handleSearchAgain, searchReturnFlights, flexDepartureDate, flexReturnDate, roundTrip}) {
    
    let desiredTotalPrice = flightSearchParams[5]
    let departureFlightPrice = chosenDepartureFlight[3]

    // Hook used to store the results of the return flight search done
    const [availableReturnFlightsList, setAvailableReturnFlightsList] = useState(searchReturnFlights(chosenDepartureFlight[2], chosenDepartureFlight[1], chosenDepartureFlight[4], flightSearchParams[4], flightSearchParams[5]));

    // Variable used to hold only the search results that are in the same date or after the date of the departure flight and are beneath the max price selected
    let checkedFlightsList = availableReturnFlightsList.filter(item => (new Date(item.data) >= new Date(chosenDepartureFlight[0]) && item.price + departureFlightPrice <= desiredTotalPrice))
    
    // Function that displays the flight search results
    const showFlights = () => {
        if (checkedFlightsList.length === 0) {
            return <ErrorMessageNoAvailableFlights/>
        } else {
            return checkedFlightsList.map((item) => (
                <article className='flightOption'>
                    <ReturnFlightOption data={item.data} origin={item.origin} destination={item.destination} price={item.price} totalPrice={item.price*flightSearchParams[2]} passengers={flightSearchParams[2]} setSectionShown={setSectionShown} setChosenReturnFlight={setChosenReturnFlight} chosenReturnFlight={chosenReturnFlight} formatPlaces={formatPlaces}/>
                </article>
              ))
        }
    }

    // Function that returns to AvailableDepartureFlights section when ReturnToSearchResults is pressed
    function handleReturnToDepartureSearchResults(e) {
        e.preventDefault();
        setSectionShown('AvailableDepartureFlights')
    }

    // Animation props
    const flightSelectedAnimationProps = useSpring({opacity: 1, marginTop:0, from: {opacity: 0, marginTop:-100, }, delay: 200})
    const tittleAnimationProps = useSpring({opacity: 1, from: {opacity: 0}, delay: 0})
    const searchTittleAnimationProps = useSpring({opacity: 1, from: {opacity: 0}, delay: 0})

    return (
        <div className='searchResult'>
            <FlightSearchParameters flightSearchParams={flightSearchParams} flexDepartureDate={flexDepartureDate} flexReturnDate={flexReturnDate} roundTrip={roundTrip} formatPlaces={formatPlaces}/>

            <animated.h2 style={tittleAnimationProps}>Selected outbound flight:</animated.h2>
            <animated.article style={flightSelectedAnimationProps} className="flight flightSelected">
                <div className="row row1">
                    <p><span className="label">Date:</span> {chosenDepartureFlight[0]}</p>
                    <p><span className="label">Source:</span> {formatPlaces(chosenDepartureFlight[1])}</p>
                    <p><span className="label">Destination:</span> {formatPlaces(chosenDepartureFlight[2])}</p>
                </div>
                <div className="row row2">
                    <p><span className="label">Passengers:</span>  {chosenDepartureFlight[4]}</p>
                    <p><span className="label">Unit price:</span> ₹ {chosenDepartureFlight[3]}</p>
                    <p><span className="label">Total price:</span> ₹ {(chosenDepartureFlight[4]*chosenDepartureFlight[3]).toFixed(2)}</p>
                    <button className="btn btn-secondary" onClick={(e) => handleReturnToDepartureSearchResults(e)}>Modify</button>
                </div>
            </animated.article>

            <animated.h1 style={searchTittleAnimationProps}>Return flights available:</animated.h1>
            {showFlights()}
            <button className='btn btn-secondary' onClick={(e) => handleSearchAgain(e)}>Find more flights</button>
        </div>
    )
}

export default AvailableReturnFlights