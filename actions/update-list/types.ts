import { z } from "zod";
import { List } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpdateList } from "./schema";

// contains input and expected output

export type InputType = z.infer<typeof UpdateList>;
export type ReturnType = ActionState<InputType, List>;