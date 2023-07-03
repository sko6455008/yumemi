import { QueryClient, QueryClientProvider } from "react-query";
import PrefecturesContainer from "../features/prefectures/container/PrefecturesContainer";

const queryClient = new QueryClient();

function Prefectures() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: "2em" }}>
        <PrefecturesContainer />
      </div>
    </QueryClientProvider>
  );
}

export default Prefectures;
