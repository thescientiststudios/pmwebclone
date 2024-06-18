import React from "react"
import { ThemeProvider } from "styled-components"

export const theme = {
  colors: {
    main: "#fff",
    secondary: "#000",
    gray: "#fafa",
    text_white: "#fff",
    text_black: "#000",
  },

  fonts: {
    size: {
      base: "16px",
      small: ".75em",
      medium: "1.5em",
      large: "2em",
      extra_large: "3em",
    },

    family: {
      stack: "Arial, Helvetica, sans-serif",
      custom: "Inter",
    },
  },

  space: {
    extra_small: ".3rem",
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
    extra_large: "3rem",
  },

  wrappers: {
    small: "95px",
    medium: "980px",
  },

  animations: {
    timing: "cubic-bezier(0.72, -0.01, 0.25, 1)",
    duration: {
      quick: "0.2s",
      normal: "0.8s",
    },
  },

  // media_queries: {
  //   extra_small: "320px",
  //   small: "640px",
  //   medium: "768px",
  //   large: "1024px",
  //   extra_large: "1280px",
  // },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
