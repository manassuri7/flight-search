import { useSpring, animated } from "react-spring";

function DepartureFlightOption({
  data,
  origin,
  destination,
  price,
  passengers,
  setSectionShown,
  setChosenDepartureFlight,
  roundTrip,
  totalPrice,
  formatPlaces,
  setPreloadNextSection,
}) {
  // Function that executes when Select flight button is pressed
  function handleSelectFlight(e) {
    e.preventDefault();
    setChosenDepartureFlight([data, origin, destination, price, passengers]);

    if (roundTrip) {
      setSectionShown("Preloader");
      setPreloadNextSection("AvailableReturnFlights");
    } else {
      setSectionShown("CheckOut");
    }
  }

  function selectFlightBtnContent() {
    if (roundTrip) {
      return (
        <button
          className="btn btn-primary"
          onClick={(e) => handleSelectFlight(e)}
        >
          Select outbound flight
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-primary"
          onClick={(e) => handleSelectFlight(e)}
        >
          Select flight
        </button>
      );
    }
  }

  // Animation props
  const departureFlightOptionAnimationProps = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -100 },
    delay: 600,
  });

  return (
    <animated.article
      style={departureFlightOptionAnimationProps}
      className="flight"
    >
      <div className="row row1">
        <p>
          <span className="label">Date:</span> {data}
        </p>
        <p>
          <span className="label">Source:</span> {formatPlaces(origin)}
        </p>
        <p>
          <span className="label">Destination:</span>{" "}
          {formatPlaces(destination)}
        </p>
      </div>
      <div className="row row2">
        <p>
          <span className="label">Passengers:</span> {passengers}
        </p>
        <p>
          <span className="label">Unit price:</span> ₹ {price}
        </p>
        <p>
          <span className="label">Total price:</span> ₹ {totalPrice.toFixed(2)}
        </p>
        {selectFlightBtnContent()}
      </div>
    </animated.article>
  );
}

export default DepartureFlightOption;
