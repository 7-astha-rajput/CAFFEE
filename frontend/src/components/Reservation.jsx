import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
    phone: "",
    persons: 1,
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit reservation form
  const handleReservation = async (e) => {
    e.preventDefault();

    // Validation: Check if all fields are filled
    const { firstName, lastName, email, phone, date, time, persons } = formData;
    if (!firstName || !lastName || !email || !phone || !date || !time || !persons) {
      toast.error("Please fill out all fields before submitting.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { ...formData },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // Success response handling
      if (response?.data?.message) {
        toast.success(response.data.message);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          date: "",
          time: "",
          phone: "",
          persons: 1,
        });
        navigate("/success");
      } else {
        toast.error("Unexpected response from the server.");
      }
    } catch (error) {
      // Error response handling
      console.error("API Error:", error);
      toast.error(
        error.response?.data?.message || "Reservation failed. Please try again."
      );
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="Reservation banner" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <input
                  type="time"
                  name="time"
                  placeholder="Time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="email_tag"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  name="persons"
                  placeholder="Number of Persons"
                  value={formData.persons}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
