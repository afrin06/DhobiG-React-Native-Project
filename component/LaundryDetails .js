import * as React from "react";
import { useState, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Image,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";

const LaundryDetails = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const inc = () => setCount(prevCount => prevCount + 1);
  const dec = () => setCount(prevCount => prevCount - 1);
  const inc1 = () => setCount(prevCount => prevCount + 1);
  const dec1 = () => setCount(prevCount => prevCount - 1);
  const inc2 = () => setCount(prevCount => prevCount + 1);
  const dec2 = () => setCount(prevCount => prevCount - 1);
  const [plusSquareIconVisible, setPlusSquareIconVisible] = useState(false);
  const [plusSquareIcon1Visible, setPlusSquareIcon1Visible] = useState(false);
  const [bytesizeplusIconVisible, setBytesizeplusIconVisible] = useState(false);

  const openPlusSquareIcon = useCallback(() => {
    setPlusSquareIconVisible(true);
  }, []);

  const closePlusSquareIcon = useCallback(() => {
    setPlusSquareIconVisible(false);
  }, []);

  const openPlusSquareIcon1 = useCallback(() => {
    setPlusSquareIcon1Visible(true);
  }, []);

  const closePlusSquareIcon1 = useCallback(() => {
    setPlusSquareIcon1Visible(false);
  }, []);

  const openBytesizeplusIcon = useCallback(() => {
    setBytesizeplusIconVisible(true);
  }, []);

  const closeBytesizeplusIcon = useCallback(() => {
    setBytesizeplusIconVisible(false);
  }, []);
  return (
    <>
      <View style={{flex:1}}>
        <ScrollView
          contentContainerStyle={{flexGrow:1,height:1100,backgroundColor:"#f6f6f6"}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.groupView}>
            <View style={styles.rectangleView} />
            <Pressable
              style={styles.plusSquarePressable}
              onPress={openPlusSquareIcon}
            ><TouchableOpacity>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/plussquare.png")}
              />
                </TouchableOpacity>
            </Pressable>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle-22.png")}
            />
            <Text style={styles.tShirtText}>T Shirt</Text>
            <Text style={styles.startsAt15200}>Starts at 152.00</Text>
            <Text style={styles.ladiesText}>Ladies</Text>
          </View>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector-34.png")}
          />
          <Text style={styles.fabCoText}>FabCo</Text>
          <View style={styles.groupView1}>
            <Text style={styles.text2}>
              <Text style={styles.text}>4.6</Text>
              <Text style={styles.text1}>{`  • `}</Text>
            </Text>
            <Image
              style={styles.bxbxsStarIcon}
              resizeMode="cover"
              source={require("../assets/bxbxsstar.png")}
            />
            <View style={styles.rectangleView1} />
            <Text style={styles.minText}>15 min</Text>
            <Image
              style={styles.witime2Icon}
              resizeMode="cover"
              source={require("../assets/witime2.png")}
            />
          </View>
          <Pressable
            style={styles.moreInfoPressable}
          ><TouchableOpacity>
            <Text style={styles.moreInfoText}>More info</Text></TouchableOpacity>
          </Pressable>
          <Pressable
            style={styles.seeOurMenu1}
          ><TouchableOpacity>
            <Text style={styles.seeOurMenu}>See our menu</Text></TouchableOpacity>
          </Pressable>
          <Text style={styles.healthyEatingMeansEatingA}>
            Healthy eating means eating a variety of foods that give you the
            nutrients you need to maintain your health, feel good, and have
            energy.
          </Text>
          <Text style={styles.clothesText}>Clothes</Text>
          <View style={styles.groupView2}>
            <ScrollView horizontal contentContainerStyle={{flexGrow:1,width:500}} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
            <View style={styles.rectangleView4} />
            <View style={styles.rectangleView5} />
            <Text style={styles.bestSellerText}>Best Seller</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.gentsText}>Gents</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.ladiesText1}>Ladies</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.kidsText}>Kids</Text></TouchableOpacity>
            <TouchableOpacity><View style={styles.rectangleView6} /></TouchableOpacity>
            <TouchableOpacity><Text style={styles.othersText}>Others</Text></TouchableOpacity></ScrollView>
          </View>
          <View style={styles.rectangleView7} />
          <Image
            style={styles.maskGroupIcon}
            resizeMode="cover"
            source={require("../assets/mask-group1.png")}
          />
          <View style={styles.rectangleView8} />
          <Pressable
            style={styles.plusSquarePressable1}
            onPress={inc1}
          >
            <TouchableOpacity>
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/plussquare.png")}
            /></TouchableOpacity>
          </Pressable>
          <View style={styles.rectangleView9} />
          <Text style={styles.oFFText}>50% OFF</Text>
          <Text style={styles.bulkWashFold}>{`Bulk Wash & Fold`}</Text>
          <Text style={styles.bulkWashIron}>{`Bulk Wash & Iron`}</Text>
          <Text style={styles.kgText}>₹90/kg</Text>
          <Text style={styles.price15200Text}>Price. 152.00</Text>
          <Image
            style={styles.rectangleIcon1}
            resizeMode="cover"
            source={require("../assets/rectangle-143.png")}
          />
          <Text style={styles.bestSellersText}>Best sellers</Text>
          <View style={styles.groupView4}>
            <View style={styles.rectangleView10} />
            <View style={styles.groupView3}>
            <TouchableOpacity><Pressable
                style={styles.bytesizeplusPressable}
                onPress={inc}
              >
                <Image
                  style={styles.icon2}
                  resizeMode="cover"
                  source={require("../assets/bytesizeplus2.png")}
                />
              </Pressable></TouchableOpacity>
              <TouchableOpacity>
              <Pressable onPress={dec}>
              <Image
                style={styles.bytesizeplusIcon}
                resizeMode="cover"
                source={require("../assets/bytesizeplus3.png")}
              /></Pressable></TouchableOpacity>
              <Text style={styles.text3}>{count}</Text>
            </View>
          </View>
          <View style={styles.groupView5}>
            <View style={styles.rectangleView11} />
            <Text style={styles.oFFText1}>30% OFF</Text>
          </View>
        </ScrollView>
        <View style={styles.groupView7}>
          <Pressable style={styles.groupPressable} >
          <TouchableOpacity>
            <View style={styles.rectangleView12} />
            <Image
              style={styles.icroundArrowBackIosIcon}
              resizeMode="cover"
              source={require("../assets/icroundarrowbackios.png")}
            />
            </TouchableOpacity>
          </Pressable>
          <View style={styles.groupView6}>
          <TouchableOpacity>
            <View style={styles.rectangleView13} />
            <Image
              style={styles.wpflikeIcon}
              resizeMode="cover"
              source={require("../assets/wpflike.png")}
            /></TouchableOpacity>
          </View>
          <TouchableOpacity>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-63.png")}
          />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  plusSquareIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  plusSquareIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  plusSquareIcon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  plusSquareIcon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  bytesizeplusIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  bytesizeplusIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 300,
    height: 90,
  },
  icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  plusSquarePressable: {
    position: "absolute",
    left: 252,
    top: 33,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    width: 90,
    height: 90,
  },
  tShirtText: {
    position: "absolute",
    top: 13,
    left: 106,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  startsAt15200: {
    position: "absolute",
    top: 54,
    left: 106,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  ladiesText: {
    position: "absolute",
    top: 35,
    left: 106,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#838383",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 863,
    left: 30,
    width: 300,
    height: 90,
  },
  vectorIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width:"100%",
    height: 339,
  },
  fabCoText: {
    position: "absolute",
    top: 313,
    left: 30,
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  text: {
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#0f0e0e",
  },
  text1: {
    fontFamily: "Helvetica",
    color: "#838383",
  },
  text2: {
    position: "absolute",
    top: 0,
    left: 18,
    fontSize: 15,
    textAlign: "left",
  },
  bxbxsStarIcon: {
    position: "absolute",
    top: 3,
    left: 0,
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  rectangleView1: {
    position: "absolute",
    top: 1,
    left: 63,
    borderRadius: 6,
    width: 46,
    height: 18,
  },
  minText: {
    position: "absolute",
    top: 0,
    left: 82,
    fontSize: 15,
    fontFamily: "Helvetica",
    color: "#838383",
    textAlign: "left",
  },
  witime2Icon: {
    position: "absolute",
    top: 3,
    left: 63,
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  groupView1: {
    position: "absolute",
    top: 360,
    left: 30,
    width: 130,
    height: 25,
  },
  moreInfoText: {
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#007ba5",
    textAlign: "left",
  },
  moreInfoPressable: {
    position: "absolute",
    left: 265,
    top: 326,
  },
  seeOurMenu: {
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#007ba5",
    textAlign: "right",
  },
  seeOurMenu1: {
    position: "absolute",
    left: 233,
    top: 965,
  },
  healthyEatingMeansEatingA: {
    position: "absolute",
    top: 394,
    left: 30,
    fontSize: 15,
    fontFamily: "Helvetica",
    color: "#838383",
    textAlign: "left",
    width: 300,
  },
  clothesText: {
    position: "absolute",
    top: 509,
    left: 30,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 253,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 50,
    height: 35,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#007ba5",
    width: 104,
    height: 35,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 111,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 62,
    height: 35,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 180,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 66,
    height: 35,
  },
  bestSellerText: {
    position: "absolute",
    top: 7,
    left: 16,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  gentsText: {
    position: "absolute",
    top: 7,
    left: 121,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#838383",
    textAlign: "left",
  },
  ladiesText1: {
    position: "absolute",
    top: 7,
    left: 190,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#838383",
    textAlign: "left",
  },
  kidsText: {
    position: "absolute",
    top: 7,
    left: 263,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#838383",
    textAlign: "left",
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 310,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 67,
    height: 35,
  },
  othersText: {
    position: "absolute",
    top: 7,
    left: 320,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#838383",
    textAlign: "left",
  },
  groupView2: {
    position: "absolute",
    top: 552,
    left: 30,
    width: 377,
    height: 35,
  },
  rectangleView7: {
    position: "absolute",
    top: 646,
    left: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 300,
    height: 90,
  },
  maskGroupIcon: {
    position: "absolute",
    top: 646,
    left: 30,
    width: 90,
    height: 90,
  },
  rectangleView8: {
    position: "absolute",
    top: 756,
    left: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 300,
    height: 90,
  },
  icon1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  plusSquarePressable1: {
    position: "absolute",
    left: 278,
    top: 680,
  },
  rectangleView9: {
    position: "absolute",
    top: 708,
    left: 30,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "#ff7000",
    width: 79,
    height: 28,
    opacity: 0.9,
  },
  oFFText: {
    position: "absolute",
    top: 712,
    left: 41,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  bulkWashFold: {
    position: "absolute",
    top: 659,
    left: 136,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  bulkWashIron: {
    position: "absolute",
    top: 769,
    left: 136,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  kgText: {
    position: "absolute",
    top: 700,
    left: 136,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  price15200Text: {
    position: "absolute",
    top: 810,
    left: 136,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  rectangleIcon1: {
    position: "absolute",
    top: 756,
    left: 30,
    borderRadius: 15,
    width: 90,
    height: 90,
  },
  bestSellersText: {
    position: "absolute",
    top: 607,
    left: 31,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#0f0e0e",
    textAlign: "left",
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#f8f8fa",
    width: 88,
    height: 31.01,
  },
  icon2: {
    width: 14,
    height: 13.57,
    overflow: "hidden",
  },
  bytesizeplusPressable: {
    position: "absolute",
    left: 50,
    top: 1.94,
  },
  bytesizeplusIcon: {
    position: "absolute",
    top: 1.94,
    left: 0,
    width: 14,
    height: 13.57,
    overflow: "hidden",
  },
  text3: {
    position: "absolute",
    top: 0,
    left: 29,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Helvetica",
    color: "#18172b",
    textAlign: "center",
    width: 6,
    height: 17.44,
  },
  groupView3: {
    position: "absolute",
    top: 6.78,
    left: 12,
    width: 64,
    height: 17.44,
  },
  groupView4: {
    position: "absolute",
    top: 794,
    left: 232,
    width: 88,
    height: 31.01,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "#ff7000",
    width: 79,
    height: 28,
    opacity: 0.9,
  },
  oFFText1: {
    position: "absolute",
    top: 4,
    left: 11,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupView5: {
    position: "absolute",
    top: 818,
    left: 30,
    width: 79,
    height: 28,
  },
  groupScrollView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 407,
    flex: 1,
  },
  rectangleView12: {
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
  rectangleView13: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    width: 48,
    height: 48,
  },
  wpflikeIcon: {
    position: "absolute",
    top: 12,
    left: 12,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupView6: {
    position: "absolute",
    top: 0,
    left: 188,
    width: 48,
    height: 48,
  },
  groupIcon: {
    position: "absolute",
    top: 0,
    left: 252,
    width: 48,
    height: 48,
  },
  groupView7: {
    position: "absolute",
    top: 57,
    left: 30,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 300,
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
    width: 14.72,
    height: 10.56,
  },
  cellularConnectionIcon: {
    position: "relative",
    width: 16.32,
    height: 10.24,
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
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 123, 165, 0)",
    height: 42.24,
  },
  laundryDetailsView: {
    position: "relative",
    backgroundColor: "#f6f6f6",
    flex: 1,
    width: "100%",
    height: 1136,
    overflow: "hidden",
  },
});

export default LaundryDetails;
