import React from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";
import { Suspense } from "react";

const bookLink = async () => {
  const res = await fetch("./booksData.json");
  return res.json();
};

const Home = () => {
  const booksPromise = bookLink();
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<p>Books Loading...</p>}>
        <Books booksPromise={booksPromise}></Books>
      </Suspense>
    </div>
  );
};

export default Home;
