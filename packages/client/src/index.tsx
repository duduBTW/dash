import { createRoot } from "react-dom/client";
import { CarouselWidget } from "@repo/carousel-widget";

const root = createRoot(document.getElementById("root")!);
root.render(<CarouselWidget foo="bar" />);
