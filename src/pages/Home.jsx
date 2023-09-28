import React from "react";
import {
  HomeArticles,
  HomeLatest,
  HomeUpcoming,
  SubscriberSec,
} from "../components/index";

const Home = () => {

  return (
    <>
      <HomeLatest />
      <HomeUpcoming />
      <HomeArticles />
      <SubscriberSec />
    </>
  );
};

export default Home;
