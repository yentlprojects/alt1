

// import "./declarations";
// import * as ImageDetect from "./imagedetect";
// import * as PasteInput from "./pasteinput";
// import Rect, { RectLike, PointLike } from "./rect";
// import { ImageData } from "./imagedata-extensions";
// import * as NodePolyfill from "./nodepolyfill";

// export { PasteInput, ImageDetect, NodePolyfill, Rect, RectLike, ImageData, PointLike };
// export * from "./imgref";
// export * from "./wrapper";


// syntax not yet supported in webpack
// this should improve tree shaking
import "./declarations";
export * as ImageDetect from "./imagedetect";
export * as PasteInput from "./pasteinput";
export { default as Rect, RectLike, PointLike } from "./rect";
export { ImageData } from "./imagedata-extensions";
export * as NodePolyfill from "./nodepolyfill";

export * from "./imgref";
export * from "./wrapper";

//hiasd