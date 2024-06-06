import React, { useState } from "react";
import { app } from "../../firebase";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  collectionGroup,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import "./admin.css";

const firestore = getFirestore(app);

const AdminPage = () => {
  const navigate = useNavigate();
  const [customersData, setCustomersData] = useState([]);
  const [reservationsData, setReservationsData] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const fetchCustomerData = async () => {
    try {
      const customersRef = collection(firestore, "customers");
      const customersSnapshot = await getDocs(customersRef);

      const allCustomerData = customersSnapshot.docs.map((doc) => doc.data());
      setCustomersData(allCustomerData);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  const fetchReservationData = async () => {
    try {
      const customersRef = collection(firestore, "customers");
      const customersSnapshot = await getDocs(customersRef);

      const allReservationData = [];

      await Promise.all(
        customersSnapshot.docs.map(async (customerDoc) => {
          const reservationsRef = collection(customerDoc.ref, "reservations");
          const reservationsSnapshot = await getDocs(reservationsRef);

          reservationsSnapshot.forEach((reservationDoc) => {
            allReservationData.push({
              ...reservationDoc.data(),
              id: reservationDoc.id,
            });
          });
        })
      );

      setReservationsData(allReservationData);
    } catch (error) {
      console.error("Error fetching reservation data:", error);
    }
  };

  const removeReservation = async (customerId, reservationId) => {
    try {
      const customerRef = doc(
        firestore,
        "customers",
        customerId,
        "reservations",
        reservationId
      );
      await deleteDoc(customerRef);
      setSuccessMessage("Reservation removed successfully");
      fetchReservationData(); // Refresh reservation data after deletion
    } catch (error) {
      console.error("Error removing reservation:", error);
    }
  };

  const handleSubmit = () => {
    console.log("logout");
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to Admin Page
        </h1>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={fetchCustomerData}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Get Customer Data
          </button>
          <button
            onClick={fetchReservationData}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Get Reservation Data
          </button>
        </div>
        {successMessage && (
          <div className="bg-green-200 text-green-800 p-3 mb-4 rounded">
            {successMessage}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-semibold mb-4">Customer Data:</h2>
            {customersData.map((customer, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{customer.name}</h3>
                <p>{customer.email}</p>
                <p>{customer.phone}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-semibold mb-4">Reservation Data:</h2>
            {reservationsData.map((reservation, index) => (
              <div key={index} className="mb-4">
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {reservation.name}
                </p>
                <p>
                  <span className="font-semibold">Reservation Date:</span>{" "}
                  {reservation.reservationDate}
                </p>
                <p>
                  <span className="font-semibold">Time:</span>{" "}
                  {reservation.time}
                </p>
                <p>
                  <span className="font-semibold">Table Type:</span>{" "}
                  {reservation.tableType}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  {reservation.phone}
                </p>
                <button
                  onClick={() =>
                    removeReservation(reservation.customerId, reservation.id)
                  }
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
