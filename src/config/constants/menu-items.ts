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
    component: "/(layout)/pull-to-refresh",
  },
  {
    name: "Section List",
    icon: "list-outline",
    component: "/(layout)/custom-section-list",
  },
  {
    name: "Modal",
    icon: "copy-outline",
    component: "/(layout)/modal",
  },
  {
    name: "InfiniteScroll",
    icon: "download-outline",
    component: "/(layout)/infinite-scroll",
  },
  {
    name: "Slides",
    icon: "flower-outline",
    component: "/(layout)/slides",
  },
  {
    name: "Themes",
    icon: "flask-outline",
    component: "/(layout)/change-theme",
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
    component: "/(ui)/textinputs",
  },
];
interface MenuItem {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  component: string;
}
