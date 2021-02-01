/** @jsx jsx */
import { jsx, useColorMode, useThemeUI } from "theme-ui";
import { css } from "@emotion/react";
import React from "react";

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
  if (mode === "system") mode = getPreferredMode();
  if (mode === "dark") return "🌒";
  return "🔆";
};

const getInitialMode = () => {
  if (!window || !window.localStorage) {
    return "loading...";
  }
  if (
    typeof window !== "undefined" &&
    window.localStorage &&
    "colorMode" in window.localStorage
  ) {
    return window.localStorage.colorMode;
  }
  return "system";
};

const ColorModeToggle = () => {
  const { theme } = useThemeUI();
  const [currentColorMode, setCurrentColorMode] = useColorMode();
  let [cachedColorMode, setCachedColorMode] = React.useState(getInitialMode());

  React.useEffect(() => {
    setCachedColorMode(getInitialMode());
  }, [getInitialMode]);

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
      if (currentColorMode !== getPreferredMode()) {
        console.log("redrawing...");
        setCurrentColorMode(getPreferredMode());
      }
    };

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    if (
      window.localStorage.colorMode !== "light" &&
      window.localStorage.colorMode !== "dark" &&
      getPreferredMode() !== currentColorMode
    ) {
      console.log("redrawing...");
      setCurrentColorMode(getPreferredMode());
    }

    darkModeMediaQuery.addEventListener("change", switchMode, false);

    return () =>
      darkModeMediaQuery.removeEventListener("change", switchMode, false);
  }, [setCurrentColorMode]);

  const onChange = (e) => {
    const mode = e.target.value;
    localStorage.colorMode = mode;
    setCachedColorMode(mode);
    if (mode === "light" || mode === "dark") {
      setCurrentColorMode(mode);
    } else {
      setCurrentColorMode(getPreferredMode());
    }
  };

  return (
    <div
      css={css`
        position: relative;
        border: solid 1px ${theme.colors.accent};
        border-radius: 6px;
        &:focus-within {
          outline-color: ${theme.colors.accent};
          outline-offset: 0px;
          outline-style: auto;
          outline-width: 1px;
        }
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
        `}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          textAlign: "center",
          fontSize: ["16px", 1, 1],
        }}
      >
        {!window
          ? `loading...`
          : `${getIconFromMode(cachedColorMode)}  (${cachedColorMode})`}
      </div>
      <select
        onChange={onChange}
        value={cachedColorMode}
        className="select"
        css={css`
          -webkit-appearance: none;
          -moz-appearance: none;
          text-indent: 1px;
          text-overflow: "";
          appearance: none;
          opacity: 0;

          &::-ms-expand {
            display: none;
          }
        `}
      >
        <option value="system">Use System Default</option>
        <option value="dark">Dark Theme</option>
        <option value="light">Light Theme</option>
      </select>
    </div>
  );
};

export default ColorModeToggle;
