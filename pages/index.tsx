import Head from "next/head";
import React from "react";

import s from "../styles/Home.module.css";

export default function Home({}) {
  return (
    <>
      <Head>
         <meta charSet="UTF-8" />
         <link rel="icon" href="/logo.png" type="image/png" />
         <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
         <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
         <title>Learn Bun</title>
      </Head>
      <div className={s.wrapper}>
        <h1 className={s.heading}>Hello Bun!</h1>
        <div className={s.imgWrapper}>
          <img src="/logo.png" alt="" />
        </div>
      </div>
    </>
  );
}
