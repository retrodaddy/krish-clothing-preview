export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  main: NavLink[];
  footer: NavLink[];
}
