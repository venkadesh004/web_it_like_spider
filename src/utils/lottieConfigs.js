import {
  MouseScroll,
  EventsAnnouncements,
  EventsRegisteration,
  EventsRounds,
  EventsWinner,
  Announcements,
} from "../assets/lottie";

const loop = true;
const autoplay = true;
const rendererSettings = {
  perserveAspectRatio: "xMidYMid slice",
};

const defaultOptionsForLandingPage = {
  loop: loop,
  autoplay: autoplay,
  animationData: MouseScroll,
  rendererSettings: rendererSettings,
};

const defaultOptionsForEventPageArray = [
  {
    loop: loop,
    autoplay: true,
    animationData: EventsAnnouncements,
    rendererSettings: rendererSettings,
  },
  {
    loop: loop,
    autoplay: true,
    animationData: EventsRegisteration,
    rendererSettings: rendererSettings,
  },
  {
    loop: loop,
    autoplay: true,
    animationData: EventsRounds,
    rendererSettings: rendererSettings,
  },
  {
    loop: loop,
    autoplay: true,
    animationData: EventsWinner,
    rendererSettings: rendererSettings,
  },
];

const defaultOptionsForAnnouncementPage = {
  loop: loop,
  autoplay: true,
  animationData: Announcements,
  rendererSettings: rendererSettings,
};

const defaultOptionsForPages = [
  defaultOptionsForLandingPage,
  defaultOptionsForEventPageArray,
  defaultOptionsForAnnouncementPage
];

export default defaultOptionsForPages;
