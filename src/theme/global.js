import React from "react"
import { Global, css } from "@emotion/core"
import emotionReset from "emotion-reset"

const styles = css`
  ${emotionReset};
  html {
    font-size: 62.5%;
  }
  body {
    font-family: "Public Sans", sans-serif;
    line-height: 1.2;
  }
  a {
    font: inherit;
    color: inherit;
    text-decoration: none;
  }
`

export default function global() {
  return <Global styles={styles} />
}
