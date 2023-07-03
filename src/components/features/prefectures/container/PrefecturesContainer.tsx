import { useQuery } from "react-query";
import { ApiResponse } from "../../../../common/type";
import PrefecturesPresenter from "../presenter/PrefecturesPresenter";

async function fetchApi(): Promise<ApiResponse> {
  const res = await fetch("/api/prefectures");
  const data = await res.json();
  return data;
}

function PrefecturesContainer() {
  const { data, isLoading, error } = useQuery("prefectures", fetchApi);
  return (
    <PrefecturesPresenter data={data} isLoading={isLoading} error={error} />
  );
}

export default PrefecturesContainer;
