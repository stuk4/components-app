import { Ionicons } from "@expo/vector-icons";

export const animationMenuItems: MenuItem[] = [
  // 01-animationMenuItems
  {
    name: "Animation 101",
    icon: "cube-outline",
    component: "/(animations)/animations-101",
  },
  {
    name: "Animation 102",
    icon: "albums-outline",
    component: "/(animations)/animations-102",
  },
];

export const menuItems: MenuItem[] = [
  // 02-menuItems
  {
    name: "Pull to refresh",
    icon: "refresh-outline",
    component: "PullToRefreshScreen",
  },
  {
    name: "Section List",
    icon: "list-outline",
    component: "CustomSectionListScreen",
  },
  {
    name: "Modal",
    icon: "copy-outline",
    component: "ModalScreen",
  },
  {
    name: "InfiniteScroll",
    icon: "download-outline",
    component: "InfiniteScrollScreen",
  },
  {
    name: "Slides",
    icon: "flower-outline",
    component: "SlidesScreen",
  },
  {
    name: "Themes",
    icon: "flask-outline",
    component: "ChangeThemeScreen",
  },
];
export const uiMenuItems: MenuItem[] = [
  // 03- uiMenuItems
  {
    name: "Switches",
    icon: "toggle-outline",
    component: "/(ui)/switches",
  },
  {
    name: "Alerts",
    icon: "alert-circle-outline",
    component: "/(ui)/alerts",
  },
  {
    name: "TextInputs",
    icon: "document-text-outline",
    component: "TextInputScreen",
  },
];
interface MenuItem {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  component: string;
}
