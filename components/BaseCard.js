import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';

const cardImg = "https://v1.tailwindcss.com/img/card-top.jpg";
const { height } = Dimensions.get('window');

export default function BaseCard() {
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: cardImg }}
            style={styles.imgCard}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={{ padding: 16 }}>
            <Text style={styles.cardTitle}>The Coldest Sunset</Text>
            <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</Text>
            <View style={{
              flexDirection: 'row',
              width: '100%',
            }}>
              <View style={styles.pills}>
                <Text style={styles.pillText}>
                  #photography
                </Text>
              </View>
              <View style={styles.pills}>
                <Text style={styles.pillText}>
                  #travel
                </Text>
              </View>
              <View style={styles.pills}>
                <Text style={styles.pillText}>
                  #winter
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: height / 2,
    width: '100%',
    backgroundColor: 'tomato',
    borderRadius: 16,
    overflow: 'hidden',
  },
  imgContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  imgCard: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shadowContainer: {
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  cardTitle: {
    fontSize: 24,
    color: '#4a5568',
    fontWeight: 'bold',
    marginBottom: 12
  },
  cardText: {
    color: '#4a5568',
    lineHeight: 1.5 * 18,
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 12
  },
  pills: {
    borderRadius: 8,
    backgroundColor: '#edf2f7',
    padding: 8,
    marginRight: 8
  },
  pillText: {
    color: '#4a5568',
    fontWeight: 'bold',
  }
});