import {
  AnalyzeIcon,
  AthletesIcon,
  AtpIcon,
  BellIcon,
  CalenderIcon,
  HomeIcon,
  IconProps,
  SettingIcon,
  SterategyIcon,
  WorkoutIcon,
} from "@/components/Icons";
import {
  Formats,
  MarkupTranslationValues,
  RichTranslationValues,
  TranslationValues,
} from "next-intl";
import { FC, ReactElement, ReactNodeArray } from "react";

export const getPrimarySideBarTitles: (t: {
  <TargetKey extends any>(
    key: TargetKey,
    values?: TranslationValues,
    formats?: Partial<Formats>
  ): string;
  rich<TargetKey extends any>(
    key: TargetKey,
    values?: RichTranslationValues,
    formats?: Partial<Formats>
  ): string | ReactElement | ReactNodeArray;
  markup<TargetKey extends any>(
    key: TargetKey,
    values?: MarkupTranslationValues,
    formats?: Partial<Formats>
  ): string;
  raw<TargetKey extends any>(key: TargetKey): any;
}) => {
  title: string;
  route: string;
  icon?: FC<IconProps>;
}[] = (t) => [
  { title: t("home"), route: "/", icon: HomeIcon },
  { title: t("calendar"), route: "/calendar", icon: CalenderIcon },
  { title: t("analysis"), route: "/analysis", icon: AnalyzeIcon },
  { title: t("atp"), route: "/atp", icon: AtpIcon },
  {
    title: t("athlete_management"),
    route: "/athlete-management",
    icon: AthletesIcon,
  },
];

export const getSecondarySideBarTitles: (t: {
  <TargetKey extends any>(
    key: TargetKey,
    values?: TranslationValues,
    formats?: Partial<Formats>
  ): string;
  rich<TargetKey extends any>(
    key: TargetKey,
    values?: RichTranslationValues,
    formats?: Partial<Formats>
  ): string | ReactElement | ReactNodeArray;
  markup<TargetKey extends any>(
    key: TargetKey,
    values?: MarkupTranslationValues,
    formats?: Partial<Formats>
  ): string;
  raw<TargetKey extends any>(key: TargetKey): any;
}) => {
  title: string;
  route: string;
  icon?: FC<IconProps>;
}[] = (t) => [
  { title: t("workout_library"), route: "/workout-library", icon: WorkoutIcon },
  { title: t("strategy"), route: "/strategy", icon: SterategyIcon },
  { title: t("settings"), route: "/settings", icon: SettingIcon },
  {
    title: t("recent_activities"),
    route: "/recent-activities",
    icon: BellIcon,
  },
];
