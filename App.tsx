import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./screens/Main";
import Tables from "./screens/Tables";
import { createContext, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeaderStyles, TabStyles } from "./GlobalStyles";
import TabIcon, { IProps } from "./components/TabIcon";
import Videos from "./screens/Videos";
import Scores from "./screens/Scores";
import Teams from "./screens/Teams";
import { IDropdownItem, ILeagues } from "./Types";

type TabIconProps<T> = IProps<T>;

const BottomTabsNavigator = createBottomTabNavigator();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 12, //12 hrs
    },
  },
});

const dropdownItems: IDropdownItem[] = [
  { label: "La Liga", value: "PD" },
  { label: "Serie A", value: "SA" },
  { label: "Bundesliga", value: "BL1" },
  { label: "Ligue 1", value: "FL1" },
  { label: "Eredivisie", value: "DED" },
  { label: "Liga NOS", value: "PPL" },
  { label: "Premier League", value: "PL" },
  { label: "Championship", value: "ELC" },
];

const initialValue = {
  leagues: dropdownItems,
};

export const LeagueContext = createContext<ILeagues>(initialValue);

export default function App() {
  const [routes, setRoutes] =
    useState<Map<string, [TabIconProps<object>, () => JSX.Element]>>();
  const [league, setLeague] = useState<IDropdownItem>(dropdownItems[0]);

  useEffect(() => {
    const appRoutes = new Map<
      string,
      [TabIconProps<object>, () => JSX.Element]
    >();

    appRoutes.set("Scores", [
      { style: TabStyles.icon, name: "book", focused: true },
      Scores,
    ]);
    appRoutes.set("Videos", [
      {
        style: TabStyles.icon,
        name: "bar-chart",
        focused: false,
      },
      Videos,
    ]);
    appRoutes.set("Home", [
      { style: TabStyles.icon, name: "house-siding", focused: false },
      Main,
    ]);
    appRoutes.set("Tables", [
      { style: TabStyles.icon, name: "table-rows", focused: true },
      Tables,
    ]);
    appRoutes.set("Team Info", [
      { style: TabStyles.icon, name: "people", focused: true },
      Teams,
    ]);

    setRoutes(appRoutes);
  }, []);

  return (
    <LeagueContext.Provider
      value={{
        ...initialValue,
        chosenLeague: league!,
        changeLeague: setLeague,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <NavigationContainer>
            <BottomTabsNavigator.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: true,
                headerStyle: HeaderStyles.header,
                headerTitleStyle: HeaderStyles.title,
                tabBarInactiveTintColor: TabStyles.inactiveColor.color,
                tabBarActiveTintColor: TabStyles.activeColor.color,
                tabBarStyle: TabStyles.tab,
                tabBarActiveBackgroundColor:
                  TabStyles.activeTab.backgroundColor,
              }}
            >
              {routes &&
                Array.from(routes.keys()).map((r) => {
                  return (
                    <BottomTabsNavigator.Screen
                      key={`screen-${r}`}
                      name={r}
                      component={routes.get(r)![1]}
                      options={{
                        tabBarIcon({ focused }) {
                          return (
                            <TabIcon {...{ ...routes.get(r)![0], focused }} />
                          );
                        },
                      }}
                    />
                  );
                })}
            </BottomTabsNavigator.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </LeagueContext.Provider>
  );
}
