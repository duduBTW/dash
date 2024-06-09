import { createWidget } from "@repo/core-client";
import s from "@repo/theme";
import assets from "@repo/theme";

const carousel = createWidget("carousel");
const upperPart = carousel.upperPart();
const bottomPart = carousel.bottomPart();

upperPart
  .applyStyles("title", {
    gaps: {
      horizontal: s.spacing["10"],
      vertical: s.spacing["10"],
    },
  })
  .applyStyles(
    "indicator",
    {
      variant: "image",
      size: "large",
    },
    {
      image: {
        url: assets.icon.paper,
      },
    }
  )
  .applyStyles(["leftChevron", "rightChevron"], s.theme.iconButton)
  .applyStyles("leftChevron", {
    image: {
      url: assets.icon.leftChevron,
    },
  })
  .applyStyles("rightChevron", {
    image: {
      url: assets.icon.leftChevron,
    },
  });

bottomPart.applyStyles("container", {
  gaps: {
    //
  },
});

export default carousel;
