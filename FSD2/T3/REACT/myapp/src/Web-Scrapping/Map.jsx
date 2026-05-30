import React from "react";

function Map1() {
  const data = [
    { id: 1, name: "abc", std: 4 },
    { id: 2, name: "pqr", std: 3 },
    { id: 3, name: "xyz", std: 4 },
    { id: 4, name: "lmn", std: 2 },
    { id: 5, name: "def", std: 4 },
    { id: 6, name: "hij", std: 3 },
  ];

  return (
    <>
      {data
        .filter((item) => item.std === 4)
        .map((item) => (
          <div key={item.id}>
            <h2>Name: {item.name.toUpperCase()}</h2>
            <h2>Standard: {item.std}</h2>
          </div>
        ))}
    </>
  );
}

export default Map1;