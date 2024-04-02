import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">
        Welcome to My Website
      </h1>
      <Component {...pageProps} />;
    </div>
  );
}
