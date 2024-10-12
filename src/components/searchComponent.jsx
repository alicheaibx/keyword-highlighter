import React, { useState } from "react";
import { TextField, Card, CardContent, Typography, Box } from "@mui/material";
import { waitFor } from "@testing-library/react";

const data = [
  "React is a JavaScript library for building user interfaces.",
  "JavaScript is a versatile programming language.",
  "Frontend frameworks like React and Vue.js are popular.",
  "User experience is critical in web development.",
  "JavaScript frameworks can improve productivity.",
];

const SearchComponent = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const highlightText = (text) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span
          key={index}
          style={{ backgroundColor: "yellow", fontWeight: "bold" }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const countOccurrences = () => {
    if (!query) return 0;
    const regex = new RegExp(query, "gi");
    return data.reduce((count, item) => {
      const matches = item.match(regex);
      return count + (matches ? matches.length : 0);
    }, 0);
  };

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          padding: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "left",
          background:
            "linear-gradient(180deg, rgba(237, 138, 68, 0.52) 16%, rgba(145, 101, 69, 0.52) 54%, rgba(49, 34, 23, 0.52) 82%)",
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            pl: "35px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              lineHeight: "32px",
              fontSize: "32px",
              mb: "8px",
            }}
          >
            Keyword Highlighter
          </Typography>
        </Box>
        <TextField
          variant="outlined"
          value={query}
          onChange={handleSearch}
          placeholder="Search..."
          fullWidth
          sx={{
            "& .MuiInputBase-input": {
              borderRadius: "var(--radius-md, 100px)",
              outline: "none",
              background: "#fff",
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderRadius: "100px",
              outline: "none",
            },
            "& .Mui-focused fieldset": {
              borderColor: "#c4c4c4 !important",
              borderWidth: "1px !important",
            },
            "& .MuiInputBase-adornedStart": {
              background: "#fff",
            },
            "& .MuiInputAdornment-root": {
              backgroundColor: "#fff",
            },
            "& .MuiInputBase-adornedEnd": {
              background: "#fff",
            },
          }}
        />
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            pl: "35px",
            mb: 0.5,
            textAlign: "left",
            width: "100%",
            mt: "8px",
            fontWeight: 700,
            lineHeight: "20px",
            fontSize: "16px",
          }}
        >
          Occurrences:{" "}
          <Typography
            sx={{
              ml: "5px",
              fontWeight: 700,
              lineHeight: "20px",
              fontSize: "16px",
              color: "darkred",
            }}
          >
            {countOccurrences()}
          </Typography>
        </Typography>

        <Typography sx={{ textAlign: "left", width: "100%", pl: "35Px" }}>
          {data.map((item, index) => (
            <span key={index}>
              {highlightText(item)}
              {index < data.length - 1 && <br />}{" "}
              {/* Add line break between items */}
            </span>
          ))}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchComponent;
