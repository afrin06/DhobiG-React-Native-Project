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

const Setting = () => {

  return (
    <View style={{flex:1}}>
      <ScrollView
        contentContainerStyle={{flexGrow:1,position:"relative",top:370,backgroundColor:"#f6f6f6",height:1100,width:"90%",marginLeft:20}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <Text style={styles.topUpYourWallet}>Top-up your wallet</Text>
          <Image
            style={styles.lineIcon}
            resizeMode="cover"
            source={require("../assets/line-4.png")}
          />
          <Text style={styles.dhobiGCash}>Dhobi G Cash</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector7.png")}
          />
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector8.png")}
          />
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../assets/vector10.png")}
          />
          <Image
            style={styles.coinsIcon}
            resizeMode="cover"
            source={require("../assets/coins.png")}
          />
          <Image
            style={styles.creditCardIcon}
            resizeMode="cover"
            source={require("../assets/credit-card.png")}
          />
          <TouchableOpacity>
          <View style={styles.frameView}>
            <Text style={styles.addCashText}>Add cash</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={styles.arrowRightIcon}
            resizeMode="cover"
            source={require("../assets/arrow-right11.png")}
          />
          </TouchableOpacity>
        </View>
        <Pressable
          style={styles.groupPressable6}
        >
          <View style={styles.groupView8}>
            <Pressable
              style={styles.groupPressable}
            >
              <View style={styles.rectangleView1} />
              <View style={styles.groupView1}>
                <Text style={styles.addressesText}>Addresses</Text>
                <TouchableOpacity>
                <Image
                  style={styles.arrowRightIcon1}
                  resizeMode="cover"
                  source={require("../assets/arrow-right.png")}
                />
                </TouchableOpacity>
              </View>
            </Pressable>
            <Pressable
              style={styles.groupPressable1}
            >
              <View style={styles.rectangleView2} />
              <View style={styles.groupView2}>
                <Text style={styles.ordersText}>Orders</Text>
                <TouchableOpacity>
                <Image
                  style={styles.arrowRightIcon2}
                  resizeMode="cover"
                  source={require("../assets/arrow-right.png")}
                />
                </TouchableOpacity>
              </View>
            </Pressable>
            <Pressable
              style={styles.groupPressable2}
            >
              <View style={styles.rectangleView3} />
              <View style={styles.groupView3}>
                <Text style={styles.profileText}>Profile</Text>
                <TouchableOpacity>
                <Image
                  style={styles.arrowRightIcon3}
                  resizeMode="cover"
                  source={require("../assets/arrow-right.png")}
                />
                </TouchableOpacity>
              </View>
            </Pressable>
            <TouchableOpacity
              style={styles.groupTouchableOpacity}
              activeOpacity={0.2}
            >
              <View style={styles.rectangleView4} />
              <View style={styles.groupView4}>
                <Text style={styles.notificationsText}>Notifications</Text>
                <TouchableOpacity>
                <Image
                  style={styles.arrowRightIcon4}
                  resizeMode="cover"
                  source={require("../assets/arrow-right.png")}
                />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <Pressable
              style={styles.groupPressable3}
            >
              <View style={styles.rectangleView5} />
              <View style={styles.groupView5}>
                <Text
                  style={styles.customerSupportFAQ}
                >{`Customer Support & FAQ`}</Text>
                <TouchableOpacity>
                <Image
                  style={styles.arrowRightIcon5}
                  resizeMode="cover"
                  source={require("../assets/arrow-right.png")}
                />
                </TouchableOpacity>
              </View>
            </Pressable>
            <Pressable
              style={styles.groupPressable4}
            >
              <View style={styles.rectangleView6} />
              <View style={styles.groupView6}>
                <Text style={styles.generalInfoText}>General Info</Text>
                <TouchableOpacity>
                <Image
                  style={styles.arrowRightIcon6}
                  resizeMode="cover"
                  source={require("../assets/arrow-right.png")}
                />
                </TouchableOpacity>
              </View>
            </Pressable>
            <Pressable
              style={styles.groupPressable5}
            >
              <View style={styles.rectangleView7} />
              <View style={styles.groupView7}>
                <Text style={styles.manageReferralsText}>Manage Referrals</Text>
                <TouchableOpacity>
                <Image
                  style={styles.arrowRightIcon7}
                  resizeMode="cover"
                  source={require("../assets/arrow-right.png")}
                />
                </TouchableOpacity>
              </View>
            </Pressable>
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
          <Image
            style={styles.image4Icon}
            resizeMode="cover"
            source={require("../assets/image-4.png")}
          />
          <Image
            style={styles.image5Icon}
            resizeMode="cover"
            source={require("../assets/image-5.png")}
          />
          <Image
            style={styles.image6Icon}
            resizeMode="cover"
            source={require("../assets/image-6.png")}
          />
          <Image
            style={styles.image7Icon}
            resizeMode="cover"
            source={require("../assets/image-7.png")}
          />
        </Pressable>
        </View>
      </ScrollView>
      <View style={styles.rectangleView8} />
      <View style={styles.groupView11}>
        <View style={styles.rectangleView9} />
        <View style={styles.groupView10}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-1221.png")}
          />
          <View style={styles.groupView9}>
            <Text style={styles.referAFriend}>Refer A Friend!</Text>
            <Text style={styles.referDhobiGToAFriendAnd}>
              Refer Dhobi G to a friend and get 25% off on your Next order!
            </Text>
          </View>
        </View>
        <TouchableOpacity>
        <View style={styles.frameView1}>
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
          source={require("../assets/whatsapp2.png")}
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
      <Pressable
        style={styles.groupPressable7}
      >
        <TouchableOpacity>
        <View style={styles.rectangleView10} />
        <Text style={styles.lOGOUTText}>LOGOUT</Text>
        </TouchableOpacity>
      </Pressable>
      <View style={styles.groupView15}>
        <View style={styles.groupView14}>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group-1773.png")}
          />
          <View style={styles.groupView13}>
            <View style={styles.groupView12}>
              <Text style={styles.settingText}>Setting</Text>
              <Pressable
                style={styles.groupPressable8}
              ><TouchableOpacity>
                <View style={styles.rectangleView11} />
                <Image
                  style={styles.icroundArrowBackIosIcon}
                  resizeMode="cover"
                  source={require("../assets/icroundarrowbackios4.png")}
                />
                </TouchableOpacity>
              </Pressable>
            </View>
          </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 1,
    borderRadius: 15,
    backgroundColor: "rgba(111, 207, 151, 0.5)",
    height: 102,
  },
  topUpYourWallet: {
    position: "absolute",
    top: 61,
    left: 12,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#0f0e0e",
    textAlign: "center",
  },
  lineIcon: {
    position: "absolute",
    top: 50.5,
    left: 0,
    width: 360,
    height: 0.55,
  },
  dhobiGCash: {
    position: "absolute",
    top: 16,
    left: 71,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#0f0e0e",
    textAlign: "center",
  },
  vectorIcon: {
    position: "absolute",
    top: 3,
    left: 52,
    width: 5,
    height: 8,
  },
  vectorIcon1: {
    position: "absolute",
    top: 3,
    left: 48,
    width: 8,
    height: 8,
  },
  vectorIcon2: {
    position: "absolute",
    top: 4,
    left: 49,
    width: 7,
    height: 7,
  },
  vectorIcon3: {
    position: "absolute",
    top: 4,
    left: 51,
    width: 1,
    height: 4,
  },
  coinsIcon: {
    position: "absolute",
    top: 4.3,
    left: 32.3,
    width: 28.7,
    height: 26.22,
  },
  creditCardIcon: {
    position: "absolute",
    top: 20.93,
    left: 13,
    width: 38.69,
    height: 24.1,
  },
  addCashText: {
    position: "absolute",
    top: 3,
    left: 6,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#0f0e0e",
    textAlign: "center",
  },
  frameView: {
    position: "absolute",
    top: 61,
    left: 234,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0f0e0e",
    borderWidth: 1,
    width: 79,
    height: 28,
    overflow: "hidden",
  },
  arrowRightIcon: {
    position: "absolute",
    top: 16,
    left: 289,
    width: 16,
    height: 30,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 102,
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
  addressesText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontFamily: "Poppins",
    color: "#0f0e0e",
    textAlign: "left",
    width: 151,
    height: 21,
  },
  arrowRightIcon1: {
    position: "absolute",
    top: 2,
    left: 238.13,
    width: 8.87,
    height: 17.74,
    overflow: "hidden",
  },
  groupView1: {
    position: "absolute",
    top: 17,
    left: 63,
    width: 247,
    height: 21,
  },
  groupPressable: {
    position: "absolute",
    top: 0,
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
  ordersText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontFamily: "Poppins",
    color: "#0f0e0e",
    textAlign: "left",
    width: 151,
    height: 21,
  },
  arrowRightIcon2: {
    position: "absolute",
    top: 2,
    left: 238.13,
    width: 8.87,
    height: 17.74,
    overflow: "hidden",
  },
  groupView2: {
    position: "absolute",
    top: 17,
    left: 63,
    width: 247,
    height: 21,
  },
  groupPressable1: {
    position: "absolute",
    top: 63,
    left: 0,
    width: 330,
    height: 55,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 330,
    height: 55,
  },
  profileText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontFamily: "Poppins",
    color: "#0f0e0e",
    textAlign: "left",
    width: 151,
    height: 21,
  },
  arrowRightIcon3: {
    position: "absolute",
    top: 2,
    left: 238.13,
    width: 8.87,
    height: 17.74,
    overflow: "hidden",
  },
  groupView3: {
    position: "absolute",
    top: 17,
    left: 63,
    width: 247,
    height: 21,
  },
  groupPressable2: {
    position: "absolute",
    top: 126,
    left: 0,
    width: 330,
    height: 55,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 330,
    height: 55,
  },
  notificationsText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontFamily: "Poppins",
    color: "#0f0e0e",
    textAlign: "left",
    width: 151,
    height: 21,
  },
  arrowRightIcon4: {
    position: "absolute",
    top: 2,
    left: 238.13,
    width: 8.87,
    height: 17.74,
    overflow: "hidden",
  },
  groupView4: {
    position: "absolute",
    top: 17,
    left: 63,
    width: 247,
    height: 21,
  },
  groupTouchableOpacity: {
    position: "absolute",
    top: 189,
    left: 0,
    width: 330,
    height: 55,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 330,
    height: 55,
  },
  customerSupportFAQ: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontFamily: "Poppins",
    color: "#0f0e0e",
    textAlign: "left",
    width: 223,
    height: 21,
  },
  arrowRightIcon5: {
    position: "absolute",
    top: 2,
    left: 238.13,
    width: 8.87,
    height: 17.74,
    overflow: "hidden",
  },
  groupView5: {
    position: "absolute",
    top: 17,
    left: 63,
    width: 247,
    height: 21,
  },
  groupPressable3: {
    position: "absolute",
    top: 252,
    left: 0,
    width: 330,
    height: 55,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 330,
    height: 55,
  },
  generalInfoText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontFamily: "Poppins",
    color: "#0f0e0e",
    textAlign: "left",
    width: 151,
    height: 21,
  },
  arrowRightIcon6: {
    position: "absolute",
    top: 2,
    left: 238.13,
    width: 8.87,
    height: 17.74,
    overflow: "hidden",
  },
  groupView6: {
    position: "absolute",
    top: 17,
    left: 63,
    width: 247,
    height: 21,
  },
  groupPressable4: {
    position: "absolute",
    top: 315,
    left: 0,
    width: 330,
    height: 55,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 330,
    height: 55,
  },
  manageReferralsText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontFamily: "Poppins",
    color: "#0f0e0e",
    textAlign: "left",
    width: 151,
    height: 21,
  },
  arrowRightIcon7: {
    position: "absolute",
    top: 2,
    left: 238.13,
    width: 8.87,
    height: 17.74,
    overflow: "hidden",
  },
  groupView7: {
    position: "absolute",
    top: 17,
    left: 63,
    width: 247,
    height: 21,
  },
  groupPressable5: {
    position: "absolute",
    top: 378,
    left: 0,
    width: 330,
    height: 55,
  },
  groupView8: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 330,
    height: 433,
    marginLeft:10,
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
  image4Icon: {
    position: "absolute",
    top: 199,
    left: 17,
    width: 32,
    height: 32,
  },
  image5Icon: {
    position: "absolute",
    top: 261,
    left: 17,
    width: 32,
    height: 32,
  },
  image6Icon: {
    position: "absolute",
    top: 323,
    left: 17,
    width: 32,
    height: 32,
  },
  image7Icon: {
    position: "absolute",
    top: 388,
    left: 17,
    width: 32,
    height: 32,
  },
  groupPressable6: {
    position: "absolute",
    top: 120,
    left: 0,
    width: 330,
    height: 433,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#007ba5",
    width: 330,
    height: 210,
  },
  lineIcon1: {
    position: "absolute",
    top: 104.5,
    left: 0,
    width: 330,
    height: 0.55,
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
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  referDhobiGToAFriendAnd: {
    position: "absolute",
    top: 25,
    left: 0,
    fontSize: 11.5,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
    width: 167,
    height: 47,
  },
  groupView9: {
    position: "absolute",
    top: 0,
    left: 92,
    width: 167,
    height: 72,
  },
  groupView10: {
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
    fontFamily: "Poppins",
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
  frameView1: {
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
    fontFamily: "Poppins",
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
  liner:{
    position: "absolute",
    left: 29,
    height: 1,
    width: 330,
    backgroundColor: "#ffffff",
    bottom: 510,
  },
  groupView11: {
    position: "absolute",
    top: 145,
    left: 15,
    width: 330,
    height: 210,
    marginLeft:15,
  },
  rectangleView10: {
    position: "absolute",
    bottom: -80,
    left: 15,
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
  lOGOUTText: {
    position: "absolute",
    bottom: -60,
    left: 130,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  groupPressable7: {
    position: "absolute",
    bottom: 65,
    left: 30,
    width: 300,
    height: 60,
  },
  groupIcon2: {
    position: "absolute",
    top: 45,
    left: 0,
    width: "100%",
    height: 227,
  },
  settingText: {
    position: "absolute",
    top: 11,
    left: 60,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
    width: 242,
    height: 30,
  },
  rectangleView11: {
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
  groupPressable8: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 48,
    height: 48,
  },
  groupView12: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 287,
    height: 48,
  },
  groupView13: {
    position: "absolute",
    top: 90,
    left: 14,
    width: 287,
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
    position: "absolute",
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
    position: "relative",
    marginLeft:280,
    width: 14.72,
    height: 10.56,
    top:17,
  },
  cellularConnectionIcon: {
    position: "relative",
    marginLeft:300,
    width: 16.32,
    height: 10.24,
    top:7,
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
    fontFamily: "Cabin",
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
    width: 360,
    height: 42.24,
  },
  groupView14: {
    position: "absolute",
    top: 0,
    left: 0,
    width:"100%",
    height: 227,
  },
  groupView15: {
    position: "absolute",
    top: -45,
    left: 0,
    width: "100%",
    height: 227,
  },
});

export default Setting;
