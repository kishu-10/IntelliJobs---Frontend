import { React, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.png";
import HomePost from "./HomePost";
import HomeJobs from "./HomeJobs";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const userStore = useSelector((state) => state.user.value);

  const userId = localStorage.getItem("userId");
  

  let navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      navigate("/login");
    } 
  },[userId, navigate])

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const result = await axios.get(
          `http://127.0.0.1:8000/api/users/detail-${userId}/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setUser(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJob();
  }, [userId]);

  if (user) {
    return (
      <>
        <Navbar />
        <div className="row row--grey text-center">
          <div className="container col-lg-3 col-6">
            <div className="container col-lg align-items-center">
              <a className="navbar-brand" href="#/">
                <img src={avatar} height="80" alt="" />
              </a>
              <ul className="list footer--links mt-3">
                <li className="font-weight-bold">{user.name}</li>
                <li>mhrznkishu.10@gmail.com</li>
              </ul>
              <div className="text-left p-3">
                <hr></hr>
                <ul className="list footer--links ">
                  <li className="font-weight-bold">Education</li>
                  <li>Lorem: Lorem Ipsum</li>
                  <li>Lorem: Lorem Ipsum</li>
                </ul>
                <hr></hr>
                <ul className="list footer--links text-left">
                  <li className="font-weight-bold">Skills</li>
                  <li>Lorem: Lorem Ipsum</li>
                  <li>Lorem: Lorem Ipsum</li>
                </ul>
              </div>
            </div>
          </div>
          <HomePost />
          <HomeJobs />
        </div>
        <Footer />
      </>
    );
  } else if (userStore) {
    return (
      <>
        <Navbar />
        <div className="row row--grey text-center">
          <div className="container col-lg-3 col-6">
            <div className="container col-lg align-items-center">
              <a className="navbar-brand" href="#/">
                <img src={avatar} height="80" alt="" />
              </a>
              <ul className="list footer--links mt-3">
                <li className="font-weight-bold">{userStore.name}</li>
                <li>{userStore.email}</li>
              </ul>
              <div className="text-left p-3">
                <hr></hr>
                <ul className="list footer--links ">
                  <li className="font-weight-bold">Education</li>
                  <li>Lorem: Lorem Ipsum</li>
                  <li>Lorem: Lorem Ipsum</li>
                </ul>
                <hr></hr>
                <ul className="list footer--links text-left">
                  <li className="font-weight-bold">Skills</li>
                  <li>Lorem: Lorem Ipsum</li>
                  <li>Lorem: Lorem Ipsum</li>
                </ul>
              </div>
            </div>
          </div>
          <HomePost />
          <HomeJobs />
        </div>
        <Footer />
      </>
    );
  }

  return <>Loading....</>;
};

export default Home;
