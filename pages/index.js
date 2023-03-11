import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  let router =  useRouter()
  useEffect(() => {
    router.push("/page-1")
  }, []);
  return <></>;
}
