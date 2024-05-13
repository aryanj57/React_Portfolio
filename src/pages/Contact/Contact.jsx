import Layout from "../../compnents/Layout";
import {
  Alert,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import DsButton from "../../compnents/DsButton";
import DsTextField from "../../compnents/DsTextField";
import { useRef, useState } from "react";
import DsTextArea from "../../compnents/DsTextArea";
import emailjs from "@emailjs/browser";

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
    <Layout id={id}>
      <Stack pt="20px" alignItems="center" width="100%" height="100%">
        <Typography variant="h1Bold" color="typoHeading">
          Contact
        </Typography>
        <Typography variant="h6" color="typoSubheading">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, aperiam!
        </Typography>
        <Grid container xs={5} direction="row" mt="40px">
          <Card
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <CardContent>
              <Stack spacing="30px" p="40px">
                <Typography variant="h4Bold" color="typoWhite">
                  Email Me
                </Typography>
                <form ref={form} onSubmit={(e) => handleSubmit(e)}>
                  <Stack spacing="20px">
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
                    <DsTextArea
                      placeholder="Message"
                      name="message"
                      value={mail.message}
                      onChange={(e) => onValueChange(e)}
                      minRows={3}
                      maxRows={10}
                    />
                    <DsButton
                      variant="contained"
                      style={{
                        border: `2px solid ${theme.palette.borderColor}`,
                      }}
                      type="submit"
                      text="Submit"
                      fullWidth
                    />

                    {error?.msg && (
                      <>
                        <Alert
                          variant="filled"
                          severity="error"
                          sx={{ borderRadius: "8px" }}
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
    </Layout>
  );
};

export default Contact;
