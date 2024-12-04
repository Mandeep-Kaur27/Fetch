import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { Form, Input, Button, Checkbox } from 'semantic-ui-react';
import ReactTooltip from "react-tooltip";
import Swal from 'sweetalert2';
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa6";
import FetchLogo from "../assets/Fetch-logo.png";
import { SubmitIcon } from "../svgIcon/svg";

const SERVICE_ID = "service_vba6q7k";
const TEMPLATE_ID = "template_lhmteko";
const USER_ID = "POtCyAWG-0jIp4g8S";


const Popup = props => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    html: `<div class="img-outer"></div>
                    <p class="tagline mt-4"> A member of the Fetch team will get back to you shortly.<br> Have a nice day! <br>Team Fetch</p>
                     <h4 class="mt-4 green-text"><i>Helping your pets live their best lives</i></h4> `
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()

    };
    const options1 = [
        { key: 'opt1', label: 'Running', value: 'option1' },
        { key: 'opt2', label: 'Walking', value: 'option2' },
        { key: 'opt3', label: 'Training', value: 'option3' },
        { key: 'opt4', label: 'Grooming', value: 'option4' },
        { key: 'opt5', label: 'Sitting', value: 'option5' },
        { key: 'opt6', label: 'Vet Visits', value: 'option6' },
    ];
    const options2 = [
        { key: 'opt7', label: 'Running', value: 'option7' },
        { key: 'opt8', label: 'Walking', value: 'option8' },
        { key: 'opt9', label: 'Training', value: 'option9' },
        { key: 'opt10', label: 'Grooming', value: 'option10' },
        { key: 'opt11', label: 'Sitting', value: 'option11' },
        { key: 'opt12', label: 'Vet Visits', value: 'option12' },

    ];

    const [selectedOptions, setSelectedOptions] = useState({});

    const handleCheckboxChange = (e, { value, checked }) => {
        setSelectedOptions((prevState) => ({
            ...prevState,
            [value]: checked,
        }));
    };
    const [value, setValue] = useState('');

    return (
        <div className="popup-box">
            <div className="container-fluid h-100 d-flex align-items-center">
                <div className="row">
                    <div className="box green-bg p-5 text-center">
                        <div className="popup-wrappper">
                            <span className="close-icon" onClick={props.handleClose}><FaTimes /></span>
                            <div className="col-md-12">
                                <img className="small-img" alt='fetch_logo' src={FetchLogo} />
                                <h3 className=" mb-1">Thank you for your interest in Fetch!</h3>
                                <p className="tagline mt-5 mb-4">Please take a moment to answer the questions below and I will reach out to you shortly.</p>

                            </div>
                            <Form onSubmit={handleOnSubmit}>
                                <div className="row">
                                    <h5 className="poppins-font medium-font d-flex justify-content-start mb-3">Pet Owner Information</h5>
                                </div>
                                <div className="row">
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-name'
                                        control={Input}
                                        name='name'
                                        placeholder='Name*'
                                        required
                                        type="text"
                                    />
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-phone'
                                        control={Input}
                                        name='Phone'
                                        placeholder='Cell Phone*'
                                        required
                                        type="PhoneInput"
                                    />
                                </div>
                                <div className="row">
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-email'
                                        control={Input}
                                        name='email'
                                        placeholder='Your Email*'
                                        required
                                        type="email"
                                    />
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-phone'
                                        control={Input}
                                        name='Town'
                                        placeholder='Town where you live*'
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className="row">
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-comp'
                                        control={Input}
                                        name='Reach'
                                        placeholder='Best way to reach you'
                                        type="text"
                                    />
                                    <Form.Field className="col-sm-6 mb-4"
                                        id='form-input-control-city'
                                        control={Input}
                                        name='Heard'
                                        placeholder='How you heard about Fetch'
                                        required
                                        type="text"
                                        data-tip="How you heard about Fetch"
                                        data-event="click"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5 className="poppins-font medium-font d-flex justify-content-start mb-3">Dog Information</h5>
                                        <Form.Field className="col-sm-12 mb-4"
                                            id='form-input-control-name'
                                            control={Input}
                                            name='name'
                                            placeholder='Name*'
                                            required
                                            type="text"
                                        />
                                        <Form.Field className="col-sm-12 mb-4"
                                            id='form-input-control-service'
                                            control={Input}
                                            name='Breed'
                                            placeholder='Breed(s) (if known)'
                                            type="text"
                                        />
                                        <Form.Field className="col-sm-12">
                                            {options1.map((option) => (
                                                <label key={option.key} className="checkbox custom-checkbox col-sm-6 d-flex justify-content-start mb-4">
                                                    <input
                                                        type="checkbox"
                                                        value={option.value}
                                                        checked={!!selectedOptions[option.value]}
                                                        onChange={(e) => handleCheckboxChange(e, { value: option.value, checked: e.target.checked })}
                                                    />
                                                    <span className="checkmark"></span>
                                                    {option.label}
                                                </label>
                                            ))}
                                        </Form.Field>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5 className="poppins-font medium-font d-flex justify-content-start mb-3">Dog Information (second pup)</h5>
                                        <Form.Field className="col-sm-12 mb-4"
                                            id='form-input-control-name'
                                            control={Input}
                                            name='name'
                                            placeholder='Name*'
                                            required
                                            type="text"
                                        />
                                        <Form.Field className="col-sm-12 mb-4"
                                            id='form-input-control-service'
                                            control={Input}
                                            name='Breed'
                                            placeholder='Breed(s) (if known)'
                                            type="text"
                                        />
                                        <Form.Field className="col-sm-12">
                                            {options2.map((option) => (
                                                <label key={option.key} className="checkbox custom-checkbox col-sm-6 d-flex justify-content-start mb-4">
                                                    <input
                                                        type="checkbox"
                                                        value={option.value}
                                                        checked={!!selectedOptions[option.value]}
                                                        onChange={(e) => handleCheckboxChange(e, { value: option.value, checked: e.target.checked })}
                                                    />
                                                    <span className="checkmark"></span>
                                                    {option.label}
                                                </label>
                                            ))}
                                        </Form.Field>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="poppins-font medium-font d-flex justify-content-start mb-3">Additional information you’d like to share (including if you have more than two dogs).</h5>
                                    </div>
                                    <div className="col-sm-12 text-field">
                                        <textarea
                                            className="custom-textarea d-flex w-80 mb-4"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            placeholder="Enter your text here..."
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="poppins-font medium-font d-flex justify-content-start mb-3">Feel free to call, text or email too.</h5>
                                    </div>
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <p className='d-flex info-wrap'><span><FaUser /></span>Jonathan Masland </p>
                                    </div>
                                    <div className="col-sm-3 d-flex align-items-center">
                                        <p className='d-flex info-wrap'><span><FaPhone /></span>603-486-1711 (m) </p>
                                    </div>
                                    <div className="col-sm-6 d-flex align-items-center">
                                        <p className='d-flex info-wrap'><span><FaEnvelope /></span>jonathan@fetchpetservice.com </p>
                                    </div>
                                </div>

                                <Button type='submit' className="btn submit common-btn mt-5 mb-5"><SubmitIcon /></Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div >
            {/* <ReactTooltip place="bottom" effect="solid" globalEventOff="click" /> */}
        </div >

    );

};

export default Popup;