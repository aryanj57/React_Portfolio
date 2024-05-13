import React, { useState } from "react";
import Layout from "../../compnents/Layout";
import {
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
import RemixIcon from "../../compnents/RemixIcon";
import projects from "../../constants/projects";

const Projects = ({ id }) => {
  const [search, setSearch] = useState("");

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
    const projectsCopy = JSON.parse(JSON.stringify(projects));
    const filterList = projectsCopy.filter((item) => searchFilter(item.title));

    return filterList;
  };
  const filteredProjects = getProjects();

  const theme = useTheme();
  return (
    <Layout id={id}>
      <Stack
        py="150px"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Typography variant="h1Bold" color="typoHeading">
          Projects
        </Typography>
        <Typography variant="h6" color="typoSubheading">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, aperiam!
        </Typography>

        <Stack mt="40px">
          <InputBase
            placeholder="search"
            value={search}
            sx={{
              border: `2px solid ${theme.palette.highlightColor}`,
              borderRadius: "6px",
              p: "8px 12px",
              color: theme.palette.highlightColor,
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
        <Grid container xs={8} direction="row" mt="10px">
          {filteredProjects.map((project) => {
            return (
              <Grid
                item
                xs={4}
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
                      <Typography variant="h6Bold" color="typoWhite">
                        {project.title}
                      </Typography>
                      <Typography variant="subtitle1" color="typoWhite">
                        {project.desc}
                      </Typography>
                      <Grid
                        container
                        direction="row"
                        rowGap="5px"
                        columnGap="5px"
                        border={`1px solid ${theme.palette.borderColor}`}
                        p="8px"
                        borderRadius="6px"
                      >
                        {project.techStack.map((item) => {
                          return (
                            <Grid item>
                              <Typography variant="subtitle1" color="typoWhite">
                                {item}
                              </Typography>
                            </Grid>
                          );
                        })}
                      </Grid>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textDecoration: "none" }}
                      >
                        <Typography variant="subtitle1" color="typoWhite">
                          {project.link}
                        </Typography>
                      </Link>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Layout>
  );
};

export default Projects;
