import { Colors } from "@/constants/Colors";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/images/spotify-white-icon.png")}
          style={{
            width: 80,
            height: 80,
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Colors.fgPrimary,
              fontSize: 26,
              fontWeight: "bold",
            }}
          >
            Millions of songs.
          </Text>
          <Text
            style={{
              color: Colors.fgPrimary,
              fontSize: 26,
              fontWeight: "bold",
            }}
          >
            Free on Spotify.
          </Text>
        </View>


        <View style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          rowGap: 10,
        }}>
          <TouchableOpacity style={[styles.buttonRegister]}>
            <Text style={{
              fontSize: 18,
              fontWeight: "bold",
            }}>
              Sign up free
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.buttonSocial]}>
            <Text style={{
              fontSize: 18,
              fontWeight: "bold",
              color: Colors.fgPrimary,
            }}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonSocial]}>
            <Text style={{
              fontSize: 18,
              fontWeight: "bold",
              color: Colors.fgPrimary,
            }}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{
              fontSize: 18,
              fontWeight: "bold",
              color: Colors.fgPrimary,
              marginTop: 10
            }}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRegister: {
    backgroundColor: Colors.primary,
    height: 45,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 100,
  },
  buttonSocial: {
    backgroundColor: Colors.bgPrimary,
    height: 45,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    borderWidth: 1,
    borderColor: Colors.fgPrimary,
  }
});
