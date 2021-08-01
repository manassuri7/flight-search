import { useState } from 'react';
import {useSpring, animated} from 'react-spring'
import Cumbancha from '../images/cumbancha.jpeg'

function CheckOutform ({setbuttonDisabled}) {
 
    // Hooks used to store the values of each input
    const [nameInputValue, setNameInputValue] = useState('')
    const [aadhaarInputValue, setAadhaarInputValue] = useState('')
    const [telephoneeInputValue, setTelephoneInputValue] = useState('')
    const [emailInputValue, setEmailInputValue] = useState('')

    // Hook that stores error message that shows when wrong input is entered in checkout form
    const [checkOutFormErrorMessage, setCheckOutFormErrorMessage] = useState(null)

    // Hook that stores regex used to validate checkout form input
    const [regex, setRegex] = useState(
        {
            name: /^[a-zÀ-ú\s]{2,30}$/i,
            aadhaar: /^((?!(0))[0-9]{12})$/g,
            telephone: /^\d{8,20}$/,
            email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        }
    );

    // Function that validates user input against the corresponding regex
    function validateInput (regex, field) {
        if (regex.test(field) === true) {
            return true
        } else {
            return false
        }
    }

    // Hooks that store the classNames of checkOutform and thanksMessage 
    const [checkOutformClassName, setCheckOutformClassName] = useState('checkOutform')
    const [thanksMessageClassName, setThanksMessageClassName] = useState('display-none')

    function handleSubmit (e) {
        e.preventDefault()

        let nameValidation = validateInput(regex.name, nameInputValue)
        let aadhaarValidation = validateInput(regex.aadhaar,aadhaarInputValue)
        let telephoneValidation = validateInput(regex.telephone, telephoneeInputValue)
        let emailValidation = validateInput(regex.email, emailInputValue)

        if (nameValidation === false) {
            setCheckOutFormErrorMessage (<p className="checkOutErrorMessage">Please check the name entered.</p>)
        } else if (aadhaarValidation === false) {
            setCheckOutFormErrorMessage (<p className="checkOutErrorMessage">Please check the Aadhaar No entered.</p>)
        } else if (telephoneValidation === false) {
            setCheckOutFormErrorMessage (<p className="checkOutErrorMessage">Please check the phone number entered.</p>)
        } else if (emailValidation === false) {
            setCheckOutFormErrorMessage (<p className="checkOutErrorMessage">Please check the email entered.</p>)
        } else {
            setCheckOutformClassName('display-none')
            setThanksMessageClassName('thanksMessage')
            setbuttonDisabled(true)
        }
    }

    // Animation props
    const checkOutformAnimationProps = useSpring({opacity: 1, marginRight:0, from: {opacity: 0, marginRight:-10}, delay: 600})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var paperPlaneIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cG9seWxpbmUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBwb2ludHM9IjQ5OC4zMzQsMTkgMzAwLjE0NCwzMDUuMTAzIDI3OS40ODYsMzM0LjkyNSAyNzkuNDg2LDQzNS4wNjUgMzU0Ljc5NiwzNjEuNDYzICAgMzE2LjMzNCwyODkuNjY3ICIgZmlsbD0iI2ZkYmUxNCIgZGF0YS1vcmlnaW5hbD0iI2Y1Yzg2ZSIgY2xhc3M9IiI+PC9wb2x5bGluZT4KPHBvbHlsaW5lIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgcG9pbnRzPSIyMDkuNTA1LDMxMy41MTUgNjQsMjY5IDUwMiwxMCA1MDIsNDAzIDI4MywzMzYgIiBmaWxsPSIjZmRiZTE0IiBkYXRhLW9yaWdpbmFsPSIjZmFlMTk2IiBjbGFzcz0iIj48L3BvbHlsaW5lPgo8cG9seWdvbiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIHBvaW50cz0iMjc5LjQ4Niw0MzUuMDY1IDIxMy4zNTMsMzE0LjY5MyA0OTguMzM0LDE5IDI4NS42MzIsMzI2LjA1MiAiIGZpbGw9IiNmZGJlMTQiIGRhdGEtb3JpZ2luYWw9IiNmNWI5NTUiIGNsYXNzPSIiPjwvcG9seWdvbj4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNNTA2Ljk1NSwxLjMxNGMtMy4xMTktMS43OC02Ljk1NS0xLjc1LTEwLjA0NSwwLjA3OEwzMTMuNjU2LDEwOS43NTZjLTQuNzU0LDIuODExLTYuMzI5LDguOTQzLTMuNTE4LDEzLjY5NyAgYzIuODEsNC43NTMsOC45NDIsNi4zMjgsMTMuNjk3LDMuNTE4bDEzMS40ODItNzcuNzQ5TDIxMC40MTEsMzAzLjMzNUw4OC42MDMsMjY2LjA2OWwxNTguOTY1LTk0ICBjNC43NTQtMi44MTIsNi4zMjktOC45NDQsMy41MTgtMTMuNjk4Yy0yLjgxLTQuNzUzLTguOTQzLTYuMzMtMTMuNjk3LTMuNTE4TDU4LjkxLDI2MC4zOTJjLTMuNDEsMi4wMTctNS4zMDksNS44NTYtNC44NCw5Ljc5MSAgczMuMjE2LDcuMjIxLDcuMDA0LDguMzhsMTQ1LjQ2OSw0NC41MDRMMjcwLjcyLDQzOS44OGMwLjA2NywwLjEyMSwwLjEzNiwwLjIyMywwLjIwNywwLjMxNGMxLjA3MSwxLjc4NiwyLjY3NiwzLjI0NSw0LjY3OCw0LjA4NyAgYzEuMjUzLDAuNTI3LDIuNTcsMC43ODQsMy44NzgsMC43ODRjMi41NjMsMCw1LjA4Ni0wLjk4Niw2Ljk5MS0yLjg0OWw3My43OTQtNzIuMTJsMTM4LjgwNiw0Mi40NjYgIGMwLjk2LDAuMjkzLDEuOTQ1LDAuNDM4LDIuOTI1LDAuNDM4YzIuMTE2LDAsNC4yMDYtMC42NzIsNS45NDgtMS45NjFDNTEwLjQ5Niw0MDkuMTUzLDUxMiw0MDYuMTcsNTEyLDQwM1YxMCAgQzUxMiw2LjQwOSw1MTAuMDc0LDMuMDkzLDUwNi45NTUsMS4zMTR6IE00MTkuNTg0LDExNS4xMkwyNzEuMjY1LDMyOS4yM2MtMS4xNTgsMS42NzMtMS43NzksMy42NTktMS43NzksNS42OTR2NjEuMTcxICBsLTQzLjgyMy03OS43NjVMNDE5LjU4NCwxMTUuMTJ6IE0yODkuNDg2LDQxMS4zMDl2LTYyLjg2N2w0OC45OSwxNC45ODhMMjg5LjQ4Niw0MTEuMzA5eiBNMjk1LjUwMSwzMjkuMzY3TDQ5Miw0NS43MDR2MzQzLjc3OSAgTDI5NS41MDEsMzI5LjM2N3oiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMTY0LjQyMywzNDcuNTc3Yy0zLjkwNi0zLjkwNS0xMC4yMzYtMy45MDUtMTQuMTQzLDBsLTkzLjM1Miw5My4zNTJjLTMuOTA1LDMuOTA1LTMuOTA1LDEwLjIzNywwLDE0LjE0MyAgQzU4Ljg4Miw0NTcuMDI0LDYxLjQ0MSw0NTgsNjQsNDU4YzIuNTU5LDAsNS4xMTgtMC45NzYsNy4wNzEtMi45MjlsOTMuMzUyLTkzLjM1MkMxNjguMzI4LDM1Ny44MTUsMTY4LjMyOCwzNTEuNDgzLDE2NC40MjMsMzQ3LjU3NyAgeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0yNS45MjksNDcxLjkyOWwtMjMsMjNjLTMuOTA1LDMuOTA1LTMuOTA1LDEwLjIzNywwLDE0LjE0M0M0Ljg4Miw1MTEuMDI0LDcuNDQxLDUxMiwxMCw1MTJzNS4xMTgtMC45NzcsNy4wNzEtMi45MjlsMjMtMjMgIGMzLjkwNS0zLjkwNSwzLjkwNS0xMC4yMzcsMC0xNC4xNDNDMzYuMTY1LDQ2OC4wMjUsMjkuODM1LDQ2OC4wMjUsMjUuOTI5LDQ3MS45Mjl6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTEzNS41OCw0OTEuNDFjLTIuNjQxLDAtNS4yMSwxLjA3LTcuMDcsMi45M2MtMS44NiwxLjg2LTIuOTMsNC40My0yLjkzLDcuMDdjMCwyLjYzLDEuMDY5LDUuMjEsMi45Myw3LjA3ICBjMS44NiwxLjg2LDQuNDQsMi45Myw3LjA3LDIuOTNzNS4yMS0xLjA3LDcuMDY5LTIuOTNjMS44Ni0xLjg2LDIuOTMxLTQuNDQsMi45MzEtNy4wN2MwLTIuNjQtMS4wNy01LjIxLTIuOTMxLTcuMDcgIEMxNDAuNzksNDkyLjQ4LDEzOC4yMSw0OTEuNDEsMTM1LjU4LDQ5MS40MXoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMjAyLjkwOSw0MTkuOTM1bC00OS40NDYsNDkuNDQ1Yy0zLjkwNSwzLjkwNS0zLjkwNSwxMC4yMzcsMCwxNC4xNDJjMS45NTMsMS45NTMsNC41MTIsMi45MjksNy4wNzEsMi45MjkgIHM1LjExOC0wLjk3Nyw3LjA3MS0yLjkyOWw0OS40NDYtNDkuNDQ1YzMuOTA1LTMuOTA1LDMuOTA1LTEwLjIzNywwLTE0LjE0MkMyMTMuMTQ4LDQxNi4wMywyMDYuODE4LDQxNi4wMywyMDIuOTA5LDQxOS45MzV6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTM3My41NjIsNDE2LjEzOWwtNDkuNTgsNDkuNThjLTMuOTA1LDMuOTA1LTMuOTA1LDEwLjIzNywwLDE0LjE0M2MxLjk1MywxLjk1Miw0LjUxMiwyLjkyOSw3LjA3MSwyLjkyOSAgczUuMTE4LTAuOTc3LDcuMDcxLTIuOTI5bDQ5LjU4LTQ5LjU4YzMuOTA1LTMuOTA1LDMuOTA1LTEwLjIzNywwLTE0LjE0M0MzODMuNzk4LDQxMi4yMzUsMzc3LjQ2OCw0MTIuMjM1LDM3My41NjIsNDE2LjEzOXoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJNMjc2LjQzLDE1My4zOGMyLjYzLDAsNS4yMS0xLjA2LDcuMDctMi45M2MxLjg1OS0xLjg2LDIuOTMtNC40MywyLjkzLTcuMDZjMC0yLjY0LTEuMDctNS4yMi0yLjkzLTcuMDggIHMtNC40NC0yLjkzLTcuMDctMi45M3MtNS4yMSwxLjA3LTcuMDcsMi45M2MtMS44NTksMS44Ni0yLjkzLDQuNDQtMi45Myw3LjA4YzAsMi42MywxLjA3LDUuMiwyLjkzLDcuMDYgIEMyNzEuMjIsMTUyLjMyLDI3My44LDE1My4zOCwyNzYuNDMsMTUzLjM4eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"

    const [showCumbancha, setShowCumbancha] = useState(false)

    function switchCumbancha() {
        setShowCumbancha(!showCumbancha)
        console.log(showCumbancha)
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <animated.div style={checkOutformAnimationProps} className="checkOutform-container">
            <form action="" method="get" className={checkOutformClassName}>
                <article className="formInput">
                    <label for="name">Full name</label>
                    <input id="name" type="text" className="textBox" onChange={e => setNameInputValue(e.target.value)}/>
                </article>

                <article className="formInput">
                    <label for="aadhaar">Aadhaar No.</label>
                    <input id="aadhaar" type="text" className="textBox" onChange={e => setAadhaarInputValue(e.target.value)}/>
                </article>

                <article className="formInput">
                    <label for="telephone">Phone Number</label>
                    <input id="telephone" type="text" className="textBox" onChange={e => setTelephoneInputValue(e.target.value)}/>
                </article>

                <article className="formInput">
                    <label for="email">Email</label>
                    <input id="email" type="text" className="textBox" onChange={e => setEmailInputValue(e.target.value)}/>
                </article>

                <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Confirm purchase</button>
                {checkOutFormErrorMessage}
            </form>

            <article className={thanksMessageClassName}>
                <h3>Thanks a lot!</h3>
                <img className={showCumbancha === false ? 'paperPlaneIcon' : 'cumbancha'} alt="Paper plane icon." onClick={switchCumbancha} src={showCumbancha === false ? paperPlaneIcon : Cumbancha} />

                <p>Your Flight Booking is Confirmed.</p>
            </article>

        </animated.div>
    )
}

export default CheckOutform