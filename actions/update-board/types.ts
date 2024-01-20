import { z } from "zod";
import { Board } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpdateBoard } from "./schema";

// contains input and expected output

export type InputType = z.infer<typeof UpdateBoard>;
export type ReturnType = ActionState<InputType, Board>;
