import { z } from "zod";

import { ActionState } from "@/lib/create-safe-action";

import { StripeRedirect } from "./schema";

// contains input and expected output

export type InputType = z.infer<typeof StripeRedirect>;
export type ReturnType = ActionState<InputType, string>;
