import { Text, View } from "react-native";
import { tw } from "../tailwind";

export default function Index() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
