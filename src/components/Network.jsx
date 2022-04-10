import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.png";
import axios from "axios";
import { useState, useEffect } from "react";

const Network = () => {
  const [networks, setNetworks] = useState([]);
  useEffect(() => {
    const fetchNetworks = async () => {
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
    };
    fetchNetworks();
  }, []);
  console.log(networks);

  return (
    <>
      <Navbar />
      <div className="row--grey">
        <div className="container col-lg-8">
          <h1 className="text-primary text-center mt-2 mb-4 pt-3">Expand Your Networks</h1>
          <div className="row network-people-row">
            {networks.map((network) => (
              <div className="card network-people-card col-sm-3">
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
                  <button className="btn btn-primary connect-people-btn">
                    Connect
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
