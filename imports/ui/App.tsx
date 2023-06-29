import { Meteor } from 'meteor/meteor';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CssBaseline from '@mui/material/CssBaseline';
import Layout from "./Layout";
import People from "./People";
import Team from "./Team";

export default function App() {
    const title = Meteor.settings.public.title;
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <link rel="icon" type="image/x-icon" href={Meteor.settings.public.favicon} />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Helmet>
            <CssBaseline />
            {/* Routes nest inside one another. Nested route paths build upon
                parent route paths, and nested route elements render inside
                parent route elements. See the note about <Outlet> below. */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="people" element={<People />} />
                    <Route path="team" element={<Team />} />

                    {/* Using path="*"" means "match anything", so this route
                        acts like a catch-all for URLs that we don't have explicit
                        routes for. */}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NotFound() {
    return (
        <div>
            <h2>404 Not Found</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
