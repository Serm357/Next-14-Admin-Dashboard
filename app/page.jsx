"use client";

import { addSampleData } from "./lib/actions";

const Homepage = () => {
  return (
    <section>
      <button onClick={addSampleData}>add</button>
    </section>
  );
};

export default Homepage;
