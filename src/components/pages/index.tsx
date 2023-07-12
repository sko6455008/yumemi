import { QueryClient, QueryClientProvider } from "react-query";
import PopulationsContainer from "../features/populations/container/PopulationsContainer";
import PrefecturesContainer from "../features/prefectures/container/PrefecturesContainer";

const queryClient = new QueryClient();

function Prefectures() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: "2em" }}>
        <PrefecturesContainer />
        <PopulationsContainer />
      </div>
    </QueryClientProvider>
  );
}

export default Prefectures;
