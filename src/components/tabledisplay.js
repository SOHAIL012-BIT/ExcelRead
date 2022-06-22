import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import SearchBox from "./searchbox";
import BasicTable from "./BasicTable";

function TableDisplay() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetch(
          `http://172.107.33.108:1009/api/BudgetManagement/GetBudgetSummary?year=2022`,

          {
            method: "POST",
          }
        );
        const userreq = await result.json();
        setSearchResults(userreq);
        console.log(userreq);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <h1>
        Hello World
      </h1>
    </div>
  );
}
export default TableDisplay;
