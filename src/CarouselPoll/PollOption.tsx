import React from "react";
import { OptionDto } from "../shared/models/questions";
import IconButton from "../shared/ui/IconButton";

type PollOptionProps = OptionDto;

function PollOption({ icon, label }: PollOptionProps) {
  return (
    <div className="m-4">
      <button
        type="button"
        className="hover:bg-slate-50 rounded-[50%] p-8 hover:shadow transition-all duration-300"
      >
        <IconButton type={icon} />
      </button>
    </div>
  );
}

export default PollOption;
