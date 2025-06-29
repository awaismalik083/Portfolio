"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // You can log the error to your own service here if needed
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={500} title="Something went wrong" />
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
