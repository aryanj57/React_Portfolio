import {
  AppBar,
  Link,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { APP_ROUTES } from "../constants/APP_ROUTES";
import DsButton from "./DsButton";

const Navbar = () => {
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
                onClick={(e) => handleCLick(e, APP_ROUTES.HOME.pathaname)}
              >
                Home
              </Typography>

              <Typography
                variant="h6Bold"
                onClick={(e) => handleCLick(e, APP_ROUTES.EXP.pathaname)}
              >
                Experience
              </Typography>

              <Typography
                variant="h6Bold"
                onClick={(e) => handleCLick(e, APP_ROUTES.SKILLS.pathaname)}
              >
                Skills
              </Typography>
              <Typography
                variant="h6Bold"
                onClick={(e) => handleCLick(e, APP_ROUTES.PROJECTS.pathaname)}
              >
                Projects
              </Typography>

              <Typography
                variant="h6Bold"
                onClick={(e) => handleCLick(e, APP_ROUTES.CONTACT.pathaname)}
              >
                Contact
              </Typography>
            </Stack>

            <Link href="https://www.github.com" target="_blank">
              <DsButton
                style={{ border: "2px solid white" }}
                variant="outlined"
                text={"Github"}
                textVariant="buttonSmallBold"
              />
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
