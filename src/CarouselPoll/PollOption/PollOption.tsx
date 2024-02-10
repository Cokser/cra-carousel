import React from "react";
import { OptionDto } from "../../shared/models/questions";
import { IconButton } from "../../shared/ui";

interface PollOptionProps extends OptionDto {
  handlePoll: (id: number, item: OptionDto) => void;
  questionId: number;
  answer?: OptionDto;
  isDisabled?: boolean;
}

function PollOption({
  questionId,
  id,
  icon,
  label,
  handlePoll,
  answer,
  isDisabled,
}: PollOptionProps) {
  const isSelected = answer?.id === id && "bg-slate-100 shadow";
  return (
    <div className="m-4 flex flex-col items-center h-16  transition easy-out duration-500">
      <button
        disabled={isDisabled}
        onClick={() => handlePoll(questionId, { id, icon, label })}
        type="button"
        className={`rounded-[50%] p-8 transition-all duration-300 hover:bg-slate-50 hover:shadow ${isSelected}`}
      >
        <IconButton type={icon} />
      </button>
      {isSelected && <span className="mt-4">{label}</span>}
    </div>
  );
}

export default PollOption;
