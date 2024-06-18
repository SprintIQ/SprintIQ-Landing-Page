import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Helmet } from 'react-helmet';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Helmet>
        <meta name="author" content="Francis Codex"/>
        <meta
            name="description"
            content="Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain Revolution."
        />
        <meta
            name="keywords"
            content="SprintIQ, Connect Engage, Earn, Game, Web3, Solana, Learn, Learn and Earn"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

        <title>
          SprintIQ - Connect Engage, Earn
        </title>
        <meta property="og:url" content="https://sprintiq-landing.vercel.app"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="SprintIQ"/>
        <meta
            property="og:description"
            content="Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain Revolution."
        />
        <meta
            property="og:image"
            content="https://sprintiq.fun/og_image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="https://sprintiq-landing.vercel.app"/>
        <meta
            property="twitter:url"
            content="https://sprintiq-landing.vercel.app"
        />
        <meta name="twitter:title" content="SprintIQ"/>
        <meta
            name="twitter:description"
            content="SprintIQ, Conquer Quizzes, Expand Knowledge, and Thrive in the Blockchain Revolution."
        />
        <meta
            name="twitter:image"
            content="https://sprintiq.fun/og_image.jpg"
        />

        <meta property="og:title" content="SprintIQ"/>
        <meta property="og:type" content="website"/>
        <meta name="theme-color" content="#187318"/>

        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#187318"/>
      </Helmet>
      <RouterProvider router={router}/>
    </React.StrictMode>,
)
