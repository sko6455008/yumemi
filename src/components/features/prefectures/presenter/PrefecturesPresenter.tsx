import { PrefectureResponse } from "../prefectures.type";

type PresenterProps = {
  data: PrefectureResponse | undefined;
  isLoading: boolean;
  error: unknown;
};

function PrefecturesPresenter({ data, isLoading, error }: PresenterProps) {
  console.log(isLoading);
  console.log(error);
  console.log(data);
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
