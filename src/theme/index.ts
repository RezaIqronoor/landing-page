import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `Cookie, ${base.fonts?.heading}`
    }
})

export default theme