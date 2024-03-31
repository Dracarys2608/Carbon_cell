import Homepage from "./pages/Home";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./Route";
function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex min-h-screen justify-center items-center">
            Loading Please wait!
          </div>
        }
      >
        <RouterProvider router={Routes} />
      </Suspense>
    </>
  );
}

export default App;
