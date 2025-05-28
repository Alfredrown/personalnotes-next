// pages/index.js

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/login", // where to redirect
      permanent: false, // temporary redirect (HTTP 307)
    },
  };
}

export default function Home() {
  return null; // This page won't be rendered because of redirect
}
