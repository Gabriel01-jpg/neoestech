import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { destroyCookie, parseCookies } from "nookies";
import { api } from "../services/api";
type WithSSRAuthOptions = {
  permissions?: string[];
  roles?: string[];
};

export function withSSRAuth<P extends { [key: string]: any; }>(
  fn: GetServerSideProps<P>,
  options?: WithSSRAuthOptions
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const token = cookies["neo.token"];

    if (!token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    try {
      api.defaults.headers['Authorization'] = `Bearer ${token}`
      const serveSideRequest = await api.get('/monitoramento/instalacoes')
      return await fn(ctx);
    } catch (err) {
      destroyCookie(ctx, "neo.token");
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  };
}