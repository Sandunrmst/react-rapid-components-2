import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData, //destructure need to update current data it's means spread all form data and save with current data
      [event.target.name]: event.target.value, //Dynamically setting form values
    });

    validateInput(name, value); //This will work when user input their details on that time
  }

  function validateInput(getName, getValue) {
    switch (getName) {
      case "username":
        setErrors((prevErrors) => ({
          ...prevErrors,
          username:
            getValue.length < 3 ? "Username must be at least 3 characters" : "",
        }));
        break;
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue)
            ? ""
            : "Invalid Email Address",
        }));
        break;
      case "password":
        setErrors((prevErrors) => ({
          ...prevErrors,
          password:
            getValue.length < 5 ? "Password must be at least 5 characters" : "",
        }));
        break;

      default:
        break;
    }
  }

  //Only check validation when user submit their details
  function handleFormSubmit(event) {
    event.preventDefault();

    const validateErrors = {};

    Object.keys(formData).forEach((dataItem) => {
      validateInput(dataItem, formData[dataItem]);
      if (errors[dataItem]) {
        validateErrors[dataItem] = errors[dataItem];
      }
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...validateErrors,
    }));
    if (Object.values(validateErrors).every((error) => error === "")) {
      //perform your form submission logic
    } else {
      console.log("Error is present. Please fix");
    }
  }

  console.log(errors);

  return (
    <div className=" flex flex-col items-center gap-2 max-w-[800px] mr-auto">
      <h1 className="mt-8 mb-8 text-3xl font-semibold text-orange-600">
        Simple Form Validation
      </h1>
      <form
        className="flex flex-col gap-[20px] w-[600px] p-[20px] border border-orange-400 rounded-lg"
        onSubmit={handleFormSubmit}
      >
        <div className="flex gap-[10px]">
          <label className="flex-1" htmlFor="username">
            User Name
          </label>
          <input
            className="flex-[2] p-2 rounded-md border outline-none border-orange-200"
            type="text"
            name="username"
            id="username"
            placeholder="Enter your Username"
            value={formData.username}
            onChange={handleFormChange}
          />
        </div>

        <span className="flex-1 text-red-600 font-semibold text-base">
          {errors?.username}
        </span>

        <div className="flex gap-[10px]">
          <label className="flex-1" htmlFor="email">
            Email
          </label>
          <input
            className="flex-[2] p-2 rounded-md border outline-none border-orange-200"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleFormChange}
          />
        </div>
        <span className="flex-1 text-red-600 font-semibold text-base">
          {errors?.email}
        </span>

        <div className="flex gap-[10px]">
          <label className="flex-1" htmlFor="password">
            Password
          </label>
          <input
            className="flex-[2] p-2 rounded-md border outline-none border-orange-200"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleFormChange}
          />
        </div>
        <span className="flex-1 text-red-600 font-semibold text-base">
          {errors?.password}
        </span>

        <button
          className="bg-orange-500 rounded-lg p-2 text-orange-50"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
