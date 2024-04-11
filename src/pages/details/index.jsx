import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedRef,
    useAnimatedStyle,
    useScrollViewOffset
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

const DetailsPage = () => {
    const scrollRef = useAnimatedRef();
    const scrollOffset = useScrollViewOffset(scrollRef);

    const imageAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-IMG_HEIGHT, 0, IMG_HEIGHT],
                        [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
                    )
                },
                {
                    scale: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2, 1, 1])
                }
            ]
        };
    });

    return (
        <View style={styles.container}>
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
                <Animated.Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302'
                    }}
                    style={[styles.image, imageAnimatedStyle]}
                />
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <View style={{ height: 2000, backgroundColor: '#fff', borderTopLeftRadius: 16, borderTopRightRadius: 16, marginTop: -20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
                        Parallax Scroll
                    </Text>
                </View>
            </Animated.ScrollView>
        </View>
    );
};
export default DetailsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        width: width,
        height: IMG_HEIGHT
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 10,
        borderRadius: 8
    },
    backText: {
        color: '#fff',
        fontSize: 16
    }
});