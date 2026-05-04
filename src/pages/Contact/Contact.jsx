import emailjs from "@emailjs/browser";
import {
  Alert,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";
import DsButton from "../../compnents/DsButton";
import DsTextField from "../../compnents/DsTextField";
import Section from "../../compnents/Section";

const Contact = ({ id }) => {
  const theme = useTheme();
  const intialMail = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const form = useRef();
  const [mail, setMail] = useState(intialMail);
  const [error, setError] = useState({ msg: "" });

  const onValueChange = (e) => {
    setMail({ ...mail, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mail.name || !mail.email || !mail.message || !mail.subject) {
      setError({ msg: "Please fill all the details" });
      console.log(error.msg);
      return;
    }

    setError({ msg: "" });
    console.log(form?.current);
    emailjs
      .sendForm("service_tt5cex6", "template_eowreid", form?.current, {
        publicKey: "y9f9VYtF-0Cs_3JJT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setMail(intialMail);
  };

  return (
    <Section id={id}>
      <Stack alignItems="center" width="100%" height="100%">
        <Typography variant="h1Bold">Contact</Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          textAlign={{ xs: "center", md: "", lg: "" }}
          width={{ xs: "80%", md: "100%", lg: "100%" }}
          mt="20px"
        >
          You can contact with any message throught following form
        </Typography>
        <Grid
          container
          xs={12}
          md={5}
          lg={5}
          direction="row"
          mt={{ xs: "0px", md: "40px", lg: "40px" }}
        >
          <Card
            sx={{
              height: "100%",
              width: "100%",
              boxShadow: { xs: "none", md: "default", lg: "default" },
            }}
          >
            <CardContent
              sx={{
                backgroundColor: {
                  xs: theme.palette.background.default,
                  md: "inherit",
                  lg: "inherit",
                },
              }}
            >
              <Stack spacing="16px" p="20px">
                <Typography
                  variant="h4Bold"
                  sx={{
                    color: {
                      xs: "text.primary",
                      md: "primary.contrastText",
                    },
                  }}
                >
                  Email Me
                </Typography>
                <form ref={form} onSubmit={(e) => handleSubmit(e)}>
                  <Stack gap="20px">
                    <DsTextField
                      placeholder="Your Name"
                      onChange={(e) => onValueChange(e)}
                      name="name"
                      value={mail.name}
                    />
                    <DsTextField
                      placeholder="Email"
                      onChange={(e) => onValueChange(e)}
                      name="email"
                      value={mail.email}
                    />
                    <DsTextField
                      placeholder="Subject"
                      onChange={(e) => onValueChange(e)}
                      name="subject"
                      value={mail.subject}
                    />
                    <DsTextField
                      placeholder="Message"
                      name="message"
                      value={mail.message}
                      onChange={(e) => onValueChange(e)}
                      multiline="true"
                      rows="4"
                    />

                    <DsButton
                      isDark
                      variant="contained"
                      type="submit"
                      text="Submit"
                      fullWidth
                    />

                    {error?.msg && (
                      <>
                        <Alert
                          variant="filled"
                          severity="error"
                          sx={{
                            borderRadius: "8px",
                          }}
                        >
                          {error.msg}
                        </Alert>
                      </>
                    )}
                  </Stack>
                </form>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Stack>
    </Section>
  );
};

export default Contact;
