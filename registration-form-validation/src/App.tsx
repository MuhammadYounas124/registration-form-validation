import React, { useState } from "react";
import "../public/dist/css/adminlte.min.css"; // Ensure the CSS file is correctly linked
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    graduationYear: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    email: "",
    phonePart1: "",
    phonePart2: "",
    phonePart3: "",
    schoolId: "",
    isAgree: false,
    gender: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    graduationYear: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    email: "",
    phone: "",
    schoolId: "",
    isAgree: "",
    gender: "",
  });

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //These are event handlers used to update the formData state when users interact with input fields.
    //Each handler is specific to a field and updates its corresponding value in the formData object using the setFormData function.
    setFormData({ ...formData, firstName: e.target.value });

    //When the user types in the firstName field, this function updates formData.
    //firstName with the new value from the input field (e.target.value)//React’s controlled components pattern uses 
    //e.target.value to capture user input and update the state dynamically.
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, lastName: e.target.value }); //e.target.value e(means the event object which 
    //contained detailed about event)triiged(thehtml element that trigged the event)
    //The current value of the form element (like an <input>, <textarea>, or <select>).

  };

  const handleGraduationYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, graduationYear: e.target.value });
  };

  const handleStreetAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, streetAddress: e.target.value });
  };

  const handleAddressLine2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, addressLine2: e.target.value });
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, city: e.target.value });
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, state: e.target.value });
  };

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, postalCode: e.target.value });
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, country: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePhonePart1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phonePart1: e.target.value });
  };

  const handlePhonePart2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phonePart2: e.target.value });
  };

  const handlePhonePart3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phonePart3: e.target.value });
  };

  const handleSchoolIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, schoolId: e.target.value });
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement |HTMLSelectElement >) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, isAgree: e.target.checked });
  };

  const validateForm = (): boolean => {
    let formIsValid = true;
    let newErrors = { ...errors };

    // Add validation for all fields
    if (!formData.firstName) {//Initializes a formIsValid flag as true.
      newErrors.firstName = "First Name is required";// Creates a newErrors object to store validation error messages for each field.
      formIsValid = false;//Updates the errors state with newErrors.
      //Returns formIsValid:
      //true: If all validations pass.
     // false: If any field fails validation.
    } else {
      newErrors.firstName = "";
    }

    if (!formData.lastName) { // If a field is empty or invalid, the corresponding error message is added to newErrors,
      // and formIsValid is set to false.If valid, the error message for the field is cleared.
      newErrors.lastName = "Last Name is required"; 
      formIsValid = false;
    } else {
      newErrors.lastName = "";
    }

    if (!formData.graduationYear) {
      newErrors.graduationYear = "Graduation Year is required";
      formIsValid = false;
    } else {
      newErrors.graduationYear = "";
    }

    if (!formData.streetAddress) {// Text Inputs (firstName, lastName, streetAddress, etc.): Validates non-emptiness.
      newErrors.streetAddress = "Street Address is required";
      formIsValid = false;
    } else {
      newErrors.streetAddress = "";
    }

    if (!formData.city) {
      newErrors.city = "City is required";
      formIsValid = false;
    } else {
      newErrors.city = "";
    }

    if (!formData.state) {
      newErrors.state = "State is required";
      formIsValid = false;
    } else {
      newErrors.state = "";
    }

    if (!formData.postalCode) {
      newErrors.postalCode = "Postal Code is required";
      formIsValid = false;
    } else {
      newErrors.postalCode = "";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
      formIsValid = false;
    } else {
      newErrors.country = "";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.phonePart1 || !formData.phonePart2 || !formData.phonePart3) {
      newErrors.phone = "Phone number is incomplete";//Phone Number (phonePart1, phonePart2, phonePart3):
      //Validates that all three parts are filled in.Combines the error for all parts into a single message (newErrors.phone).
      formIsValid = false;
    } else {
      newErrors.phone = "";
    }

    if (!formData.schoolId) {
      newErrors.schoolId = "School ID is required";
      formIsValid = false;
    } else {
      newErrors.schoolId = "";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
      formIsValid = false;
    } else {//Dropdown (gender):Validates that the user selects a value other than the default empty value ("").
      newErrors.gender = "";
    }

    if (!formData.isAgree) {
      newErrors.isAgree = "You must agree to the terms";
      formIsValid = false;
    } else { //Checkbox (isAgree):Validates that the checkbox is checked before allowing submission.
      newErrors.isAgree = "";
    }

    setErrors(newErrors);
    return formIsValid;
  };
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {//handleSubmit Function
    //Triggered when the user submits the form.Prevents the default form submission behavior using e.preventDefault()
    //Calls validateForm:If validation succeeds:
    //Logs the formData to the console.
    //In a real-world app, this is where you would send the form data to an API.
    //If validation fails:Logs "Form has errors." and displays error messages under the respective fields.
    e.preventDefault();
    if (validateForm()) {
      navigate("/home", { state: formData });
      console.log("Form submitted successfully with data: ", formData);
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <div style={{ background: "linear-gradient(to right, #ff7e5f, #feb47b)", minHeight: "100vh" }}>
      <form onSubmit={handleSubmit} className="container mt-4 p-4 rounded shadow-sm" style={{ maxWidth: "600px", backgroundColor: "#fff" }}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="firstName"
            value={formData.firstName}
            onChange={handleFirstNameChange}
            //is a conditional rendering statement in React, used to dynamically 
            //display an error message when a validation error for the lastName field exists.
          />
          {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="lastName"
            value={formData.lastName}
            onChange={handleLastNameChange}
          />
          {errors.lastName &&/* In JavaScript, && is a logical operator that evaluates the left-hand side first.*/
           <div className="text-danger">
          {errors.lastName/*Dynamically displays the error message string stored in errors.lastName.*/}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Graduation Year</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleGraduationYearChange}
          />
          {errors.graduationYear && <div className="text-danger">{errors.graduationYear}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Street Address</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleStreetAddressChange}
          />
          {errors.streetAddress && <div className="text-danger">{errors.streetAddress}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Address Line 2</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleAddressLine2Change}
          />
          {errors.addressLine2 && <div className="text-danger">{errors.addressLine2}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="city"
            value={formData.city}
            onChange={handleCityChange}
          />
          {errors.city && <div className="text-danger">{errors.city}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">State</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="state"
            value={formData.state}
            onChange={handleStateChange}
          />
          {errors.state && <div className="text-danger">{errors.state}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Postal Code</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="postalCode"
            value={formData.postalCode}
            onChange={handlePostalCodeChange}
          />
          {errors.postalCode && <div className="text-danger">{errors.postalCode}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Country</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="country"
            value={formData.country}
            onChange={handleCountryChange}
          />
          {errors.country && <div className="text-danger">{errors.country}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control form-control-sm"
            name="email"
            value={formData.email}
            onChange={handleEmailChange}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control form-control-sm"
              name="phonePart1"
              value={formData.phonePart1}
              onChange={handlePhonePart1Change}
              style={{ maxWidth: "80px" }}
              placeholder="XXX"
            />
            <input
              type="text"
              className="form-control form-control-sm mx-2"
              name="phonePart2"
              value={formData.phonePart2}
              onChange={handlePhonePart2Change}
              style={{ maxWidth: "80px" }}
              placeholder="XXX"
            />
            <input
              type="text"
              className="form-control form-control-sm"
              name="phonePart3"
              value={formData.phonePart3}
              onChange={handlePhonePart3Change}
              style={{ maxWidth: "80px" }}
              placeholder="XXXX"
            />
          </div>
          {errors.phone && <div className="text-danger">{errors.phone}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">School ID</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="schoolId"
            value={formData.schoolId}
            onChange={handleSchoolIdChange}
          />
          {errors.schoolId && <div className="text-danger">{errors.schoolId}</div>}
        </div>

          <div className="mb-3">
           <label className="form-label">Gender</label>
            <select
             className="form-select form-select-sm"
             name="gender"
             value={formData.gender}
             onChange={handleGenderChange}
  >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
             <option value="other">Other</option>
             </select>
           {errors.gender && <div className="text-danger">{errors.gender}</div>}
            </div>


        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agree"
            name="isAgree"
            checked={formData.isAgree}
            onChange={handleAgreeChange}
          />
          <label className="form-check-label" htmlFor="agree">
            I agree to the terms and conditions
          </label>
          {errors.isAgree && <div className="text-danger">{errors.isAgree}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
