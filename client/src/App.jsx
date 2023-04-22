import styles from "./styles.module.css";
// import sqlServer from "./assets/sql-server.png";
import { useState } from "react";

export default function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [storyQuery, setStoryQuery] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const query = await generateQuery();
    setStoryQuery(query);
  };

  const generateQuery = async () => {
    const response = await fetch("http://localhost:4000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: userPrompt }),
    });

    const data = await response.json();
    return data.StoryQuery.trim();
  };

  return (
    <main className={styles.main}>
      <img src="" className={styles.icon} alt="storyGen" />
      <h3>Generate Story From Your Keyword</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query-description"
          placeholder="Input your keyword"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <input type="submit" value="Generate query" />
      </form>
      <textarea rows="20" cols="100">{storyQuery}</textarea>
      {/* <pre>{sqlQuery}</pre> */}
    </main>
  );
}