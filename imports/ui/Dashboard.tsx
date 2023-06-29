import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Helmet } from "react-helmet";
import CssBaseline from '@mui/material/CssBaseline';

export const dashboardLoader = () => null;

const Dashboard = () => (
    <div>
        <Helmet>
            <title>{Meteor.settings.public.title} dashboard</title>
            <link rel="icon" type="image/x-icon" href={Meteor.settings.public.favicon} />
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Helmet>
        <CssBaseline />
        <h1>The dashboard!</h1>
    </div>
);

export default Dashboard;
