import { PopulationResponse } from "../../../../common/type";

type PresenterProps = {
  data: PopulationResponse | undefined;
  isLoading: boolean;
  error: unknown;
};

function PopulationsPresenter({ data, isLoading, error }: PresenterProps) {
  console.log(isLoading);
  console.log(error);
  console.log(data);
  return (
    <div>
      <h2>一覧</h2>
      <div>
        {data?.result?.data
          .filter((pref) => pref.label.includes("総人口"))[0]
          .data.map((val) => (
            <div>
              {val.value}:{val.year}
            </div>
          ))}
      </div>
    </div>
  );
}

export default PopulationsPresenter;
