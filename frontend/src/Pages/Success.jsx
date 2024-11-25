import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(intervalId);
          navigate("/");
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [navigate]);

  return (
    <section className="notFound">
      <div className="container">
        <img src="/sandwich.png" alt="success" />
        <h1>Redirecting to Home in {countdown} seconds...</h1>
        <Link to={"/"}>
          Back to Home <HiOutlineArrowNarrowDown />
        </Link>
      </div>
    </section>
  );
};

export default Success;
