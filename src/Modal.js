import React, { useEffect, useState } from 'react'
import './Modal.css'

function Modal({formClass, handleForm}) {

    // useEffect(()=>{
    //     let email = document.getElementById('email')
    //     // email.onInvalid = function(e) {
    //     //     console.log(e.target.value)
    //     //     let val = e.target.value;
    //     //     if(!String(val).includes('@'))
    //     //         e.target.setCustomValidity("Please include")
    //     // }
    // }, [])

    const [class1, setClass1] = useState('modal one')

    const handleSubmit = (e) => {
        e.preventDefault()
        let phone = e.target['phone'].value
        let dob = e.target['dob'].value
        let phoneValid = true
        let dateValid = true
        if (phone.length != 10) {
            phoneValid = false
        } else {
            phone.split('').forEach(x => {
                if (!(x >= '0' && x <= '9')) {
                    phoneValid = false
                }
            });
        }
        if (!phoneValid) {
            alert('Invalid phone number. Please enter a 10-digit phone number.')
        }
        let date1 = new Date()
        let date2 = new Date(dob)
        if (date1.getFullYear() < date2.getFullYear() || date1.getMonth() < date2.getMonth() || date1.getDate() < date2.getDate()) {
            dateValid = false
        }
        if (!dateValid) {
            alert('Invalid date of birth. Date of birth cannot be in future.')
        }
    }

    return (
        <div className={class1} onClick={() => {
            console.log('clicked')
            handleForm()
            // setClass2('modal-content two')
        }}>
            <h1>User Details Modal</h1>
            <button onClick={(e) => {
                e.stopPropagation()
                // setClass2('modal-content')
                handleForm()
            }
            }>Open Form</button>
            <div className={formClass} onClick={(e) => {
                e.stopPropagation()
                console.log('clicked 2')
            }}>
                <h2>Fill Details</h2>
                <form onSubmit={handleSubmit}>
                    <p>Username:</p>
                    <input id='username' type='text' required />
                    <p>Email Address:</p>
                    <input id='email' type='email' required onInvalid={(e) => {
                        let val = e.target.value;
                        if (val === '') {
                            e.target.setCustomValidity("Please fill out this field")
                        } else if (!String(val).includes('@')) {
                            console.log('true')
                            e.target.setCustomValidity(`Please include an '@' in the email address. '${val}' is missing an '@'.`)
                        } else {
                            console.log('false')
                            e.target.setCustomValidity("")
                        }
                    }} onInput={(e) => e.currentTarget.setCustomValidity('')} />
                    <p>Phone Number:</p>
                    <input id='phone' type='text' required />
                    <p>Date of Birth:</p>
                    <input id='dob' type='date' required />
                    <br />
                    <input className='submit-button' type='submit' value='Submit' />
                </form>
            </div>
        </div>
    )
}

export default Modal