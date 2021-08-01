import { useState } from 'react';
import {useSpring, animated} from 'react-spring'
import FlightSearchParameters from './FlightSearchParameters'
import DepartureFlightOption from './DepartureFlightOption'
import ErrorMessageNoAvailableFlights from './ErrorMessageNoAvailableFlights'

function AvailableDepartureFlights ({flightSearchParams, searchDepartureFlights, setSectionShown, setChosenDepartureFlight, chosenDepartureFlight, roundTrip, formatPlaces, handleSearchAgain, flexDepartureDate, flexReturnDate, searchReturnFlights, setPreloadNextSection}) {

    let desiredTotalPrice = flightSearchParams[5]
    
    // Hook used to hold the results of the departure flight search done
    const [availableDepartureFlightsList, setAvailableDepartureFlightsList] = useState(searchDepartureFlights(
        flightSearchParams[0], flightSearchParams[1], flightSearchParams[2], flightSearchParams[3], flightSearchParams[5])
        );

    // Variables used to hold only the search results that are not in the past and are beneath the max price selected
    let today = new Date()
    let yesterday = today.setDate(today.getDate() - 1)
    let checkedFlightsList = availableDepartureFlightsList.filter(item => (new Date(item.data) > yesterday && item.price <= desiredTotalPrice))

        if (roundTrip) {
        let minDeparturePrice = Math.min.apply(Math, checkedFlightsList.map(item => item.price))
        let possibleReturnFlights = searchReturnFlights(flightSearchParams[1], flightSearchParams[0], flightSearchParams[2], flightSearchParams[4], flightSearchParams[5])
        let minReturnPrice = Math.min.apply(Math, possibleReturnFlights.map(item => item.price))
            if (minDeparturePrice + minReturnPrice > desiredTotalPrice) {
                checkedFlightsList = []
            }
    }

    // Function that displays the flight search results
    const showFlights = () => {
        if (checkedFlightsList.length === 0) {
            return <ErrorMessageNoAvailableFlights/>
        } else {
            return checkedFlightsList.map((item) => (
                <article>
                    <DepartureFlightOption data={item.data} origin={item.origin} destination={item.destination} price={item.price} totalPrice={item.price*flightSearchParams[2]} passengers={flightSearchParams[2]} setSectionShown={setSectionShown} setChosenDepartureFlight={setChosenDepartureFlight} chosenDepartureFlight={chosenDepartureFlight} roundTrip={roundTrip} formatPlaces={formatPlaces} setPreloadNextSection={setPreloadNextSection}/>
                </article>
                )
            )
        }
    }

    // Function used to display a different search tittle wether the trip desired is one way or round
    function typeOfSearchTittle () {
        if (roundTrip) { return null }
        else { return null }
    }

    // Animation props
    const searchTittleAnimationProps = useSpring({opacity: 1, from: {opacity: 0}, delay: 0})

    return (
            <div className='searchResult' key='searchResult'>

                <FlightSearchParameters flightSearchParams={flightSearchParams} flexDepartureDate={flexDepartureDate} flexReturnDate={flexReturnDate} roundTrip={roundTrip} formatPlaces={formatPlaces}/>

                <animated.h1 style={searchTittleAnimationProps}>Flight {typeOfSearchTittle()} Details:</animated.h1>
                {showFlights()}
                <button className='btn btn-secondary' onClick={(e) => handleSearchAgain(e)}>Find more flights</button>

            </div>
    )
}

export default AvailableDepartureFlights