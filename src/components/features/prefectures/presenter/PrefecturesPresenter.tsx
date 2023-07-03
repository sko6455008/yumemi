import { ApiResponse } from "../../../../common/type";

type PresenterProps = {
  data: ApiResponse | undefined;
  isLoading: boolean;
  error: unknown;
};

function PrefecturesPresenter({ data, isLoading, error }: PresenterProps) {
  console.log(isLoading);
  console.log(error);
  console.log(data?.result);
  return (
    <div>
      <h2>一覧</h2>
      <div>
        {data?.result?.map((prefecture) => (
          <div key={prefecture.prefCode}>{prefecture.prefName}</div>
        ))}
      </div>
    </div>
  );
}

export default PrefecturesPresenter;
