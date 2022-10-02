import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";

const ManageReferal = () => {

  return (
    <View style={styles.manageReferalView}>
      <View
        style={{top:400,marginLeft:30}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.groupView3}>
          <View style={styles.groupView2}>
            <View style={styles.rectangleView} />
            <View style={styles.groupView1}>
              <Text style={styles.raviRanjanText}>Ravi Ranjan</Text>
              <Text style={styles.couponCodeText}>Coupon Code</Text>
              <View style={styles.groupView}>
              <TouchableOpacity>
                <View style={styles.rectangleView1} />
                </TouchableOpacity>
              </View>
              <Text style={styles.orderSuccessfullyCompleted}>
                1 Order Successfully Completed
              </Text>
              <Text style={styles.redeemNowText}>Redeem Now</Text>
            </View>
          </View>
          <TouchableOpacity>
          <Image
            style={styles.contentCopyIcon}
            resizeMode="cover"
            source={require("../assets/content-copy.png")}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.groupView6}>
          <View style={styles.groupView5}>
            <View style={styles.rectangleView2} />
            <View style={styles.groupView4}>
              <Text style={styles.raviRanjanText1}>Ravi Ranjan</Text>
              <Text style={styles.couponCodeText1}>Coupon Code</Text>
              <Text style={styles.orderSuccessfullyCompleted1}>
                1 Order Successfully Completed
              </Text>
              <Text style={styles.redeemedText}>Redeemed</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupView9}>
          <View style={styles.groupView8}>
            <View style={styles.rectangleView3} />
            <View style={styles.groupView7}>
              <Text style={styles.dakshSabharwalText}>Daksh Sabharwal</Text>
              <Text style={styles.couponCodeText2}>Coupon Code</Text>
              <Text style={styles.signedUpSuccessfully}>
                Signed Up Successfully
              </Text>
              <Text style={styles.codeWillBeGeneratedOn1st}>
                Code will be generated on 1st order completion.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rectangleView4} />
      <View style={styles.groupView12}>
        <View style={styles.rectangleView5} />
        <View style={styles.groupView11}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-122.png")}
          />
          <View style={styles.groupView10}>
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
            style={styles.contentCopyIcon1}
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
      <View style={styles.groupView14}>
        <View style={styles.groupView13}>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group-1773.png")}
          />
          <Pressable
            style={styles.groupPressable2}
          >
            <Pressable
              style={styles.groupPressable1}
            >
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
            </Pressable>
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
      <Text style={styles.manageReferralsText}>Manage Referrals</Text>
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
    width: 300,
    height: 90,
  },
  raviRanjanText: {
    position: "absolute",
    height: "26.92%",
    width: "100%",
    top: "0%",
    right: "56.61%",
    bottom: "73.08%",
    left: "0%",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  couponCodeText: {
    position: "absolute",
    height: "26.92%",
    width: "100%",
    top: "50%",
    right: "48.15%",
    bottom: "23.08%",
    left: "0%",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    transform: [
      {
        translateY: 0,
      },
      {
        translateX: -48,
      },
    ],
    top: "50%",
    left: "50%",
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
    width: 96,
    height: 18,
  },
  groupView: {
    position: "absolute",
    transform: [
      {
        translateY: 21,
      },
      {
        translateX: -94.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 96,
    height: 18,
  },
  orderSuccessfullyCompleted: {
    position: "absolute",
    height: "23.08%",
    width: "200%",
    top: "26.92%",
    right: "0%",
    bottom: "50%",
    left: "0%",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#838383",
    textAlign: "left",
  },
  redeemNowText: {
    position: "absolute",
    height: "23.08%",
    width: "100%",
    top: "76.92%",
    right: "53.44%",
    bottom: "0%",
    left: "4.23%",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    height: "86.67%",
    width: "63%",
    top: "6.67%",
    right: "32.33%",
    bottom: "6.67%",
    left: "4.67%",
  },
  groupView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 300,
    height: 90,
  },
  contentCopyIcon: {
    position: "absolute",
    top: 48,
    left: 119,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  groupView3: {
    position: "absolute",
    top: 0,
    left: 10,
    width: 300,
    height: 90,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 300,
    height: 90,
  },
  raviRanjanText1: {
    position: "absolute",
    height: "26.92%",
    width: "100%",
    top: "0%",
    right: "56.61%",
    bottom: "73.08%",
    left: "0%",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  couponCodeText1: {
    position: "absolute",
    height: "26.92%",
    width: "100%",
    top: "50%",
    right: "48.15%",
    bottom: "23.08%",
    left: "0%",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  orderSuccessfullyCompleted1: {
    position: "absolute",
    height: "23.08%",
    width: "200%",
    top: "26.92%",
    right: "0%",
    bottom: "50%",
    left: "0%",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#838383",
    textAlign: "left",
  },
  redeemedText: {
    position: "absolute",
    height: "23.08%",
    width: "100%",
    top: "76.92%",
    right: "65.08%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#838383",
    textAlign: "left",
  },
  groupView4: {
    position: "absolute",
    height: "86.67%",
    width: "63%",
    top: "6.67%",
    right: "32.33%",
    bottom: "6.67%",
    left: "4.67%",
  },
  groupView5: {
    position: "absolute",
    top: 0,
    left: 10,
    width: 300,
    height: 90,
  },
  groupView6: {
    position: "absolute",
    top: 194,
    left: 0,
    width: 300,
    height: 90,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 300,
    height: 90,
  },
  dakshSabharwalText: {
    position: "absolute",
    height: "28%",
    width: "100%",
    top: "0%",
    right: "48.74%",
    bottom: "72%",
    left: "0%",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  couponCodeText2: {
    position: "absolute",
    height: "28%",
    width: "100%",
    top: "52%",
    right: "58.82%",
    bottom: "20%",
    left: "0%",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  signedUpSuccessfully: {
    position: "absolute",
    height: "24%",
    width: "100%",
    top: "28%",
    right: "42.02%",
    bottom: "48%",
    left: "0%",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#838383",
    textAlign: "left",
  },
  codeWillBeGeneratedOn1st: {
    position: "absolute",
    height: "20%",
    width: "110%",
    top: "80%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#838383",
    textAlign: "left",
  },
  groupView7: {
    position: "absolute",
    height: "83.33%",
    width: "79.33%",
    top: "6.67%",
    right: "16%",
    bottom: "10%",
    left: "4.67%",
  },
  groupView8: {
    position: "absolute",
    top: 0,
    left: 10,
    width: 300,
    height: 90,
  },
  groupView9: {
    position: "absolute",
    top: 97,
    left: 0,
    width: 300,
    height: 90,
  },
  groupScrollView: {
    position: "absolute",
    top: 356,
    left: 30,
    width: 300,
    flex: 1,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 15,
    borderRadius: 15,
    backgroundColor: "#f6f6f6",
    width: 330,
    height: 332,
    
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 15,
    borderRadius: 15,
    backgroundColor: "#007ba5",
    width: 330,
    height: 210,
    alignItems: "center",
  },
  liner:{
    position: "absolute",
    left: 29,
    height: 1,
    width: 330,
    backgroundColor: "#ffffff",
    bottom: 500,
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
  groupView10: {
    position: "absolute",
    top: 0,
    left: 92,
    width: 167,
    height: 72,
  },
  groupView11: {
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
  contentCopyIcon1: {
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
  groupView12: {
    position: "absolute",
    top: 150,
    left: 15,
    width: 330,
    height: 210,
  },
  groupIcon2: {
    position: "absolute",
    top: 45,
    left: 0,
    width: "100%",
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
  groupPressable1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 48,
    height: 48,
  },
  groupPressable2: {
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
    width: "100%",
    height: 42.24,
  },
  groupView13: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 227,
  },
  groupView14: {
    position: "absolute",
    top: -45,
    left: 0,
    width: "100%",
    height: 227,
  },
  manageReferralsText: {
    position: "absolute",
    top: 54,
    left: 80,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
    width: 242,
    height: 23,
  },
  manageReferalView: {
    position: "relative",
    backgroundColor: "#f6f6f6",
    flex: 1,
    width: "100%",
    height: 820,
    overflow: "hidden",
  },
});

export default ManageReferal;
