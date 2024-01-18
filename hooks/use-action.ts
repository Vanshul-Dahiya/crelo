import { ActionState, FieldErrors } from "@/lib/create-safe-action";
import { useCallback, useState } from "react";

type Action<TInput, TOutput> = (
  data: TInput
) => Promise<ActionState<TInput, TOutput>>;

interface UseActionOptions<TOutput> {
  onSuccess?: (data: TOutput) => void;
  onError?: (error: string) => void;
  onComplete?: () => void;
}

export const useAction = <TInput, TOutput>(
  action: Action<TInput, TOutput>,
  options: UseActionOptions<TOutput> = {}
) => {
  const [fieldErrors, setFieldErrors] = useState<
    FieldErrors<TInput> | undefined
  >(undefined);

  const [error, setError] = useState<string | undefined>(undefined);

  const [data, setData] = useState<TOutput | undefined>(undefined);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // execute function will be called in a component
  // takes input and pass into action
  // action will run it in ActionState and makes sure it is validated
  const execute = useCallback(
    async (input: TInput) => {
      setIsLoading(true);
      try {
        const res = await action(input);
        if (!res) return;

        if (res.fieldErrors) {
          setFieldErrors(res.fieldErrors);
        }
        if (res.error) {
          setError(res.error);
          options.onError?.(res.error);
        }
        if (res.data) {
          setData(res.data);
          options.onSuccess?.(res.data);
        }
      } finally {
        setIsLoading(false);
        options.onComplete?.();
      }
    },
    [action, options]
  );

  return {
    execute,
    fieldErrors,
    error,
    data,
    isLoading,
  };
};
