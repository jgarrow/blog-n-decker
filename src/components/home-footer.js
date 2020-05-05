/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui"
import { Fragment } from "react"

export default ({ socialLinks }) => {
  const { theme } = useThemeUI()
  console.log(theme.breakpoints)
  return (
    <footer
      sx={{
        display: `flex`,
        justifyContent: `space-evenly`,
        alignItems: `center`,
      }}
    >
      <p>
        Made with{" "}
        <span role="img" aria-label="purple heart">
          💜
        </span>
      </p>
      {/* <p>© {new Date().getFullYear()}</p>
      {socialLinks &&
        socialLinks.map((platform, i, arr) => (
          <Styled.a
            key={platform.url}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform.name}
          </Styled.a>
        ))} */}
    </footer>
  )
}
