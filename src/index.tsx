import { QueryClient, QueryClientProvider } from "react-query";
import PrefecturesContainer from "./components/features/prefectures/container/PrefecturesContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: "2em" }}>
        <PrefecturesContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
