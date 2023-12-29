import React from "react";

import Header from "../../Components/Header";
import About from "../../Components/About";
import Target from "../../Components/Target";
import Description from "../../Components/Descriprion";
import Report from "../../Components/Report";
import Course from "../../Components/Course";
import Author from "../../Components/Author";
import Result from "../../Components/Result";
import Diplomas from "../../Components/Diplomas";
import News from "../../Components/News";
import Questions from "../../Components/Questions";
import Footer from "../../Components/Footer";

// import { Navigate, Routes, Route } from 'react-router-dom';
// import SafetyDataTrans from "./pages/safety-data-trans";
// import MoneyBack from "./pages/money-back";
// import Privacy from "./pages/privacy";
// import PublicContract from "./pages/public-contract";

// const LazySafetyDataTrans = lazy(() => import("./pages/safety-data-trans"));
// const LazyMoneyBack = lazy(() => import("./pages/money-back"));
// const LazyPrivacy = lazy(() => import("./pages/privacy"));
// const LazyPublicContract = lazy(() => import("./pages/public-contract"));

// import MailForm from "./Components/MailForm";

// import Timer from "./Components/Timer";

const Home = () => {
  // const start = 15;
  // const startTime = new Date().getTime() + start * 1000;

  return (
    <div className="Home">
      <Header />
      <About />
      <Target />
      <Description />
      <Report />
      <Course />
      <Result />
      <Author />
      <Diplomas />
      <News />
      <Questions />
      <Footer/>
      {/* <MailForm/> */}
      {/* <Timer startTime={startTime} startFrom="seconds" /> */}
    </div>
  );
}

export default Home;
