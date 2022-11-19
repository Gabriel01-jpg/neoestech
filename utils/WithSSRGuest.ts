import {
    GetServerSideProps,
    GetServerSidePropsContext,
    GetServerSidePropsResult,
  } from "next";
  import { parseCookies } from "nookies";
  
  export function withSSRGuest<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>) {
    return async (
      ctx: GetServerSidePropsContext
    ): Promise<GetServerSidePropsResult<P>> => {
      const cookies = parseCookies(ctx);
  
      if (cookies["neo.token"]) {
        return {
          redirect: {
            destination: "/home",
            permanent: false,
          },
        };
      }
      return await fn(ctx);
    };
  }