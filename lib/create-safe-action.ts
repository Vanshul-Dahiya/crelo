import { z } from "zod";

// generic errors which we get from zod validation
// individual field errors

// T is an object with fields which have errors
export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<TInput, TOutput> = {
  fieldErrors?: FieldErrors<TInput>;
  error?: string | null;
  data?: TOutput;
};
export const createSafeAction = <TInput, TOutput>(
  schema: z.Schema<TInput>,
  handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten()
          .fieldErrors as FieldErrors<TInput>,
      };
    }
    return handler(validationResult.data);
  };
};

// import { z } from "zod";

// export type FieldErrors<T> = {
//   [K in keyof T]?: string[];
// };

// export type ActionState<TInput, TOutput> = {
//   fieldErrors?: FieldErrors<TInput>;
//   error?: string | null;
//   data?: TOutput;
// };

// export const createSafeAction = <TInput, TOutput>(
//   schema: z.Schema<TInput>,
//   handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
// ) => {
//   return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
//     const validationResult = schema.safeParse(data);
//     if (!validationResult.success) {
//       return {
//         fieldErrors: validationResult.error.flatten().fieldErrors as FieldErrors<TInput>,
//       };
//     }

//     return handler(validationResult.data);
//   };
// };
