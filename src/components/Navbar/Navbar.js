import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material"

function Navbar() {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })
    return (
        <Box>
            <AppBar position="sticky">
                <StyledToolbar>
                    <Typography variant="h6">Lama Dev</Typography>
                </StyledToolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
