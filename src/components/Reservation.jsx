import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import axios from "axios";
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { app } from "../firebase";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
const firestore = getFirestore(app);

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [tableType, setTableType] = useState("premium");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();

    console.log("Handling reservation...");

    const customerQuery = query(
      collection(firestore, "customers"),
      where("email", "==", email)
    );
    const customerSnapshot = await getDocs(customerQuery);
    console.log("Customer snapshot:", customerSnapshot.docs.length);

    if (customerSnapshot.empty) {
      alert(
        "Customer with provided email not found. please Provide the registered email"
      );
      return;
    }

    const customerDoc = customerSnapshot.docs[0].ref;

    try {
      await addDoc(collection(customerDoc, "reservations"), {
        name: firstName,
        reservationDate: reservationDate,
        time: time,
        tableType: tableType,
        phone: phone,
      });
      console.log("Reservation added successfully!");
      navigate("/success");
    } catch (error) {
      console.error("Error adding reservation: ", error);
      alert("Error adding reservation. Please try again.");
    }
  };

  // const handleReservation = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/v1/reservation/send",
  //       { firstName, lastName, email, phone, date, time, tableType },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         withCredentials: true,
  //       }
  //     );

  //     if (response && response.data) {
  //       const { data } = response;
  //       toast.success(data.message);
  //       setFirstName("");
  //       setLastName("");
  //       setEmail("");
  //       setPhone("");
  //       setTime("");
  //       setDate("");
  //       navigate("/success");
  //     } else {
  //       toast.error("Unexpected response from the server");
  //     }
  //   } catch (error) {
  //     toast.error(error.response?.data?.message || "An error occurred");
  //   }
  // };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p> For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="tableType">Select Table Type:</label>
                <select
                  id="tableType"
                  value={tableType}
                  onChange={(e) => setTableType(e.target.value)}
                >
                  <option value="premium">Premium Table</option>
                  <option value="simple">Simple Table</option>
                  <option value="outdoor">Outdoor Table</option>
                  <option value="private">Private Table</option>
                </select>
              </div>
              <button type="button" onClick={(e) => handleReservation(e)}>
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
