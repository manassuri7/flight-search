import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useSpring, animated} from 'react-spring'

function InitialForm ({dataset, setFlightSearchParams, setSectionShown, setRoundTrip, roundTrip, formatPlaces, flexDepartureDate, setFlexDepartureDate, flexReturnDate, setFlexReturnDate, desiredFlexDepartureDates, setDesiredFlexDepartureDates, desiredFlexReturnDates, setDesiredFlexReturnDates, desiredOrigin, setDesiredOrigin, desiredDestination, setDesiredDestination, desiredPassengers, setDesiredPassengers, desiredDepartureDate, setDesiredDepartureDate, desiredReturnDate, setDesiredReturnDate, desiredTotalPrice, setDesiredTotalPrice}) {

    // Variables with functions that identify the different possible origins and destinations for the flights.
    const distinctOrigins = [...new Set(dataset.map(item => item.origin))]
    const distinctDestinations = [...new Set(dataset.map(item => item.destination))]

    // Function that shows/hides the return date selector when the oneWay/roundTrip switch is clicked
    function switchIsDisabled () {
        if (roundTrip === false) { return 'formInput-display-none' }
        else { return 'formInput-display-block' }
    }

    // Functions that switch the className of switchTittles when the buttons are clicked
    function switchClass1 (state) {
        if  (state) { return 'gray' } 
        else { return null }
    }

    function switchClass2 (state) {
        if  (state) { return null } 
        else { return 'gray' }
    }
    
    // Hook used to show error message when form fields are uncompleted
    const [errorMessage, setErrorMessage] = useState(null)

    // Function used to format departure and return dates
    function formatDate (date) {
        let d = date
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

        return `${ye}-${mo}-${da}`
    }

    // Function used to check if the departure date is in the past
    function checkDepartureDate (departureDate) {
        let depDate = new Date(departureDate).setHours(0,0,0,0)
        let today = new Date().setHours(0,0,0,0)
    
        return (depDate >= today)
    }
    
    // Function used to check if the departure date is previous to the return date
    function checkDepartureAndReturnDates (departureDate, returnDate) {
        let depDate = new Date(departureDate)
        let retDate = new Date(returnDate)
    
        return (retDate >= depDate)
    }

    // Function that searchs flexible departure dates
    function searchFlexDepartureDates () {
        setDesiredFlexDepartureDates([])
        let possibleDepartureDates = [] 
        for (let i = 0; i < 4; i++) {
            const departureDate = new Date(desiredDepartureDate)
            possibleDepartureDates.push(formatDate(departureDate.setDate(departureDate.getDate() + i)));
        }
        for (let i = 1; i < 4; i++) {
            const departureDate = new Date(desiredDepartureDate)
            possibleDepartureDates.push(formatDate(departureDate.setDate(departureDate.getDate() - i)));
        }
        setDesiredFlexDepartureDates(possibleDepartureDates)
    }

    // Function that searchs flexible return dates
    function searchFlexReturnDates () {
        setDesiredFlexReturnDates([])
        let possibleReturnDates = [] 
        for (let i = 0; i < 4; i++) {
            const returnDate = new Date(desiredReturnDate)
            possibleReturnDates.push(formatDate(returnDate.setDate(returnDate.getDate() + i)));
        }
        for (let i = 1; i < 4; i++) {
            const returnDate = new Date(desiredReturnDate)
            possibleReturnDates.push(formatDate(returnDate.setDate(returnDate.getDate() - i)));
        }
        setDesiredFlexReturnDates(possibleReturnDates)
    }

    // Function that takes actions when submit button is clicked
    function handleSubmit (e) {
        e.preventDefault()

        // Shows error messages if the dates entered have errors
        if (checkDepartureDate (desiredDepartureDate) === false) {
            setErrorMessage('Departure date cannot be in the past.')

        } else if (roundTrip && (checkDepartureAndReturnDates(desiredDepartureDate, desiredReturnDate) === false)) {
            setErrorMessage('The Return date cannot be earlier than the Departure date.')

        } else {
            // Passes different params to the searchFlight function depending if the dates entered are exact or flex
            if (flexDepartureDate === false && flexReturnDate === false){
                setFlightSearchParams([desiredOrigin, desiredDestination, desiredPassengers, formatDate(desiredDepartureDate), formatDate(desiredReturnDate), desiredTotalPrice])

            } else if (flexDepartureDate && flexReturnDate === false) {
                searchFlexDepartureDates()
                setFlightSearchParams([desiredOrigin, desiredDestination, desiredPassengers, desiredFlexDepartureDates, formatDate(desiredReturnDate), desiredTotalPrice])

            } else if (flexDepartureDate === false && flexReturnDate) {
                searchFlexReturnDates()
                setFlightSearchParams([desiredOrigin, desiredDestination, desiredPassengers, formatDate(desiredDepartureDate), desiredFlexReturnDates, desiredTotalPrice])

            } else {
                searchFlexDepartureDates()
                searchFlexReturnDates()
                setFlightSearchParams([desiredOrigin, desiredDestination, desiredPassengers, desiredFlexDepartureDates, desiredFlexReturnDates, desiredTotalPrice])
            }
            setSectionShown('Preloader')
        }
    }

    // Animation props
    const sectionAnimationProps = useSpring({opacity: 1, from: {opacity: 0}, delay: 100})
    const formAnimationProps = useSpring({opacity: 1, marginTop:0, from: {opacity: 0, marginTop:-100, }, delay: 300})

    return (

                    
        <animated.section style={sectionAnimationProps} className="formContainer">
            <animated.form style={formAnimationProps} action="" method="get" className="initialForm">

                <div className="inputs-div inputs-div-row1">
                    <article className="formInput">
                        <label for="desiredOrigin">source</label>
                        <select id="desiredOrigin" className="selectBox" onChange={e => setDesiredOrigin(e.target.value)}>
                        
                            <option value=""></option>
                            {distinctOrigins.map(origin => (
                                <option key={origin} value={origin}>{formatPlaces(origin)}</option>
                            ))}

                        </select>
                    </article>

                    <article className="formInput">
                        <label for="desiredDestination">Destination</label>
                        <select id="desiredDestination" className="selectBox" onChange={e => setDesiredDestination(e.target.value)}>

                            <option value=""></option>
                            {distinctDestinations.map(destination => (
                                <option key={destination} value={destination}>{formatPlaces(destination)}</option>
                            ))}

                        </select>
                    </article>

                    <article className="formInput">
                        <label for="desiredPassengers">Passengers</label>
                        <select id="desiredPassengers" className="selectBox" onChange={e => setDesiredPassengers(e.target.value)}>
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                        </select>
                    </article>
                    
                    <article className="switch-container" >
                        <p className="switchTittle"><span className={switchClass1(roundTrip)}>One Way</span> | <span className={switchClass2(roundTrip)}>Round Trip</span></p>
                        <label className="switch" >
                            <input type="checkbox" onClick={(e) => setRoundTrip(!roundTrip)}/>
                            <span className="slider round" />
                        </label>
                    </article>
                </div>

                <div className="inputs-div inputs-div-row2">
                    <article className="formInput">
                        <label for="desiredDepartureDate">Departure date</label>
                        <DatePicker id="desiredDepartureDate" className="selectBox" dateFormat="yyyy-MM-dd" selected={desiredDepartureDate} onChange={date => setDesiredDepartureDate(date)} />

                        <div className="switch-container small-switch-container" >
                            <p className="smallSwitchTittle"><span className={switchClass1(flexDepartureDate)}>Exact search</span> | <span className={switchClass2(flexDepartureDate)}>Flexible search</span></p>
                            <label className="switch" >
                                <input type="checkbox" onClick={(e) => setFlexDepartureDate(!flexDepartureDate)}/>
                                <span className="slider round" />
                            </label>
                        </div>
                    </article>

                    <article className={switchIsDisabled()}>
                        <div className="labelAndSelector-container">
                            <label for="desiredReturnDate" className="desiredReturnDate-label">Return date</label>
                            <DatePicker id="desiredReturnDate" className="selectBox" dateFormat="yyyy-MM-dd" selected={desiredReturnDate} onChange={date => setDesiredReturnDate(date)} />
                        </div>
                        <div className="switch-container small-switch-container" >
                            <p className="smallSwitchTittle"><span className={switchClass1(flexReturnDate)}>Exact search</span> | <span className={switchClass2(flexReturnDate)}>Flexible search</span></p>
                            <label className="switch" >
                                <input type="checkbox" onClick={(e) => setFlexReturnDate(!flexReturnDate)}/>
                                <span className="slider round" />
                            </label>
                        </div>
                    </article>

                    <article className="formInput">
                        <label for="desiredTotalPrice">Total price per person</label>
                        <select id="desiredTotalPrice" className="selectBox" onChange={e => setDesiredTotalPrice(e.target.value)}>
                            <option value="200">Up to ₹200</option>
                            <option value="400">Up to ₹400</option>
                            <option value="600">Up to ₹600</option>
                            <option value="800">Up to ₹800</option>
                            <option value="1000" selected>Up to ₹1000</option>
                        </select>
                    </article>

            </div>

                <div className='btnAndError-div'>
                    <p>{errorMessage}</p>
                    <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Search Flights</button>
                </div>
            </animated.form>
        </animated.section>
    )
}

export default InitialForm