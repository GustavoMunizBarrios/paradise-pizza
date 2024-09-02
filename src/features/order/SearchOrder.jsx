import { useState } from "react";

export default function SearchOrder() {
  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  );
}
