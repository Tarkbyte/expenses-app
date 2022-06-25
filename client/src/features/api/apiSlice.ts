import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Expense } from "../../types";

export const expenseApi = createApi({
  reducerPath: "expenseApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["Expenses"],
  endpoints: (builder) => ({
    getExpenses: builder.query<Expense[], void>({
      query: () => "/expenses",
      providesTags: [{ type: "Expenses", id: "LIST" }],
    }),
    addExpense: builder.mutation<Expense, Partial<Expense>>({
      query: (expense) => {
        return {
          url: `/expenses`,
          method: "POST",
          body: expense,
        };
      },
      invalidatesTags: [{ type: "Expenses", id: "LIST" }],
    }),
    updateExpense: builder.mutation<Expense, Partial<Expense>>({
      query: (expense) => {
        const { _id, ...body } = expense;

        return {
          url: `/expenses/${_id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [{ type: "Expenses", id: "LIST" }],
    }),
    deleteExpense: builder.mutation<Expense, string>({
      query: (_id) => {
        return {
          url: `/expenses/${_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Expenses", id: "LIST" }],
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useAddExpenseMutation,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
} = expenseApi;
