import { React, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.png";
import HomePost from "./HomePost";
import HomeJobs from "./HomeJobs";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/users";
import { Icon } from "@iconify/react";

const Home = () => {
  const userStore = useSelector((state) => state.user.value);

  const userId = localStorage.getItem("userId");

  let navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, [userId, navigate]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(
          `http://127.0.0.1:8000/api/users/detail-${userId}/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(login(result.data.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [userId, dispatch]);

  const handleNavigate = (evt) => {
    evt.preventDefault();
    if (userStore.user_type === "Candidate") {
      navigate("/profile");
    } else {
      window.location.replace("http://127.0.0.1:8000/dashboard/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="row row--grey text-center">
        <div className="container col-lg-3 col-6">
          <div className="container col-lg align-items-center">
            <Link
              className="feeds-profile-pic"
              to=""
              onClick={handleNavigate.bind(this)}
            >
              <img
                src={userStore.picture ? userStore.picture : avatar}
                height="80"
                alt=""
              />
              <ul className="list footer--links mt-3 mb-3">
                <li className="font-weight-bold">{userStore.name}</li>
                <li>{userStore.email}</li>
              </ul>
            </Link>
            <hr />
            <div className="text-right">
              <ul className="list footer--links mb-3">
                <li className="font-weight-bold">
                  <Link className="text-primary" to={""}>
                    <Icon
                      icon="fluent:add-12-filled"
                      fontSize={14}
                      style={{ paddingBottom: "1.5px" }}
                    />{" "}
                    Status
                  </Link>{" "}
                </li>
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
};

export default Home;
