import React from "react";
import ThinkingIcon from "./ThinkingIcon";
import ThumbsUpIcon from "./ThumbsUpIcon";
import ThumbsDownIcon from "./ThumbsDownIcon";

type IconButtonProps = {
  type?: string;
};

function IconButton({ type }: IconButtonProps) {
  switch (type) {
    case "ThumbsDownIcon": {
      return <ThumbsDownIcon />;
    }
    case "ThumbsUpIcon": {
      return <ThumbsUpIcon />;
    }
    default: {
      return <ThinkingIcon />;
    }
  }
}

export default IconButton;
