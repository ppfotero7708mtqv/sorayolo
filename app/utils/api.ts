import axios, { type AxiosResponse } from 'axios';
import request from './request';

interface MaskProps {
  type: 'base64';
  uiid: string;
  data: string;
  uid: string;
  operation: string;
}

interface MaskReturnProps {
  code: string | number;
  mask: string;
  msg: string;
  time_cost: string | number;
}

export const UndressApiCode = {
  '6100': 'success.',
  '6101': 'success-cache.',
  '6200': 'User undress points is 0',
  '6201': 'Get points api failed.',
  '6202': 'Input format error.',
  '6203': 'Image decode error.',
  '6204': 'Image size small than 512.',
  '6301': 'Image contains minors.',
  '6302': 'Face area in the image large than 20%.',
  '6401': 'Image mask generate failed.',
  '6402': 'Image undress sd process failed.',
};

const whiteCode = ['6100', '6101'];

interface UndressProps {
  uiid: string;
  uid: string;
  masks?: string;
  prompt?: string;
  product: string;
  points: [];
  operation: string;
}

interface UndressReturnProps {
  data: string;
  code: number;
  msg: string;
}

const undressServiceApi = {
  getAutoMask: async (data: Partial<MaskProps>) =>
    await request.post<MaskProps, AxiosResponse<Partial<MaskReturnProps>>>(
      `/undress_get_automask`,
      data
    ),

  getUndressImg: async (data: Partial<UndressProps>) =>
    await request.post<
      UndressProps,
      AxiosResponse<Partial<UndressReturnProps>>
    >(`/undress_get_resuls`, data),
};

// import { perf } from "../firebase";
// import { trace } from "firebase/performance";

/** type alias */
export interface hentai_req {
  model: string;
  prompt: string;
  uiid: string;
  uid: string;
  product: string;
}

export interface hentai_ok {
  data: string;
  msg: string;
  time_cost: string;
  type: string;
}

export interface hentai_err {
  detail: Array<{
    loc: Array<string | number>;
    msg: string;
    type: string;
  }>;
}

export type hentai_res = hentai_ok | hentai_err;

const HENTAI_API_URL = process.env.NEXT_PUBLIC_API_SERVICE_HENTAI_URL;

const sendHentaiTaskRequest = async (url: string, data: hentai_req) =>
  await request.post<hentai_req, AxiosResponse<hentai_res>>(url, data);

/** using define axios */
const hentaiFetcher = async (url: string, params: hentai_req) => {
  /** add request trace */
  // const taceHentaiRequest = trace(perf, "HentaiRequest");
  // taceHentaiRequest.start();
  const data = sendHentaiTaskRequest(url, params)
    .then((res) => {
      // taceHentaiRequest.stop();
      return res.data;
    })
    .catch((error) => {
      // taceHentaiRequest.stop();
      return error;
    });

  return await data;
};

const hentaiServiceApi = {
  fetch: hentaiFetcher,
};
interface FaceSwapProps {
  type: 'url' | 'path' | 'base64';
  uiid: string;
  uid: string;
  urls?: Array<string>;
  data: Array<string>;
  operation: 'faceswap';
  product: 'APP_IMAGE_GEN';
}

interface FaceswapRes {
  data: string;
  code: number;
  mes: string;
}

const FaceSwapServiceApi = {
  getFaceSwapImg: async (data: Partial<FaceSwapProps>) =>
    await request.post<FaceSwapProps, AxiosResponse<Partial<FaceswapRes>>>(
      `/face_swap`,
      data
    ),
};

interface AnimateStyleProps {
  type: 'url' | 'path' | 'base64';
  uiid: string;
  uid: string;
  urls?: string;
  data: string;
  model:
    | 'Female: Anime Basic'
    | 'Female: Anime Realistic'
    | 'Female: Anime Detailed'
    | 'Female: Anime HD';
  product: 'APP_IMAGE_GEN';
}

interface AnimateStyleRes {
  data: string;
  code: number;
  mes: string;
}

const AnimateStyleServiceApi = {
  getAnimateStyleImg: async (data: Partial<AnimateStyleProps>) =>
    await request.post<
      AnimateStyleProps,
      AxiosResponse<Partial<AnimateStyleRes>>
    >(`/animate_style`, data),
};

const defaultExport = {
  checkUserGem: (user_id: string) => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_USERBILLING_SERVICE}/balance`, {
        headers: {
          Authorization: 'Basic cG9ybmdlbjpwb3JuZ2Vu',
        },
        params: { user_id: user_id },
      })
      .then((response) => {
        // Reduce the array into an object with currency types as keys and their amounts as values
        return response.data.reduce(
          (
            acc: { [x: string]: any },
            item: { currency: string | number; amount: any }
          ) => {
            acc[item.currency] = item.amount;
            return acc;
          },
          {}
        );
      })
      .catch((error) => {
        // If a 404 or 500 error is received, return default values
        if (
          error.response &&
          (error.response.status === 404 || error.response.status === 500)
        ) {
          return { PG_GEM_EPHEMERAL: 0, PG_GEM_PERMANENT: 0 };
        }
        // For other types of errors, throw the error to be handled by the caller
        throw error;
      });
  },

  createUser: async (user: any) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_USERBILLING_SERVICE}/users`,
      {
        method: 'POST',
        headers: {
          Authorization: 'Basic cG9ybmdlbjpwb3JuZ2Vu',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
        }),
      }
    );
    const data = await response.json();
    return data;
  },

  checkUserSubscriptionStatus: (user_id: string) =>
    axios.get(
      `${process.env.NEXT_PUBLIC_USERBILLING_SERVICE}/subscriptions/APP_IMAGE_GEN`,
      {
        headers: {
          Authorization: 'Basic cG9ybmdlbjpwb3JuZ2Vu',
        },
        params: { user_id: user_id },
      }
    ),

  getProductPrices: async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_USERBILLING_CANARY}/pricing/APP_IMAGE_GEN`,
      {
        headers: {
          Authorization: 'Basic cG9ybmdlbjpwb3JuZ2Vu',
        },
        next: { revalidate: 6000 },
      }
    );
    const data = await response.json();
    return data;
  },

  hentaiServiceApi,
  undressServiceApi,
  FaceSwapServiceApi,
  AnimateStyleServiceApi,
  hentaiFetcher,
  HENTAI_API_URL,
  getInviteCode: async (user_id: string) => {
    return await request.put(`/invite_code`, {
      param: user_id,
    });
  },
};

export default defaultExport;
