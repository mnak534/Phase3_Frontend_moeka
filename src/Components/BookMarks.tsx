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
      { link: "https://www.pokemon.com/us/", text: "Pokémon Website" },
      { link: "https://www.pokemon.com/us/pokedex/", text: "Official Pokédex" },
      { link: "https://www.pokemon.com/us/pokemon-episodes/", text: "Pokémon TV" },
      { link: "https://www.pokemon.com/us/pokemon-video-games/", text: "Pokémon Games" },
      { link: "https://www.pokemon.com/us/pokemon-news/", text: "Pokémon News" },
      { link: "https://boards.greenhouse.io/pokemoncareers", text: "Career at Pokémon" }
    ]);
  const items = links.map((link) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={2} className={classes.bookMarks}>
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