import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import DsButton from "../../compnents/DsButton";
import Section from "../../compnents/Section";
import cards from "../../constants/cards";

const Skills = ({ id }) => {
  return (
    <Section id={id}>
      <Stack pt="20px" alignItems="center" width="100%" height="100%">
        <Typography variant="h1Bold">Skills</Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          textAlign={{ xs: "center", md: "", lg: "" }}
          width={{ xs: "80%", md: "100%", lg: "100%" }}
          mt="20px"
        >
          To demonstrate my qualifications, here's a breakdown of the
          technologies I'm proficient in
        </Typography>
        <Grid container xs={10} md={10} lg={10} direction="row" mt="10px">
          {cards.map((card) => {
            return (
              <Grid
                item
                xs={12}
                md={4}
                lg={4}
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
                    borderRadius: "12px",
                  }}
                >
                  <CardContent>
                    <Stack spacing="10px">
                      <Typography variant="h6Bold" color="primary.contrastText">
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
                            <Grid item key={item.id}>
                              <DsButton isDark text={item} />
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
    </Section>
  );
};

export default Skills;
