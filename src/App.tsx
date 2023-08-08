import { cn } from "../lib/utils";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="text-white">
        <p className={cn("text-white", "p-5 text-lg")}>Hello Sprouts</p>
      </div>
    </>
  );
}

export default App;
