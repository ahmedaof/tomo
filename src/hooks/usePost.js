import { useMutation, useQueryClient } from "react-query";

export default function usePost({
  queryFn,
  queryKey,
  successMsg,
  errorMsg,
  onSuccess,
}) {
  const queryClient = useQueryClient();
  return useMutation(queryFn, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(queryKey);
      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error) => {},
  });
}
