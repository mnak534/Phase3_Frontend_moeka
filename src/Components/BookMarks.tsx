import React, { FunctionComponent, useState } from "react";
import { makeStyles, createStyles, Theme, Grid } from '@material-ui/core';
import { Button } from "./Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bookMarks: {
      padding: "10px 10px 10px 10px"
    }
  }));

interface Link {
  link: string;
  text: string;
}

export const BookMarks: FunctionComponent = () => {
  const classes = useStyles();
  const [links, setLinks] = useState(
    [
      { link: "https:/yahoo.co.jp", text: "Yahoo" },
      { link: "https://google.co.jp", text: "Google" },
      { link: "https://www.amazon.co.jp/", text: "Amazon" },
      { link: "https://qiita.com/", text: "Qiita" },
      { link: "https://stackoverflow.com/", text: "StackOverflow" },
    ]);
  const items = links.map((link) => {
    return (
      <Grid item xs={12} md={4} className={classes.bookMarks}>
        <Button {...link} />
      </Grid>
    )
  })
  return (
    <Grid container>
      {items}
    </Grid>
  )
}