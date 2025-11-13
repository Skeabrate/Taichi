export interface NavigationLink {
  href: string;
  label: string;
  isSpecial?: boolean;
}

// Section IDs
export const SECTION_ID_ABOUT = "o-mnie";
export const SECTION_ID_TAICHI = "o-tai-chi";
export const SECTION_ID_CLASSES = "zajecia";
export const SECTION_ID_CONTACT = "kontakt";

// Navigation Labels
export const NAV_LABEL_ABOUT = "O MNIE";
export const NAV_LABEL_TAICHI = "O TAI CHI";
export const NAV_LABEL_CLASSES = "ZAJĘCIA";
export const NAV_LABEL_CONTACT = "KONTAKT";
export const NAV_LABEL_BLOG = "ŚWIAT TAI CHI";

export const NAVIGATION_LINKS: NavigationLink[] = [
  { href: `#${SECTION_ID_ABOUT}`, label: NAV_LABEL_ABOUT },
  { href: `#${SECTION_ID_TAICHI}`, label: NAV_LABEL_TAICHI },
  { href: `#${SECTION_ID_CLASSES}`, label: NAV_LABEL_CLASSES },
  { href: `#${SECTION_ID_CONTACT}`, label: NAV_LABEL_CONTACT },
  { href: "/blog", label: NAV_LABEL_BLOG, isSpecial: true },
];
