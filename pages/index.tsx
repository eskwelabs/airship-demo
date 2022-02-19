import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  // useEffect(() => {
  //   const beamsClient = new window.PusherPushNotifications.Client({
  //     instanceId: "7d44404f-7770-4948-bf86-5cc5e5ce77af",
  //   });

  //   beamsClient
  //     .start()
  //     .then(() => beamsClient.addDeviceInterest("hello"))
  //     .then(() => console.log("Successfully registered and subscribed!"))
  //     .catch(console.error);
  // }, []);

  const pusherRef = useRef();
  // useEffect(() => {
  //   window.Pusher.logToConsole = true;
  //   var pusher = new window.Pusher("cd8eb32edfafcdf48975", {
  //     cluster: "ap3",
  //   });
  //   var channel = pusher.subscribe("my-channel");
  //   channel.bind("my-event", function (data) {
  //     alert(JSON.stringify(data));
  //   });
  // }, []);

  const [user_id, setuser_id] = useState();
  const [statusMessage, setStatusMessage] = useState();
  const handleUserIdChange = (e) => {
    setuser_id(e.target.value);
  };
  const register = (e) => {
    if (!!window.UA) {
      window.UA.then((sdk) => {
        if (!!sdk.channel.id) {
          sdk.channel.namedUser.set(user_id);
          sdk.addEventListener("push", (e) => {
            console.log(e);
            setStatusMessage(
              `Received message with title: ${e.push.title} and body: ${e.push.body}`
            );
          });
          setStatusMessage(`${user_id} is registered. Waiting for message`);
        } else console.log("UA channel not registered");
      });
    } else {
      console.log("UA not loaded at registration time");
    }
  };

  useEffect(() => {
    if (!!window.UA) {
      window.UA.then((sdk) => {
        sdk.register();
        console.log(sdk.channel.id);
      });
      console.log("UA loaded");
    } else {
      console.log("UA not loaded");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Script strategy="beforeInteractive" src="/airship.js"></Script>
        {/* <Script
          strategy="beforeInteractive"
          src="https://js.pusher.com/7.0/pusher.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="https://js.pusher.com/beams/1.0/push-notifications-cdn.js"
        ></Script>
        <Script strategy="beforeInteractive" src="/beamclient.js"></Script> */}

        <h1>Welcome to AirShip Demo</h1>
        <form>
          <input
            type="text"
            id="user_id"
            value={user_id}
            onChange={handleUserIdChange}
          ></input>
        </form>
        <button onClick={register}>Register</button>
        <div>
          <h3> {statusMessage} </h3>
        </div>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
