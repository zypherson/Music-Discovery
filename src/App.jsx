import { useEffect } from "react";
import { getAccessToken } from "./services/spotify";

function App() {
  useEffect(() => {
    async function testSpotify() {
      const token = await getAccessToken();
      console.log("Spotify Token:", token);
    }
    testSpotify();
  }, []);

  return <h1>Music Discovery App</h1>;
}

export default App;
