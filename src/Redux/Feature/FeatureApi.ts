/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description implement api endpoint calls for the feature slice
 */

import { AxiosResponse } from "axios";
import { SurAxios } from "../../Api/SurAxios";
import { FeatureResponse } from "../../Types/FeatureResponse";
import { ServerResponse } from "../../Types/ServerResponse";

export const getFeature = async () => {
  const { data }: AxiosResponse<ServerResponse<FeatureResponse[]>> =
    await SurAxios.get("/feature-endpoint");
  return data.content;
};

export const postToFeature = async (payload: any) => {
  return await SurAxios.post("/feature-endpoint", { data: payload });
};
