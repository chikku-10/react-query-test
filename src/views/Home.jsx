import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

function Home() {
    //useQuery is used to get request.
    //refetch function is used to recall the API again.
  const { data, isLoading, isError, refetch } = useQuery(["dad-joke"], async () => {
    return await axios.get("https://catfact.ninja/fact").then((resp) => resp.data);
  });

  if (isError) {
    //fallback to this this part when error occurs
    return (
      <section>
        <h4>Sorry, there was an error</h4>
        <button onClick={refetch}>Retry</button>
      </section>
    );
  }

  return (
    <section>
      <div>{isLoading ? "Loading..." : data?.fact}</div>
      <div style={{ marginTop: "3rem" }}>
        <button onClick={refetch}>Get new joke</button>
      </div>
    </section>
  );
}

export default Home;
