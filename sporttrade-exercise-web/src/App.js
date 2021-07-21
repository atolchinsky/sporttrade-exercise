import React, { useMemo, useState, useEffect } from "react";
import { getStats } from "./service";

import Table from "./Table";
import "./App.css";

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Baseball Stats",
        columns: [
          {
            Header: "Player ID",
            accessor: "playerID"
          },
          {
            Header: "Year ID",
            accessor: "yearID"
          },
          {
            Header: "Team ID",
            accessor: "teamID"
          },
          {
            Header: "League ID",
            accessor: "lgID"
          },
          {
            Header: "Stint",
            accessor: "stint"
          },
          {
            Header: "G",
            accessor: "G"
          },
          {
            Header: "AB",
            accessor: "AB"
          },
          {
            Header: "R",
            accessor: "R"
          },
          {
            Header: "H",
            accessor: "Hits"
          },
          {
            Header: "2B",
            accessor: "Double"
          },
          {
            Header: "HR",
            accessor: "HR"
          },
          {
            Header: "RBI",
            accessor: "RBI"
          },
          {
            Header: "SB",
            accessor: "SB"
          },
          {
            Header: "CS",
            accessor: "CS"
          },
          {
            Header: "BB",
            accessor: "BB"
          },
          {
            Header: "SO",
            accessor: "SO"
          },
          {
            Header: "IBB",
            accessor: "IBB"
          },
          {
            Header: "HBP",
            accessor: "HBP"
          },
          {
            Header: "SH",
            accessor: "SH"
          },
          {
            Header: "SF",
            accessor: "SF"
          },
          {
            Header: "GIDP",
            accessor: "GIDP"
          }
        ]
      }
    ],
    []
  );

  const [params, setParams] = useState({})

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getStats();
      setData(result.data);
    })();
  }, []);

  const handleFilterChange = e => {
    (async () => {
      if (e.key === 'Enter') {
        params[e.target.name] = e.target.value

        if (e.target.value === '') {
          delete params[e.target.name]
        }

        setParams(params)

        const result = await getStats(params);

        setData(result.data);
      }
    })();
  };

  return (
    <div className="App">
      <input
        name="lgID"
        onKeyDown={handleFilterChange}
        placeholder={"lgID"}
      />
      <input
        name="yearID"
        onKeyDown={handleFilterChange}
        placeholder={"yearID"}
      />
      <input
        name="teamID"
        onKeyDown={handleFilterChange}
        placeholder={"teamID"}
      />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;