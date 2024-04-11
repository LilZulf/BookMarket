import { TabBar as RNTabBar } from "react-native-tab-view";
import { colors, fonts } from "../../../Globals";
import { Text } from "react-native";


const renderTabBar = props => (
    <RNTabBar
        {...props}
        indicatorStyle={{ 
            backgroundColor: colors.fontBlack, 
            height : 2, 
        }}
        style={{ backgroundColor: colors.white }}
        tabStyle={{
            width: 'auto',
        }}
        renderLabel={({ route, focused, color }) => (
            <Text
                style={{
                    fontFamily: fonts.medium,
                    color: focused ? colors.fontBlack : colors.secondary
                }}
            >
                {route.title}
            </Text>
        )}
    />
);
export default renderTabBar;
