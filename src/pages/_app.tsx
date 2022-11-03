import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar, AppBar } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <AppBar />
        <div className="ml-[17.6rem] mr-[60px] min-h-[90vh] w-full bg-[#f3f5f8] rounded-[6px] py-[20px] px-[28px] mt-[90px]">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
