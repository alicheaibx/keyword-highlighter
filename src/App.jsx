import React from "react";
import { Container, Typography } from "@mui/material";
import SearchComponent from "./components/searchComponent";

const App = () => {
  return (
    <Container maxWidth="sm" sx={{ padding: "20px" }}>
      <SearchComponent />
    </Container>
  );
};

export default App;
