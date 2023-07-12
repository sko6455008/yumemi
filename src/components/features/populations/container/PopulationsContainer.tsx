import { useQuery } from "react-query";
import { PopulationResponse } from "../populations.type";
import PopulationsPresenter from "../presenter/PopulationsPresenter";

async function fetchApi(): Promise<PopulationResponse> {
  const res = await fetch("/api/populations");
  const data = await res.json();
  return data;
}

function PopulationsContainer() {
  const { data, isLoading, error } = useQuery("populations", fetchApi);
  return (
    <PopulationsPresenter data={data} isLoading={isLoading} error={error} />
  );
}

export default PopulationsContainer;
