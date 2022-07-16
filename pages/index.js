import {useEffect, useRef} from 'react';

import Layout from "components/layout/Layout";

import { Container, Grid, Typography, Avatar, Button } from "@material-ui/core";
import ListItem from '@mui/material/ListItem';
import { makeStyles } from "@material-ui/core/styles";
import Link from '@mui/material/Link';

const useStyles = makeStyles((theme) => ({
  btn: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: "100%",
    height: "auto",
    boxShadow: "0px 2px 20px rgba(0,0,0,0.4)",
  },
}));

const About = () => {
  const classes = useStyles();
  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: '/files/Biophysics.pdf',
        },
        viewer.current,
      ).then((instance) => {
          const { docViewer } = instance;
          // you can now call WebViewer APIs here...
        });
    })
  }, []);

  return (
    <Layout
      title="My Neuroscience repository."
      description="Where I keep my neuroscience links."
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          style={{ marginBottom: "1em" }}
        >
          Neuroscience Directory
        </Typography>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item>
            <Button
              component={"a"}
              target="_blank"
              rel="noreferrer noopener"
              href="https://abneuro.vercel.app"
              className={classes.btn}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center">
                Here are the different resources I use to study neuroscience.
              </Typography>
            </Container>
          </Grid>
          <Grid item>
            <img
              src="brain.gif"
              alt="img"
              className={classes.img}
            />
          </Grid>
          <Grid item>
            <Typography variant="h2">
                Important Links:
            </Typography>
            <ListItem sx={{ display: 'list-item', m: 1}}>
              <Link href="https://library.med.utah.edu/kw/hyperbrain/quiz/">Neuroanatomy Quizzes and Practical Exams</Link>
            </ListItem>
            <ListItem sx={{ display: 'list-item', m: 1}}>
              <Link href="https://library.med.utah.edu/kw/hyperbrain/quiz/">Neuroanatomy Quizzes and Practical Exams</Link>
            </ListItem>
            <ListItem sx={{ display: 'list-item', m: 1}}>
              <Link href="https://library.med.utah.edu/kw/hyperbrain/quiz/">Neuroanatomy Quizzes and Practical Exams</Link>
            </ListItem>
            <ListItem sx={{ display: 'list-item', m: 1}}>
              <Link href="https://library.med.utah.edu/kw/hyperbrain/quiz/">Neuroanatomy Quizzes and Practical Exams</Link>
            </ListItem>
            <ListItem sx={{ display: 'list-item', m: 1}}>
              <Link href="https://library.med.utah.edu/kw/hyperbrain/quiz/">Neuroanatomy Quizzes and Practical Exams</Link>
            </ListItem>
            <ListItem sx={{ display: 'list-item', m: 1}}>
              <Link href="https://library.med.utah.edu/kw/hyperbrain/quiz/">Neuroanatomy Quizzes and Practical Exams</Link>
            </ListItem>
            <ListItem sx={{ display: 'list-item', m: 1}}>
              <Link href="https://library.med.utah.edu/kw/hyperbrain/quiz/">Neuroanatomy Quizzes and Practical Exams</Link>
            </ListItem>
            <ListItem sx={{ display: 'list-item', m: 1}}>
              <Link href="https://library.med.utah.edu/kw/hyperbrain/quiz/">Neuroanatomy Quizzes and Practical Exams</Link>
            </ListItem>
            <ListItem sx={{ display: 'list-item', m: 1}}>
              <Link href="https://library.med.utah.edu/kw/hyperbrain/quiz/">Neuroanatomy Quizzes and Practical Exams</Link>
            </ListItem>
          </Grid>
          <Grid item>
            <div className="webviewer" ref={viewer} style={{height: "100vh", width: "100vh"}}></div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default About;
