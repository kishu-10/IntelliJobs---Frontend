import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { showError, showSuccess } from "../utils/toast";

const Network = () => {
  const [networks, setNetworks] = useState([]);
  async function fetchNetworks() {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/api/feeds/networks/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setNetworks(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchNetworks();
  }, []);
  const handleSubmit = (data) => {
    const jsonData = { being_followed: data };
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/feeds/networks/add/",
      data: jsonData,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        showSuccess(response.data.data.message);
        fetchNetworks();
      })
      .catch((error) => {
        showError("Error");
      });
  };

  return (
    <>
      <Navbar />
      <div className="row--grey">
        <div className="container mb-2">
          <h1 className="text-primary text-center mt-2 mb-4 pt-3">
            Expand Your Networks
          </h1>
          <div className="row network-people-row">
            {networks.map((network, index) => (
              <div className="card network-people-card col-md-2" key={index}>
                <div className="org-pic">
                  <img
                    src={
                      network.display_picture ? network.display_picture : avatar
                    }
                    height="100"
                    alt=""
                  />
                </div>
                <div>
                  <ul className="list font-14 mt-2">
                    <li>
                      <p className="font-weight-bold mb-1">{network.name}</p>
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary connect-people-btn"
                    onClick={() => handleSubmit(network.id)}
                  >
                    {network.has_followed ? "Unconnect" : "Connect"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Network;
