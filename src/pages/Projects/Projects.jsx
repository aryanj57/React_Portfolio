import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  InputBase,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import RemixIcon from "../../compnents/RemixIcon";
import Section from "../../compnents/Section";
import projects from "../../constants/projects";

const Projects = ({ id }) => {
  const [search, setSearch] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const searchFilter = (item) => {
      let flag = true;

      search.split("").some((ele) => {
        if (!item.toLowerCase().includes(ele.toLowerCase())) {
          flag = false;
          return true;
        }
        return false;
      });

      return flag;
    };

    const getProjects = () => {
      return projects.filter((item) => searchFilter(item.title));
    };

    let timerout = setTimeout(() => {
      setFilteredProjects(getProjects());
    }, 800);

    return () => clearTimeout(timerout);
  }, [search]);

  const theme = useTheme();
  console.log("1111", theme.palette);
  return (
    <Section id={id}>
      <Stack alignItems="center" width="100%" height="100%">
        <Typography variant="h1Bold">Projects</Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          textAlign={{ xs: "center", md: "", lg: "" }}
          width={{ xs: "80%", md: "100%", lg: "100%" }}
          mt="20px"
        >
          A selection of projects I've created throughout my career
        </Typography>

        <Stack mt="40px" width={{ xs: "50%", md: "20%", lg: "20%" }}>
          <InputBase
            placeholder="search"
            value={search}
            sx={{
              border: 2,
              borderColor: theme.palette.background.paper,
              borderRadius: "6px",
              p: "8px 12px",
            }}
            onChange={(e) => setSearch(e.target.value)}
            endAdornment={
              <RemixIcon
                className="ri-search-2-line"
                style={{ fontWeight: 800 }}
              />
            }
          />
        </Stack>
        <Grid container xs={10} md={8} lg={8} direction="row" mt="30px">
          {filteredProjects.length === 0 ? (
            <Stack
              width="100%"
              alignItems="center"
              justifyContent="center"
              spacing="12px"
              py="60px"
            >
              <RemixIcon
                className="ri-file-search-line"
                style={{ fontSize: "48px", color: theme.palette.text.disabled }}
              />
              <Typography variant="h3Bold" color="text.primary">
                No projects found
              </Typography>
              <Typography variant="h5" color="text.secondary">
                No results for "{search}" — try a different keyword
              </Typography>
              <Typography
                variant="h5Bold"
                color="primary.main"
                sx={{ cursor: "pointer" }}
                onClick={() => setSearch("")}
              >
                Clear search
              </Typography>
            </Stack>
          ) : (
            filteredProjects.map((project) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="flex-start"
                  p="20px"
                >
                  <Card
                    key={project.id}
                    style={{
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      width: "100%",
                    }}
                  >
                    <Stack p="15px">
                      <CardMedia
                        sx={{
                          borderRadius: "6px",
                        }}
                        component="img"
                        height="200px"
                        image={project.url}
                        alt="image"
                      />
                    </Stack>

                    <CardContent>
                      <Stack spacing="10px">
                        <Typography
                          variant="h6Bold"
                          color="primary.contrastText"
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="primary.contrastText"
                        >
                          {project.desc}
                        </Typography>
                        <Grid
                          container
                          direction="row"
                          rowGap="5px"
                          columnGap="5px"
                          p="8px"
                          borderRadius="6px"
                          sx={{
                            border: 1,
                            borderColor: "divider",
                          }}
                        >
                          {project.techStack.map((item) => {
                            return (
                              <Grid item>
                                <Typography
                                  variant="subtitle1"
                                  color="primary.contrastText"
                                >
                                  {item}
                                </Typography>
                              </Grid>
                            );
                          })}
                        </Grid>
                        <Box width="90%">
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textDecoration: "none" }}
                          >
                            <Typography
                              variant="subtitle1"
                              color="primary.contrastText"
                            >
                              link : {project.title}
                            </Typography>
                          </Link>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })
          )}
        </Grid>
      </Stack>
    </Section>
  );
};

export default Projects;
