import { useState } from "react";
import CheckOutForm from "./CheckOutForm";
import { useSpring, animated } from "react-spring";

function CheckOut({
  setSectionShown,
  roundTrip,
  chosenDepartureFlight,
  chosenReturnFlight,
  handleSearchAgain,
  formatPlaces,
}) {
  // Function that returns to AvailableDepartureFlights section when ReturnToSearchResults is pressed
  function handleReturnToDepartureSearchResults(e) {
    e.preventDefault();
    setSectionShown("AvailableDepartureFlights");
  }

  // Function that returns to AvailableReturnFlights section when ReturnToSearchResults is pressed
  function handleReturnToReturnSearchResults(e) {
    e.preventDefault();
    setSectionShown("AvailableReturnFlights");
  }

  // Hook used to disable modify flight button once checkOut form is submitted
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  // Function that displays the data of the return flight selected when the trip chosen is roundTrip
  function showReturnFlight() {
    if (roundTrip) {
      return (
        <animated.article style={retFlightAnimationProps} className="flight">
          <h2>Return flight:</h2>
          <div className="row row1">
            <p>
              <span className="label">Date:</span> {chosenReturnFlight[0]}
            </p>
            <p>
              <span className="label">Source:</span>{" "}
              {formatPlaces(chosenReturnFlight[1])}
            </p>
            <p>
              <span className="label">Destination:</span>{" "}
              {formatPlaces(chosenReturnFlight[2])}
            </p>
          </div>
          <div className="row row2">
            <p>
              <span className="label">Passengers:</span> {chosenReturnFlight[4]}
            </p>
            <p>
              <span className="label">Unit price:</span> ₹{" "}
              {chosenReturnFlight[3].toFixed(2)}
            </p>
            <p>
              <span className="label">Total price:</span> ₹{" "}
              {(chosenReturnFlight[3] * chosenReturnFlight[4]).toFixed(2)}
            </p>
            <button
              className="btn btn-secondary"
              disabled={buttonDisabled}
              onClick={(e) => handleReturnToReturnSearchResults(e)}
            >
              Modify
            </button>
          </div>
        </animated.article>
      );
    } else {
      return null;
    }
  }

  // Function that alternates the recap info depending if the trip selected is one way or round trip.
  function showRecapInfo(infoRequired) {
    if (roundTrip) {
      if (infoRequired === "unitPrice") {
        return (chosenDepartureFlight[3] + chosenReturnFlight[3]).toFixed(2);
      } else if (infoRequired === "totalPrice") {
        return (
          (chosenDepartureFlight[3] + chosenReturnFlight[3]) *
          chosenDepartureFlight[4]
        ).toFixed(2);
      } else if (infoRequired === "extension") {
        return `${chosenDepartureFlight[0]} to ${chosenReturnFlight[0]} (${numberOfDaysBetweenDates(chosenDepartureFlight[0], chosenReturnFlight[0])} days)`;
      }
    } else if (roundTrip === false) {
      if (infoRequired === "unitPrice") {
        return chosenDepartureFlight[3];
      } else if (infoRequired === "totalPrice") {
        return chosenDepartureFlight[3] * chosenDepartureFlight[4];
      } else if (infoRequired === "extension") {
        return "N/A";
      }
    }
  }

  // Function that counts the number of days between the departure and return dates
  const numberOfDaysBetweenDates = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let dayCount = 0;

    while (end >= start) {
      dayCount++;
      start.setDate(start.getDate() + 1);
    }

    return dayCount;
  };

  // Animation props
  const tittleAnimationProps = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -100 },
    delay: 200,
  });
  const depFlightAnimationProps = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: -100 },
    delay: 400,
  });
  const retFlightAnimationProps = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: -100 },
    delay: 600,
  });
  const recapInfoAnimationProps = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: -100 },
    delay: 800,
  });

  return (
    <section className="checkOut-section">
      <animated.h1 style={tittleAnimationProps}>
        Review your flight information and complete the form to confirm your
        purchase.
      </animated.h1>

      <div className="checkOut-container">
        <div className="selectedFlights-container">
          <animated.article style={depFlightAnimationProps} className="flight">
            <h2>Outbound flight:</h2>
            <div className="row row1">
              <p>
                <span className="label">Date:</span> {chosenDepartureFlight[0]}
              </p>
              <p>
                <span className="label">Source:</span>{" "}
                {formatPlaces(chosenDepartureFlight[1])}
              </p>
              <p>
                <span className="label">Destination:</span>{" "}
                {formatPlaces(chosenDepartureFlight[2])}
              </p>
            </div>
            <div className="row row2">
              <p>
                <span className="label">Passengers:</span>{" "}
                {chosenDepartureFlight[4]}
              </p>
              <p>
                <span className="label">Unit price:</span> ₹{" "}
                {chosenDepartureFlight[3].toFixed(2)}
              </p>
              <p>
                <span className="label">Total price:</span> ₹{" "}
                {(chosenDepartureFlight[3] * chosenDepartureFlight[4]).toFixed(
                  2
                )}
              </p>
              <button
                className="btn btn-secondary"
                disabled={buttonDisabled}
                onClick={(e) => handleReturnToDepartureSearchResults(e)}
              >
                Modify
              </button>
            </div>
          </animated.article>

          {showReturnFlight()}

          <animated.article style={recapInfoAnimationProps} className="flight">
            <h2>Summary:</h2>
            <div className="row row1">
              <p>
                <span className="label">Unit price:</span> ₹{" "}
                {showRecapInfo("unitPrice")}
              </p>
              <p>
                <span className="label">Total price:</span> ₹{" "}
                {showRecapInfo("totalPrice")}
              </p>
            </div>
            <div className="row row2">
              <p>
                <span className="label">Extensión:</span>{" "}
                {showRecapInfo("extension")}
              </p>
            </div>
          </animated.article>
        </div>

        <CheckOutForm setbuttonDisabled={setbuttonDisabled} />
      </div>
      <button
        className="btn btn-secondary"
        onClick={(e) => handleSearchAgain(e)}
      >
        Find more flights
      </button>
    </section>
  );
}

export default CheckOut;
