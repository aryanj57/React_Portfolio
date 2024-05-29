import {
  AppBar,
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
import { APP_ROUTES } from "../constants/APP_ROUTES";
import DsButton from "./DsButton";
import { lightTheme } from "../theme";
import RemixIcon from "./RemixIcon";
import { useState } from "react";

const Navbar = ({ currentTheme, toggleTheme }) => {
  const theme = useTheme();

  const [navMenuEl, setNavMenuEl] = useState(null);

  const handleMenuOpen = (e) => {
    setNavMenuEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setNavMenuEl(null);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    const ele = document.getElementById(id);
    console.log(ele);
    ele?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    handleMenuClose();
  };

  const navOptions = [
    {
      title: "Home",
      link: APP_ROUTES.HOME.pathaname,
    },
    {
      title: "Experience",
      link: APP_ROUTES.EXP.pathaname,
    },
    {
      title: "Skills",
      link: APP_ROUTES.SKILLS.pathaname,
    },
    {
      title: "Projects",
      link: APP_ROUTES.PROJECTS.pathaname,
    },
    {
      title: "Contact",
      link: APP_ROUTES.CONTACT.pathaname,
    },
  ];

  const { borderColor } = theme.palette;
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Stack
            px="20px"
            py="10px"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography
              sx={{ display: { xs: "none", md: "block", lg: "block" } }}
              variant="h6Bold"
            >
              Aryan Jaiswal
            </Typography>

            <Stack
              display={{ xs: "none", md: "flex" }}
              spacing="15px"
              direction="row"
            >
              {navOptions.map(({ title, link }) => (
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
              ))}
            </Stack>

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
                      color="typoWhite"
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
              <Link href="https://www.github.com" target="_blank">
                <DsButton
                  style={{
                    border: `2px solid ${borderColor}`,
                  }}
                  variant="outlined"
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
                  },
                }}
              />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
