/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { Select } from "@theme-ui/components";
import React from "react";

// Adapted from: https://codepen.io/aaroniker/pen/KGpXZo and https://github.com/narative/gatsby-theme-novela/blob/714b6209c5bd61b220370e8a7ad84c0b1407946a/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx

const getPreferredMode = (): "light" | "dark" => {
  if (typeof window === undefined) return "light";
  if (
    !window ||
    !window.matchMedia ||
    window.matchMedia("(prefers-color-scheme)").media === "not all"
  ) {
    return "light";
  }
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkQuery.matches) return "dark";
  return "light";
};

const getIconFromMode = (mode: string): string => {
  if (mode === "dark") return "🌒";
  return "🔆";
};

const ColorModeToggle = () => {
  const [_, redrawApp] = useColorMode();
  let [mode, setMode] = React.useState(() => {
    return "system";
  });

  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme)").media === "not all") {
      return;
    }
    const switchMode = (e) => {
      if (
        window.localStorage.colorMode === "light" ||
        window.localStorage.colorMode === "dark"
      )
        return;
      redrawApp(getPreferredMode());
    };

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    if (
      window.localStorage.colorMode !== "light" &&
      window.localStorage.colorMode !== "dark"
    ) {
      redrawApp(getPreferredMode());
    }

    darkModeMediaQuery.addEventListener("change", switchMode, false);

    return () =>
      darkModeMediaQuery.removeEventListener("change", switchMode, false);
  }, [redrawApp]);

  React.useEffect(() => {
    setMode(localStorage.colorMode);
  }, []);

  const onChange = (e) => {
    const mode = e.target.value;
    localStorage.colorMode = mode;
    setMode(mode);
    if (mode === "light" || mode === "dark") {
      redrawApp(mode);
    } else {
      redrawApp(getPreferredMode());
    }
  };

  return (
    <Select
      onChange={onChange}
      value={mode}
      sx={{
        opacity: "0",
      }}
    >
      <option value="system">Use System Default</option>
      <option value="dark">Dark Theme</option>
      <option value="light">Light Theme</option>
    </Select>
  );
};

export default ColorModeToggle;
