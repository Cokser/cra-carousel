import React from "react";
import ThinkingIcon from "./ThinkingIcon";
import ThumbsUpIcon from "./ThumbsUpIcon";
import ThumbsDownIcon from "./ThumbsDownIcon";

type IconButtonProps = {
  type?: string;
};

function IconButton({ type }: IconButtonProps) {
  switch (type) {
    case "ThinkingIcon": {
      return <ThinkingIcon />;
    }
    case "ThumbsUpIcon": {
      return <ThumbsUpIcon />;
    }
    default: {
      return <ThumbsDownIcon />;
    }
  }
}

export default IconButton;
