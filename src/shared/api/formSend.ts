import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "shared/constants";

export const formApi = createApi({
  reducerPath: "form",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    sendUserForm: builder.mutation({
      query: (body) => ({
        url: API_URL,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSendUserFormMutation } = formApi;
