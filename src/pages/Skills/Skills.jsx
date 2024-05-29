import Layout from "../../compnents/Layout";
import {
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import cards from "../../constants/cards";
import DsButton from "../../compnents/DsButton";

const Skills = ({ id }) => {
  const theme = useTheme();
  return (
    <Layout id={id}>
      <Stack pt="20px" alignItems="center" width="100%" height="100%">
        <Typography variant="h1Bold" color="typoHeading">
          Skills
        </Typography>
        <Typography
          variant="h6"
          color="typoSubheading"
          textAlign={{ xs: "center", md: "", lg: "" }}
          width={{ xs: "80%", md: "100%", lg: "100%" }}
          mt="20px"
        >
          To demonstrate my qualifications, here's a breakdown of the
          technologies I'm proficient in
        </Typography>
        <Grid container xs={10} md={6} lg={6} direction="row" mt="10px">
          {cards.map((card) => {
            return (
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="20px"
              >
                <Card
                  key={card.id}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <CardContent>
                    <Stack spacing="10px">
                      <Typography variant="h6Bold" color="typoWhite">
                        {card.title}
                      </Typography>

                      <Grid
                        container
                        direction="row"
                        rowGap="10px"
                        columnGap="10px"
                      >
                        {card.skillsList.map((item) => {
                          return (
                            <Grid item>
                              <DsButton
                                variant="outlined"
                                style={{
                                  border: `1px solid ${theme.palette.borderColor}`,
                                }}
                                text={item}
                              />
                            </Grid>
                          );
                        })}
                      </Grid>
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

export default Skills;
