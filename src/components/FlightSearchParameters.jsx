import {useSpring, animated} from 'react-spring'

function FlightSearchParameters ({flexDepartureDate, flexReturnDate, flightSearchParams, roundTrip, formatPlaces}) {

    // Function used to display a different price search parameter depending on the param entered in the search form
    function priceParam () {
        if (flightSearchParams[5] === 1000 || flightSearchParams[5] === '1000') { return 'Up to ₹1000 per person' }
        else if (flightSearchParams[5] === '800') { return 'Up to ₹800 per person' }
        else if (flightSearchParams[5] === '600') { return 'Up to ₹600 per person' }
        else if (flightSearchParams[5] === '400') { return 'Up to ₹400 per person' }
        else { return 'Up to ₹200 per person' }
    }

    // Function used to display a different return date search parameter depending on the type of search entered in the search form
    function returnDateParam () {    
        if (roundTrip === false) { return 'N/A' }
        else if (flexReturnDate) { return 'Flex' }
        else { return flightSearchParams[4]}
    }

    // Animation props
    const searchParamsAnimationProps = useSpring({opacity: 1, marginTop:0, from: {opacity: 0, marginTop:-100, }, delay: 200})

    return (
        <animated.article style={searchParamsAnimationProps} className="flight searchParameters">
            <h2>Search results for:</h2>
            <div className="row row1">
                <p><span className="label">Departure date:</span> {flexDepartureDate ? 'Flex' : flightSearchParams[3]}</p>
                <p><span className="label">Return date:</span> {returnDateParam()}</p>
                <p><span className="label">Source:</span> {flightSearchParams[0] === '' ? 'N/A' : formatPlaces(flightSearchParams[0])}</p>
                <p><span className="label">Destination:</span> {flightSearchParams[0] === '' ? 'N/A' : formatPlaces(flightSearchParams[1])}</p>
            </div>
            <div className="row row2">
                <p><span className="label">Passengers:</span>  {flightSearchParams[2]}</p>
                <p><span className="label">Price:</span> {priceParam()}</p>
            </div>
        </animated.article>

    )
}

export default FlightSearchParameters