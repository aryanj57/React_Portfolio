import {
  AppBar,
  Link,
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

const Navbar = ({ currentTheme, toggleTheme }) => {
  const theme = useTheme();
  const handleCLick = (e, id) => {
    e.preventDefault();
    const ele = document.getElementById(id);
    console.log(ele);
    ele?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
            <Typography variant="h6Bold">Aryan Jaiswal</Typography>
            <Stack spacing="15px" direction="row">
              <Typography
                variant="h6Bold"
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={(e) => handleCLick(e, APP_ROUTES.HOME.pathaname)}
              >
                Home
              </Typography>

              <Typography
                variant="h6Bold"
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={(e) => handleCLick(e, APP_ROUTES.EXP.pathaname)}
              >
                Experience
              </Typography>

              <Typography
                variant="h6Bold"
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={(e) => handleCLick(e, APP_ROUTES.SKILLS.pathaname)}
              >
                Skills
              </Typography>
              <Typography
                variant="h6Bold"
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={(e) => handleCLick(e, APP_ROUTES.PROJECTS.pathaname)}
              >
                Projects
              </Typography>

              <Typography
                variant="h6Bold"
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={(e) => handleCLick(e, APP_ROUTES.CONTACT.pathaname)}
              >
                Contact
              </Typography>
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
                icon={
                  <Stack
                    bgcolor={theme.palette.typoWhite}
                    borderRadius="50%"
                    p="2px"
                  >
                    <RemixIcon className="ri-sun-fill" />
                  </Stack>
                }
                checkedIcon={
                  <Stack
                    bgcolor={theme.palette.typoWhite}
                    borderRadius="50%"
                    p="2px"
                  >
                    <RemixIcon className="ri-contrast-2-fill" />
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
