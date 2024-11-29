import { TitleBlock } from "./TitleBlock/TitleBlock";
import { SearchBlock } from "./SearchBlock/SearchBlock";

import classes from "./headlineBlock.module.css";
export const HeadlineBlock = () => {
  return (
    <div className={classes["headline-block"]}>
      <TitleBlock />
      <div className={classes["search-block__wrp"]}>
        <SearchBlock />
      </div>
    </div>
  );
};
