import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { Button } from "./ui/button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    errorMessage = "Unknown error";
  }

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-screen gap-4"
    >
      <h1 className="text-white">Oops!</h1>
      <p className="text-white">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-red-600/80">{errorMessage}</i>
      </p>
      <Button
        onClick={() => navigate(-1)}
        variant={"outline"}
        size={"lg"}
        className="hover:text-black hover:bg-white"
      >
        Go Back in Time 🚀
      </Button>
    </div>
  );
}
