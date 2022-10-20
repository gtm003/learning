export enum Pages {
    HOME = 'Home',
    POSITION = 'Position'
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
  [Pages.POSITION]: {
    name: Pages.POSITION,
    path: "/position",
  },
};
