import './App.scss';
import { useState } from 'react';
import dataset from './dataset.json'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import InitialForm from './components/InitialForm'
import AvailableDepartureFlights from './components/AvailableDepartureFlights'
import AvailableReturnFlights from './components/AvailableReturnFlights'
import CheckOut from './components/CheckOut'
import Preloader from './components/Preloader'


function App() {

    // Hook used to display and hide the different sections of the app
    const [sectionShown,setSectionShown] = useState('InitialForm');

    // Function used to display and hide the different sections of the app
    const showSection = () => {
      if (sectionShown === 'InitialForm') {
          return (<InitialForm dataset={dataset} setFlightSearchParams={setFlightSearchParams} setSectionShown={setSectionShown} setRoundTrip={setRoundTrip} roundTrip={roundTrip} formatPlaces={formatPlaces} flexDepartureDate={flexDepartureDate} setFlexDepartureDate={setFlexDepartureDate} flexReturnDate={flexReturnDate} setFlexReturnDate={setFlexReturnDate} desiredFlexDepartureDates={desiredFlexDepartureDates} setDesiredFlexDepartureDates={setDesiredFlexDepartureDates} desiredFlexReturnDates={desiredFlexReturnDates} setDesiredFlexReturnDates={setDesiredFlexReturnDates} desiredOrigin={desiredOrigin} setDesiredOrigin={setDesiredOrigin} desiredDestination={desiredDestination} setDesiredDestination={setDesiredDestination} desiredPassengers={desiredPassengers} setDesiredPassengers={setDesiredPassengers} desiredDepartureDate={desiredDepartureDate} setDesiredDepartureDate={setDesiredDepartureDate} desiredReturnDate={desiredReturnDate} setDesiredReturnDate={setDesiredReturnDate} desiredTotalPrice={desiredTotalPrice} setDesiredTotalPrice={setDesiredTotalPrice}/>)
      } else if (sectionShown === 'AvailableDepartureFlights') {
          return <AvailableDepartureFlights flightSearchParams={flightSearchParams} searchDepartureFlights={searchDepartureFlights} setSectionShown={setSectionShown} setChosenDepartureFlight={setChosenDepartureFlight} chosenDepartureFlight={chosenDepartureFlight} roundTrip={roundTrip} setRoundTrip={setRoundTrip} formatPlaces={formatPlaces} handleSearchAgain={handleSearchAgain} flexDepartureDate={flexDepartureDate} flexReturnDate={flexReturnDate} searchReturnFlights={searchReturnFlights} setPreloadNextSection={setPreloadNextSection}/>
      } else if (sectionShown === 'AvailableReturnFlights') {
          return <AvailableReturnFlights flightSearchParams={flightSearchParams} setSectionShown={setSectionShown} setChosenReturnFlight={setChosenReturnFlight} chosenReturnFlight={chosenReturnFlight} chosenDepartureFlight={chosenDepartureFlight} setRoundTrip={setRoundTrip} roundTrip={roundTrip} formatPlaces={formatPlaces} handleSearchAgain={handleSearchAgain} searchReturnFlights={searchReturnFlights} flexDepartureDate={flexDepartureDate} flexReturnDate={flexReturnDate}/>
      } else if (sectionShown === 'CheckOut') {
          return <CheckOut flightSearchParams={flightSearchParams} setSectionShown={setSectionShown} roundTrip={roundTrip} chosenDepartureFlight={chosenDepartureFlight} chosenReturnFlight={chosenReturnFlight} handleSearchAgain={handleSearchAgain} formatPlaces={formatPlaces} />
      } else if (sectionShown === 'Preloader') {
          return <Preloader setSectionShown={setSectionShown} preloadNextSection={preloadNextSection}/>
      }
    }

    // Hook that stores the next section the preloader will show
    const [preloadNextSection,setPreloadNextSection] = useState('AvailableDepartureFlights');

    // Function that returns to InitialForm section when ReturnToSearchResults is pressed
    function handleSearchAgain(e) {
        e.preventDefault();
        setRoundTrip(false)
        setSectionShown('InitialForm')
        setDesiredOrigin('')
        setDesiredDestination('')
        setDesiredPassengers(1)
        setDesiredDepartureDate(new Date())
        setDesiredReturnDate(new Date())
        setDesiredTotalPrice(1000)
        setFlightSearchParams([])
        setFlexDepartureDate(false)
        setFlexReturnDate(false)
        setPreloadNextSection('AvailableDepartureFlights')
    }

    // Hooks that store the options selected in the form
    const [desiredOrigin, setDesiredOrigin] = useState('');
    const [desiredDestination, setDesiredDestination] = useState('');
    const [desiredPassengers, setDesiredPassengers] = useState(1);
    const [desiredDepartureDate, setDesiredDepartureDate] = useState(new Date());
    const [desiredReturnDate, setDesiredReturnDate] = useState(new Date())
    const [desiredTotalPrice, setDesiredTotalPrice] = useState(1000);

    // Hook used to check if the flight desired is round or one way
    const [roundTrip, setRoundTrip] = useState(false);

    // Hook that contains flight search parameters entered in InitialForm
    const [flightSearchParams,setFlightSearchParams] = useState([]);

    // Hooks that stores the click count on the flexible/exact search switches
    const [flexDepartureDate, setFlexDepartureDate] = useState(false);
    const [flexReturnDate, setFlexReturnDate] = useState(false);

    // Hook used to store the array of possible departure dates when the flex search option is selected
    const [desiredFlexDepartureDates, setDesiredFlexDepartureDates] = useState([]);
    // Hook used to store the array of possible return dates when the flex search option is selected
    const [desiredFlexReturnDates, setDesiredFlexReturnDates] = useState([]);

    // Function that filters the flights database with the search parameters entered in InitialForm
    function searchDepartureFlights (origin, destination, passengers, departureDate, price) {

        // Cases with uncertain origin and certain destination
        if (!origin && destination && !flexDepartureDate) {
            return dataset.filter(o => (o.destination === destination && o.availability >= passengers && o.data === departureDate && o.price <= price))

        } else if (!origin && destination && flexDepartureDate) {
            return (dataset.filter(o => (o.destination === destination && o.availability >= passengers && o.price <= price &&
                (o.data === desiredFlexDepartureDates[0] ||
                o.data === desiredFlexDepartureDates[1] ||
                o.data === desiredFlexDepartureDates[2] ||
                o.data === desiredFlexDepartureDates[3] ||
                o.data === desiredFlexDepartureDates[4] ||
                o.data === desiredFlexDepartureDates[5] ||
                o.data === desiredFlexDepartureDates[6] ||
                o.data === desiredFlexDepartureDates[7])
                )))
            
        // Cases with certain origin and uncertain destination
        } else if (origin && !destination && !flexDepartureDate) {
            return dataset.filter(o => (o.origin === origin && o.availability >= passengers && o.data === departureDate && o.price <= price))
        
        } else if (origin && !destination && flexDepartureDate) {
            return (dataset.filter(o => (o.origin === origin && o.availability >= passengers && o.price <= price &&
                (o.data === desiredFlexDepartureDates[0] ||
                o.data === desiredFlexDepartureDates[1] ||
                o.data === desiredFlexDepartureDates[2] ||
                o.data === desiredFlexDepartureDates[3] ||
                o.data === desiredFlexDepartureDates[4] ||
                o.data === desiredFlexDepartureDates[5] ||
                o.data === desiredFlexDepartureDates[6] ||
                o.data === desiredFlexDepartureDates[7])
                )))

        // Cases with uncertain origin and uncertain destination
        } else if (!origin && !destination && !flexDepartureDate) {
            return dataset.filter(o => (o.availability >= passengers && o.data === departureDate && o.price <= price))
            
        } else if (!origin && !destination && flexDepartureDate) {
            return (dataset.filter(o => (o.availability >= passengers && o.price <= price && 
                (o.data === desiredFlexDepartureDates[0] ||
                o.data === desiredFlexDepartureDates[1] ||
                o.data === desiredFlexDepartureDates[2] ||
                o.data === desiredFlexDepartureDates[3] ||
                o.data === desiredFlexDepartureDates[4] ||
                o.data === desiredFlexDepartureDates[5] ||
                o.data === desiredFlexDepartureDates[6] ||
                o.data === desiredFlexDepartureDates[7])
                )))
        
        // Cases with certain origin and certain destination
        } else if (origin && destination && !flexDepartureDate) {
            return dataset.filter(o => (o.origin === origin && o.destination === destination && o.availability >= passengers && o.data === departureDate && o.price <= price))
         
        } else if (origin && destination && flexDepartureDate) {
            return (dataset.filter(o => (o.origin === origin && o.destination === destination && o.availability >= passengers && o.price <= price &&
                (o.data === desiredFlexDepartureDates[0] ||
                o.data === desiredFlexDepartureDates[1] ||
                o.data === desiredFlexDepartureDates[2] ||
                o.data === desiredFlexDepartureDates[3] ||
                o.data === desiredFlexDepartureDates[4] ||
                o.data === desiredFlexDepartureDates[5] ||
                o.data === desiredFlexDepartureDates[6] ||
                o.data === desiredFlexDepartureDates[7])
                )))

        }
    }

    // Function that filters the return flights database with the search parameters entered in InitialForm
    function searchReturnFlights (origin, destination, passengers, departureDate, price) {

        // Cases with uncertain origin and certain destination
        if (!origin && destination && !flexDepartureDate) {
            return dataset.filter(o => (o.destination === destination && o.availability >= passengers && o.data === departureDate && o.price <= price))

        } else if (!origin && destination && flexDepartureDate) {
            return (dataset.filter(o => (o.destination === destination && o.availability >= passengers && o.price <= price &&
                (o.data === desiredFlexReturnDates[0] ||
                o.data === desiredFlexReturnDates[1] ||
                o.data === desiredFlexReturnDates[2] ||
                o.data === desiredFlexReturnDates[3] ||
                o.data === desiredFlexReturnDates[4] ||
                o.data === desiredFlexReturnDates[5] ||
                o.data === desiredFlexReturnDates[6] ||
                o.data === desiredFlexReturnDates[7])
                )))
        
        // Cases with certain origin and uncertain destination
        } else if (origin && !destination && !flexDepartureDate) {
            return dataset.filter(o => (o.origin === origin && o.availability >= passengers && o.data === departureDate && o.price <= price))
        
        } else if (origin && !destination && flexDepartureDate) {
            return (dataset.filter(o => (o.origin === origin && o.availability >= passengers && o.price <= price &&
                (o.data === desiredFlexReturnDates[0] ||
                o.data === desiredFlexReturnDates[1] ||
                o.data === desiredFlexReturnDates[2] ||
                o.data === desiredFlexReturnDates[3] ||
                o.data === desiredFlexReturnDates[4] ||
                o.data === desiredFlexReturnDates[5] ||
                o.data === desiredFlexReturnDates[6] ||
                o.data === desiredFlexReturnDates[7])
                )))
        
        // Cases with uncertain origin and uncertain destination
        } else if (!origin && !destination && !flexDepartureDate) {
            return dataset.filter(o => (o.availability >= passengers && o.data === departureDate && o.price <= price))
            
        } else if (!origin && !destination && flexDepartureDate) {
            return (dataset.filter(o => (o.availability >= passengers && o.price <= price && 
                (o.data === desiredFlexReturnDates[0] ||
                o.data === desiredFlexReturnDates[1] ||
                o.data === desiredFlexReturnDates[2] ||
                o.data === desiredFlexReturnDates[3] ||
                o.data === desiredFlexReturnDates[4] ||
                o.data === desiredFlexReturnDates[5] ||
                o.data === desiredFlexReturnDates[6] ||
                o.data === desiredFlexReturnDates[7])
                )))

        // Cases with certain origin and certain destination
        } else if (origin && destination && !flexDepartureDate) {
            return dataset.filter(o => (o.origin === origin && o.destination === destination && o.availability >= passengers && o.data === departureDate && o.price <= price))

        } else if (origin && destination && flexDepartureDate) {
            return (dataset.filter(o => (o.origin === origin && o.destination === destination && o.availability >= passengers && o.price <= price &&
                (o.data === desiredFlexReturnDates[0] ||
                o.data === desiredFlexReturnDates[1] ||
                o.data === desiredFlexReturnDates[2] ||
                o.data === desiredFlexReturnDates[3] ||
                o.data === desiredFlexReturnDates[4] ||
                o.data === desiredFlexReturnDates[5] ||
                o.data === desiredFlexReturnDates[6] ||
                o.data === desiredFlexReturnDates[7])
                )))
        }
    }

    // Hooks that contain the parameters of the flight chosen by the user
    const [chosenDepartureFlight,setChosenDepartureFlight] = useState([]);
    const [chosenReturnFlight,setChosenReturnFlight] = useState([]);

    // Function that assigns a format to the departure and destination places
    function formatPlaces (place) {
        if (place === 'MUM') { return 'MUM - Mumbai' }
        else if (place === 'BLR') { return 'BLR - Bangalore' }
        else if (place === 'HYD') { return 'HYD - Hyderabad' }
        else if (place === 'DEL') { return 'DEL - Delhi' } 
    }
    
  return (
    <div className="App">
        <Navbar sectionShown={sectionShown} setSectionShown={setSectionShown} handleSearchAgain={handleSearchAgain}/>
        <div className="mainContainer">
            {showSection()}
        </div>
        <Footer handleSearchAgain={handleSearchAgain}/>
    </div>
  );
}

export default App;