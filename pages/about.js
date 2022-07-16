import Layout from "components/layout/Layout";
import Social from "components/Social";

import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  avator: {
    width: "8em",
    height: "8em",
    boxShadow: "0px 0px 10px 1px #b2b2b28f",
  },
}));

const About = () => {
  const classes = useStyles();
  // use your picture
  const avatar =
    "/Aplysia_californica.jpg";
  return (
    <Layout
      // type your page title and page description.
      title=" About | Neuroscience Discite"
      description="This is a directory of neuroscience information."
    >
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>
          <Grid item>
            <Typography variant="h1" align="center" gutterBottom>
              About
            </Typography>
            <Typography variant="h2" align="center">
              Use this as a roadmap to learn more about neuroscience.
            </Typography>
          </Grid>
          <Grid item container spacing={2} alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                {/* use your picture */}
                <Avatar alt="avatar" src={avatar} className={classes.avator} />
              </Grid>
              <Grid item>
                <Typography variant="h3">Abdul-Samad Olagunju</Typography>
              </Grid>
              <Social color />
            </Grid>
            <Grid item container md={8}>
              <Typography variant="body1">
                <br />
                Neuroscience is the study of the nervous system. The nervous system is like an animal's electrical system,
                transmitting signals throughout the body and neuroscience focuses on all aspects of how this system functions
                including the structure and development. The ultimate goal of neuroscience is to understand the biology of the mind;
                how the complex interactions of genes, proteins, neurons, and circuits can lead to the individuality of consciousness and behavior.
                Recent advances have deepened our understanding of how the brain functions, 
                and today neuroscientists from an vast array of disciplines employ a powerful arsenal of techniques to address the biology of the mind,
                and to provide insight for treating the more than one thousand known associated medical disorders with the brain.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default About;
