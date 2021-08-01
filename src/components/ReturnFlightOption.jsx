import { useSpring, animated } from "react-spring";

function ReturnFlightOption({
  data,
  origin,
  destination,
  price,
  setSectionShown,
  setChosenReturnFlight,
  passengers,
  totalPrice,
  formatPlaces,
}) {
  // Function that executes when Select flight button is pressed
  function handleSelectFlight(e) {
    e.preventDefault();
    setChosenReturnFlight([data, origin, destination, price, passengers]);
    setSectionShown("CheckOut");
  }

  // Animation props
  const returnFlightOptionAnimationProps = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -100 },
    delay: 600,
  });

  return (
    <animated.div
      style={returnFlightOptionAnimationProps}
      className="flightOption-div"
    >
      <article className="flight">
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
            <span className="label">Total price:</span> ₹{" "}
            {totalPrice.toFixed(2)}
          </p>
          <button
            className="btn btn-primary"
            onClick={(e) => handleSelectFlight(e)}
          >
            Select return flight
          </button>
        </div>
      </article>
    </animated.div>
  );
}

export default ReturnFlightOption;
