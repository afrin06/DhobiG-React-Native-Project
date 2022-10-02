import * as React from "react";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Switch,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";

const Notification = () => {
  const [groupSwitchValue, setGroupSwitchValue] = useState(false);
  const [groupSwitch1Value, setGroupSwitch1Value] = useState(false);
  const [groupSwitch2Value, setGroupSwitch2Value] = useState(false);
  const [groupSwitch3Value, setGroupSwitch3Value] = useState(false);
  const [groupSwitch4Value, setGroupSwitch4Value] = useState(false);
  const [groupSwitch5Value, setGroupSwitch5Value] = useState(false);

  return (
    <View style={styles.notificationView}>
      <View
        style={{top:370,marginLeft:30}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.groupView13}>
          <View style={styles.groupView12}>
            <View style={styles.groupView3}>
              <View style={styles.rectangleView} />
              <View style={styles.groupView1}>
                <View style={styles.groupView}>
                  <Switch
                    style={styles.groupSwitch}
                    value={groupSwitchValue}
                    onValueChange={setGroupSwitchValue}
                    thumbColor="#eb5657"
                    trackColor={{ false: "#939393", true: "#eb5657" }}
                  />
                  <Image
                    style={styles.ellipseIcon}
                    resizeMode="cover"
                    source={require("../assets/ellipse-4.png")}
                  />
                  <Image
                    style={styles.ellipseIcon1}
                    resizeMode="cover"
                    source={require("../assets/ellipse-5.png")}
                  />
                  <Switch
                    style={styles.groupSwitch1}
                    value={groupSwitch1Value}
                    onValueChange={setGroupSwitch1Value}
                    thumbColor="#7be794"
                    trackColor={{ false: "#939393", true: "#7be794" }}
                  />
                  <Image
                    style={styles.ellipseIcon2}
                    resizeMode="cover"
                    source={require("../assets/ellipse-6.png")}
                  />
                  <Image
                    style={styles.ellipseIcon3}
                    resizeMode="cover"
                    source={require("../assets/ellipse.png")}
                  />
                  <Image
                    style={styles.ellipseIcon4}
                    resizeMode="cover"
                    source={require("../assets/ellipse1.png")}
                  />
                </View>
              </View>
              <View style={styles.groupView2}>
                <Text style={styles.offersText}>Offers</Text>
              </View>
            </View>
            <View style={styles.groupView7}>
              <View style={styles.rectangleView1} />
              <View style={styles.groupView5}>
                <View style={styles.groupView4}>
                  <Switch
                    style={styles.groupSwitch2}
                    value={groupSwitch2Value}
                    onValueChange={setGroupSwitch2Value}
                    thumbColor="#eb5657"
                    trackColor={{ false: "#939393", true: "#eb5657" }}
                  />
                  <Image
                    style={styles.ellipseIcon5}
                    resizeMode="cover"
                    source={require("../assets/ellipse-4.png")}
                  />
                  <Image
                    style={styles.ellipseIcon6}
                    resizeMode="cover"
                    source={require("../assets/ellipse-5.png")}
                  />
                  <Switch
                    style={styles.groupSwitch3}
                    value={groupSwitch3Value}
                    onValueChange={setGroupSwitch3Value}
                    thumbColor="#7be794"
                    trackColor={{ false: "#939393", true: "#7be794" }}
                  />
                  <Image
                    style={styles.ellipseIcon7}
                    resizeMode="cover"
                    source={require("../assets/ellipse-6.png")}
                  />
                  <Image
                    style={styles.ellipseIcon8}
                    resizeMode="cover"
                    source={require("../assets/ellipse.png")}
                  />
                  <Image
                    style={styles.ellipseIcon9}
                    resizeMode="cover"
                    source={require("../assets/ellipse1.png")}
                  />
                </View>
              </View>
              <View style={styles.groupView6}>
                <Text style={styles.newsLetterText}>News Letter</Text>
              </View>
            </View>
            <View style={styles.groupView11}>
              <View style={styles.rectangleView2} />
              <View style={styles.groupView9}>
                <View style={styles.groupView8}>
                  <Switch
                    style={styles.groupSwitch4}
                    value={groupSwitch4Value}
                    onValueChange={setGroupSwitch4Value}
                    thumbColor="#eb5657"
                    trackColor={{ false: "#939393", true: "#eb5657" }}
                  />
                  <Image
                    style={styles.ellipseIcon10}
                    resizeMode="cover"
                    source={require("../assets/ellipse-4.png")}
                  />
                  <Image
                    style={styles.ellipseIcon11}
                    resizeMode="cover"
                    source={require("../assets/ellipse-5.png")}
                  />
                  <Switch
                    style={styles.groupSwitch5}
                    value={groupSwitch5Value}
                    onValueChange={setGroupSwitch5Value}
                    thumbColor="#7be794"
                    trackColor={{ false: "#939393", true: "#7be794" }}
                  />
                  <Image
                    style={styles.ellipseIcon12}
                    resizeMode="cover"
                    source={require("../assets/ellipse-6.png")}
                  />
                  <Image
                    style={styles.ellipseIcon13}
                    resizeMode="cover"
                    source={require("../assets/ellipse.png")}
                  />
                  <Image
                    style={styles.ellipseIcon14}
                    resizeMode="cover"
                    source={require("../assets/ellipse1.png")}
                  />
                </View>
              </View>
              <View style={styles.groupView10}>
                <Text style={styles.orderUpdateText}>Order Update</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/image-1.png")}
          />
          <Image
            style={styles.image2Icon}
            resizeMode="cover"
            source={require("../assets/image-2.png")}
          />
          <Image
            style={styles.image3Icon}
            resizeMode="cover"
            source={require("../assets/image-3.png")}
          />
        </View>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector6.png")}
        />
      </View>
      <View style={styles.rectangleView3} />
      <View style={styles.groupView16}>
        <View style={styles.rectangleView4} />
        <View style={styles.groupView15}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-1221.png")}
          />
          <View style={styles.groupView14}>
            <Text style={styles.referAFriend}>Refer A Friend!</Text>
            <Text style={styles.referDhobiGToAFriendAnd}>
              Refer Dhobi G to a friend and get 25% off on your Next order!
            </Text>
          </View>
        </View>
        <TouchableOpacity>
        <View style={styles.frameView}>
          <Text style={styles.cODEText}>CODE</Text>
          <Image
            style={styles.contentCopyIcon}
            resizeMode="cover"
            source={require("../assets/content-copy1.png")}
          />
        </View>
        </TouchableOpacity>
        <Text style={styles.shareYourCode}>Share your code</Text>
        <TouchableOpacity>
        <Image
          style={styles.whatsAppIcon}
          resizeMode="cover"
          source={require("../assets/whatsapp.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group-124.png")}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.liner}>
      </View>
      <View style={styles.groupView17}>
      <TouchableOpacity>
        <View style={styles.rectangleView5}><Text style={styles.turnOnAll}>Turn on all</Text></View>
      </TouchableOpacity>  
      </View>
      <View style={styles.groupView20}>
        <View style={styles.groupView19}>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group-1773.png")}
          />
          <Pressable
            style={styles.groupPressable1}
          >
            <View style={styles.groupView18}>
              <Pressable
                style={styles.groupPressable}
              >
                <TouchableOpacity>
                <View style={styles.rectangleView6} />
                <Image
                  style={styles.icroundArrowBackIosIcon}
                  resizeMode="cover"
                  source={require("../assets/icroundarrowbackios11.png")}
                />
                </TouchableOpacity>
              </Pressable>
            </View>
          </Pressable>
          <View style={styles.statusBarView}>
            <View style={styles.batteryView}>
              <View style={styles.borderView} />
              <Image
                style={styles.capIcon}
                resizeMode="cover"
                source={require("../assets/cap.png")}
              />
              <View style={styles.capacityView} />
            </View>
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              resizeMode="cover"
              source={require("../assets/cellular-connection.png")}
            />
            <View style={styles.timeStyleView}>
              <Text style={styles.timeText}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.notificationText}>Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 330,
    height: 55,
  },
  groupSwitch: {
    position: "absolute",
    top: 0.1,
    left: 0,
    shadowColor: "rgba(245, 193, 194, 0.8)",
    shadowOffset: {
      width: 0,
      height: 111,
    },
    shadowRadius: 121,
    elevation: 121,
    shadowOpacity: 1,
    width: 40.39,
    height: 21.36,
  },
  ellipseIcon: {
    position: "absolute",
    top: 3.69,
    left: 3.79,
    width: 13.79,
    height: 13.79,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 7.86,
    left: 7.86,
    width: 5.53,
    height: 5.53,
  },
  groupSwitch1: {
    position: "absolute",
    top: 0,
    left: 66.61,
    shadowColor: "rgba(123, 231, 148, 0.35)",
    shadowOffset: {
      width: 0,
      height: 111,
    },
    shadowRadius: 121,
    elevation: 121,
    shadowOpacity: 1,
    width: 40.39,
    height: 21.36,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 3.69,
    left: 96.32,
    width: 3.59,
    height: 13.79,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 4.08,
    left: 22.82,
    width: 13.79,
    height: 13.79,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 4.08,
    left: 70.39,
    width: 13.79,
    height: 13.79,
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 107,
    height: 21.46,
  },
  groupView1: {
    position: "absolute",
    top: 17,
    left: 202,
    width: 107,
    height: 21.46,
  },
  offersText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
    width: 151,
    height: 21,
  },
  groupView2: {
    position: "absolute",
    top: 17,
    left: 63,
    width: 151,
    height: 21,
  },
  groupView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 330,
    height: 55,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 330,
    height: 55,
  },
  groupSwitch2: {
    position: "absolute",
    top: 0.1,
    left: 0,
    shadowColor: "rgba(245, 193, 194, 0.8)",
    shadowOffset: {
      width: 0,
      height: 111,
    },
    shadowRadius: 121,
    elevation: 121,
    shadowOpacity: 1,
    width: 40.39,
    height: 21.36,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 3.69,
    left: 3.79,
    width: 13.79,
    height: 13.79,
  },
  ellipseIcon6: {
    position: "absolute",
    top: 7.86,
    left: 7.86,
    width: 5.53,
    height: 5.53,
  },
  groupSwitch3: {
    position: "absolute",
    top: 0,
    left: 66.61,
    shadowColor: "rgba(123, 231, 148, 0.35)",
    shadowOffset: {
      width: 0,
      height: 111,
    },
    shadowRadius: 121,
    elevation: 121,
    shadowOpacity: 1,
    width: 40.39,
    height: 21.36,
  },
  ellipseIcon7: {
    position: "absolute",
    top: 3.69,
    left: 96.32,
    width: 3.59,
    height: 13.79,
  },
  ellipseIcon8: {
    position: "absolute",
    top: 4.08,
    left: 22.82,
    width: 13.79,
    height: 13.79,
  },
  ellipseIcon9: {
    position: "absolute",
    top: 4.08,
    left: 70.39,
    width: 13.79,
    height: 13.79,
  },
  groupView4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 107,
    height: 21.46,
  },
  groupView5: {
    position: "absolute",
    top: 17,
    left: 202,
    width: 107,
    height: 21.46,
  },
  newsLetterText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
    width: 151,
    height: 21,
  },
  groupView6: {
    position: "absolute",
    top: 17,
    left: 63,
    width: 151,
    height: 21,
  },
  groupView7: {
    position: "absolute",
    top: 63,
    left: 0,
    width: 330,
    height: 55,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 330,
    height: 55,
  },
  groupSwitch4: {
    position: "absolute",
    top: 0.1,
    left: 0,
    shadowColor: "rgba(245, 193, 194, 0.8)",
    shadowOffset: {
      width: 0,
      height: 111,
    },
    shadowRadius: 121,
    elevation: 121,
    shadowOpacity: 1,
    width: 40.39,
    height: 21.36,
  },
  ellipseIcon10: {
    position: "absolute",
    top: 3.69,
    left: 3.79,
    width: 13.79,
    height: 13.79,
  },
  ellipseIcon11: {
    position: "absolute",
    top: 7.86,
    left: 7.86,
    width: 5.53,
    height: 5.53,
  },
  groupSwitch5: {
    position: "absolute",
    top: 0,
    left: 66.61,
    shadowColor: "rgba(123, 231, 148, 0.35)",
    shadowOffset: {
      width: 0,
      height: 111,
    },
    shadowRadius: 121,
    elevation: 121,
    shadowOpacity: 1,
    width: 40.39,
    height: 21.36,
  },
  ellipseIcon12: {
    position: "absolute",
    top: 3.69,
    left: 96.32,
    width: 3.59,
    height: 13.79,
  },
  ellipseIcon13: {
    position: "absolute",
    top: 4.08,
    left: 22.82,
    width: 13.79,
    height: 13.79,
  },
  ellipseIcon14: {
    position: "absolute",
    top: 4.08,
    left: 70.39,
    width: 13.79,
    height: 13.79,
  },
  groupView8: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 107,
    height: 21.46,
  },
  groupView9: {
    position: "absolute",
    top: 17,
    left: 202,
    width: 107,
    height: 21.46,
  },
  orderUpdateText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
    width: 151,
    height: 21,
  },
  groupView10: {
    position: "absolute",
    top: 17,
    left: 63,
    width: 151,
    height: 21,
  },
  groupView11: {
    position: "absolute",
    top: 126,
    left: 0,
    width: 330,
    height: 55,
  },
  groupView12: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 330,
    height: 181,
  },
  image1Icon: {
    position: "absolute",
    top: 13,
    left: 20,
    width: 29,
    height: 29,
  },
  image2Icon: {
    position: "absolute",
    top: 72,
    left: 18,
    width: 32,
    height: 32,
  },
  image3Icon: {
    position: "absolute",
    top: 137,
    left: 17,
    width: 32,
    height: 32,
  },
  groupView13: {
    position: "absolute",
    top: 43,
    left: 0,
    width: 330,
    height: 181,
  },
  vectorIcon: {
    position: "absolute",
    top: 4,
    left: 206,
    width: 26,
    height: 21,
  },
  vectorIcon1: {
    position: "absolute",
    top: 0,
    left: 271,
    width: 29.31,
    height: 29.43,
  },
  groupScrollView: {
    position: "absolute",
    top: 346,
    left: 15,
    width: 330,
    flex: 1,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 15,
    borderRadius: 15,
    backgroundColor: "#f6f6f6",
    width: 330,
    height: 332,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#007ba5",
    width: 330,
    height: 210,
  },
  liner:{
    position: "absolute",
    left: 29,
    height: 1,
    width: 330,
    backgroundColor: "#ffffff",
    bottom: 515,
  },
  groupIcon: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 70,
    height: 70,
  },
  referAFriend: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
  },
  referDhobiGToAFriendAnd: {
    position: "absolute",
    top: 25,
    left: 0,
    fontSize: 11.5,
    fontWeight: "600",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
    width: 167,
    height: 47,
  },
  groupView14: {
    position: "absolute",
    top: 0,
    left: 92,
    width: 330,
    height: 72,
  },
  groupView15: {
    position: "absolute",
    top: 13,
    left: 36,
    width: 259,
    height: 72,
  },
  cODEText: {
    position: "absolute",
    top: 9,
    left: -7,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#007bb5",
    textAlign: "center",
    width: 83,
  },
  contentCopyIcon: {
    position: "absolute",
    top: 9,
    left: 97,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameView: {
    position: "absolute",
    top: 149,
    left: 29,
    borderRadius: 15,
    backgroundColor: "#f6f6f6",
    width: 135,
    height: 41,
    overflow: "hidden",
  },
  shareYourCode: {
    position: "absolute",
    top: 105,
    left: 29,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
  },
  whatsAppIcon: {
    position: "absolute",
    top: 149,
    left: 195,
    width: 41,
    height: 41,
  },
  groupIcon1: {
    position: "absolute",
    top: 148,
    left: 247,
    width: 41,
    height: 41,
  },
  groupView16: {
    position: "absolute",
    top: 135,
    left: 30,
    width: 340,
    height: 210,
  },
  rectangleView5: {
    position: "absolute",
    bottom: -70,
    left: -10,
    borderRadius: 15,
    backgroundColor: "#007bb5",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 300,
    height: 60,
  },
  turnOnAll: {
    position: "absolute",
    bottom: 20,
    left: 49,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "white",
    textAlign: "center",
    width: 203,
  },
  groupView17: {
    position: "absolute",
    bottom: 65,
    left: 55,
    width: 300,
    height: 60,
  },
  groupIcon2: {
    position: "absolute",
    top: 45,
    left: 0,
    width:"100%",
    height: 227,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    width: 48,
    height: 48,
  },
  icroundArrowBackIosIcon: {
    position: "absolute",
    top: 14,
    left: 14,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  groupPressable: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 48,
    height: 48,
  },
  groupView18: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 48,
    height: 48,
  },
  groupPressable1: {
    position: "absolute",
    top: 90,
    left: 14,
    width: 48,
    height: 48,
  },
  borderView: {
    position: "absolute",
    top: 0,
    right: 2.33,
    borderRadius: 2.67,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 22,
    height: 11.33,
    opacity: 0.35,
  },
  capIcon: {
    pposition: "absolute",
    top: 3.67,
    right: 0,
    width: 1.33,
    height: 4,
    opacity: 0.4,
  },
  capacityView: {
    position: "absolute",
    top: 2,
    right: 4.33,
    borderRadius: 1.33,
    backgroundColor: "#fff",
    width: 18,
    height: 7.33,
  },
  batteryView: {
    position: "absolute",
    top: 17.33,
    right: 14.34,
    width: 24.33,
    height: 11.33,
  },
  wifiIcon: {
    position: "absolute",
    width: 14.72,
    height: 10.56,
    left: 335,
    top: 16,
  },
  cellularConnectionIcon: {
    position: "absolute",
    width: 16.32,
    height: 10.24,
    left: 315,
    top: 16,
  },
  timeText: {
    position: "absolute",
    transform: [
      {
        translateY: -3.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 15,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
    width: 54,
  },
  timeStyleView: {
    position: "absolute",
    top: 7,
    left: 21,
    width: 54,
    height: 21,
  },
  statusBarView: {
    position: "absolute",
    top: 47,
    left: 0,
    backgroundColor: "rgba(0, 123, 165, 0)",
    width:"100%",
    height: 42.24,
  },
  groupView19: {
    position: "absolute",
    top: 0,
    left: 0,
    width:"100%",
    height: 227,
  },
  groupView20: {
    position: "absolute",
    top: -45,
    left: 0,
    width:"100%",
    height: 227,
  },
  notificationText: {
    position: "absolute",
    top: 60,
    left: 75,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
    width: 242,
    height: 23,
    lineHeight: 20,
  },
  notificationView: {
    position: "relative",
    backgroundColor: "#f6f6f6",
    flex: 1,
    width: "100%",
    height: 820,
    overflow: "hidden",
  },
});

export default Notification;
