import { QueryClient, QueryClientProvider } from "react-query";
import PopulationsContainer from "./components/features/populations/container/PopulationsContainer";
import PrefecturesContainer from "./components/features/prefectures/container/PrefecturesContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: "2em" }}>
        <PrefecturesContainer />
        <PopulationsContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
