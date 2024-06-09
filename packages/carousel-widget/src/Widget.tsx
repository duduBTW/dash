// import { useWidget } from "@repo/core-client";

import { DesignOptions } from "./design";

// class CarouselDesignOptions {
//   container: any;
//   upperPart = new UpperPartDesignOptions();
// }

// export default function Widget() {
//   const { container } = useWidget("carousel");

//   return (
//     <div {...container()}>
//       <UpperPart />
//     </div>
//   );
// }

// function UpperPart() {
//   const { title, container } = useWidget("carousel").upperPart();

//   return (
//     <div {...container()}>
//       <p {...title()}>Lorem.</p>
//       <Indicator />
//     </div>
//   );
// }

// function Indicator() {
//   const { indicator } = useWidget("carousel").upperPart();
//   const [{ variant }, styles] = indicator();

//   if (variant === "image") {
//     return <img {...styles()} alt="aba" />;
//   }

//   return <div {...styles()} />;
// }

export function CarouselWidget(props: DesignOptions) {
  return (
    <div>
      <h1>{props.foo}</h1>
    </div>
  );
}
