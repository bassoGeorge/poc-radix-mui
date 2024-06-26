import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "../experiment/Button";
import { MyCheckbox } from "../experiment/Checkbox";
import { Box } from "@mui/system";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component='main' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: 2}}>

        <Button>Hey there</Button>
        <div>Now, that we are talking.</div>

        <div>
          This is a big deal for all of us.
          Somewhere over the rainbow. What is the meaning of this behaviour.
          Zorastrianism is the beliefe in the all mighty.
          We can do that, but we can also do this.
          Now, we can fight and die in peace
          For that is what is needed you know.
        </div>
        <form>
          <MyCheckbox>Check me out</MyCheckbox>
        </form>
      </Box>
    </>
  );
}
