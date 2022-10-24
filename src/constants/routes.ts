export enum Pages {
    HOME = 'Home',
    SOFTWARE_ENGINEERING = 'Software Engineering',
};

export interface RouteProps {
    name: string,
    path: string,
}

export const ROUTES: { [key in Pages]: RouteProps } = {
  [Pages.HOME]: {
    name: Pages.HOME,
    path: "/",
  },
  [Pages.SOFTWARE_ENGINEERING]: {
    name: Pages.SOFTWARE_ENGINEERING,
    path: "/software_engineering",
  },
};
