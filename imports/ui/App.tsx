import React from 'react';
import { Helmet } from "react-helmet";
import CssBaseline from '@mui/material/CssBaseline';
import { Hello } from './Hello';
import { Info } from './Info';

export const App = () => (
  <div>
    <Helmet>
      <title>{Meteor.settings.public.title}</title>
      <link rel="icon" type="image/x-icon" href={Meteor.settings.public.favicon}/>
      <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <CssBaseline />
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </div>
);
