import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 4,
  },
  goalText: {
    color: "white",
    fontSize: 16,
    padding: 8,
  },
});
