import Bowser from "bowser";
const isClient = typeof window !== "undefined";
const parser = isClient ? Bowser.getParser(window.navigator.userAgent) : null;

const isMobile = () =>
  isClient ? parser?.getPlatform()?.type === "mobile" : false;

export default isMobile;
