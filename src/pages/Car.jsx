import React, { useEffect } from "react";
import { NavigationBar, IntroJumbotron, Footer, FilterCars } from "../components";
export default function Car() {
  useEffect(() => {
    document.title = "Binar Car Rental | Car";
  }, []);
  return (
    <div>
      <NavigationBar />
      <IntroJumbotron />
      <FilterCars />
      <Footer />
    </div>
  );
}
