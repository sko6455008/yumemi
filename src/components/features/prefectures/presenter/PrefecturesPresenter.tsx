import { useState } from "react";
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
  const [prefectureSelections, setPrefectureSelections] = useState<String[]>(
    []
  );
  const onToggleSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (prefectureSelections.includes(e.target.value)) {
      setPrefectureSelections(
        prefectureSelections.filter(
          (checkedValue) => checkedValue !== e.target.value
        )
      );
    } else {
      setPrefectureSelections([...prefectureSelections, e.target.value]);
    }
  };
  console.log(prefectureSelections);
  return (
    <div>
      <h2>一覧</h2>
      <div>
        {data?.result?.map((prefecture) => (
          <label
            key={prefecture.prefCode}
            htmlFor={`checkbox_${prefecture.prefCode}`}
          >
            <input
              type="checkbox"
              id={`checkbox_${prefecture.prefCode}`}
              value={prefecture.prefCode}
              onChange={onToggleSelection}
            />
            {prefecture.prefName}
          </label>
        ))}
      </div>
    </div>
  );
}

export default PrefecturesPresenter;
