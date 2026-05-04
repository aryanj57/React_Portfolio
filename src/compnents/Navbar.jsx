import {
  AppBar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { navOptions } from "../constants/global";
import { lightTheme } from "../theme";
import DsButton from "./DsButton";
import RemixIcon from "./RemixIcon";

const Navbar = ({
  selectedId,
  setSelectedId,
  currentTheme,
  toggleTheme,
  setIsScrolling,
}) => {
  const theme = useTheme();

  const [navMenuEl, setNavMenuEl] = useState(null);

  const handleMenuOpen = (e) => {
    setNavMenuEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setNavMenuEl(null);
  };

  const scrollIntoView = (id = "home") => {
    const ele = document.getElementById(id);
    setSelectedId(id);
    setIsScrolling(true);
    ele?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 600);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollIntoView(id);
    handleMenuClose();
  };

  useEffect(() => {
    // Scroll To Top on reload
    const ele = document.getElementById("home");
    ele?.scrollIntoView({ behavior: "auto" });
  }, []);
  const { selectedState, primary, text } = theme.palette;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          borderRadius: "60px 60px 60px 60px",
        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            py="12px"
          >
            <Stack gap="12px" direction="row" alignItems="center">
              <Box
                display="flex"
                width="48px"
                height="48px"
                borderRadius="50%"
                justifyContent="center"
                alignItems="center"
                bgcolor={selectedState}
              >
                <Typography variant="h4Bold" color="text.primary">
                  A
                </Typography>
              </Box>
              <Typography
                sx={{ display: { xs: "none", md: "block", lg: "block" } }}
                variant="h5Bold"
                color="primary.contrastText"
              >
                Aryan Jaiswal
              </Typography>
            </Stack>

            <Stack
              display={{ xs: "none", md: "flex" }}
              gap="40px"
              direction="row"
            >
              {navOptions.map(({ title, id }) => (
                <Box
                  display="flex"
                  p="8px 12px"
                  minWidth="120px"
                  borderRadius="28px"
                  justifyContent="center"
                  alignItems="center"
                  bgcolor={selectedId === id ? selectedState : "transparent"}
                >
                  <Typography
                    variant={selectedId === id ? "h5Bold" : "h5"}
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    color={
                      selectedId === id ? text.primary : primary.contrastText
                    }
                    onClick={(e) => handleClick(e, id)}
                  >
                    {title}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Stack direction="row" alignItems="center">
              {/* Mobile navbar */}
              <Stack display={{ xs: "flex", md: "none", lg: "none" }}>
                <IconButton onClick={(e) => handleMenuOpen(e)}>
                  <RemixIcon className="ri-menu-line" />
                </IconButton>
                <Menu
                  anchorEl={navMenuEl}
                  open={Boolean(navMenuEl)}
                  onClose={handleMenuClose}
                >
                  {navOptions.map(({ title, link }) => (
                    <MenuItem>
                      <Typography
                        variant="h6Bold"
                        sx={{
                          "&:hover": {
                            cursor: "pointer",
                          },
                        }}
                        onClick={(e) => handleClick(e, link)}
                      >
                        {title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Stack>

              <Stack spacing="15px" direction="row">
                <Link href="https://github.com/aryanj57/" target="_blank">
                  <DsButton
                    sx={{ display: { xs: "none", md: "block", lg: "block" } }}
                    isDark
                    text={"Github"}
                    textVariant="buttonSmallBold"
                  />
                </Link>

                <Switch
                  onChange={toggleTheme}
                  value={currentTheme === lightTheme}
                  checkedIcon={
                    <Stack bgcolor="black" borderRadius="50%" p="2px">
                      <RemixIcon className="ri-contrast-2-fill" color="white" />
                    </Stack>
                  }
                  sx={{
                    ".MuiSwitch-track": {
                      bgcolor: "black !important",
                    },
                    "& .MuiSwitch-thumb": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: primary.contrastText,
                    },
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
