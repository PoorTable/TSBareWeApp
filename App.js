/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from "react";
import {
	AppRegistry,
	Text,
	View,
	StyleSheet,
	PixelRatio,
	TouchableHighlight,
	ScrollView,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

import Swiper from "react-native-swiper";

import { ViroVRSceneNavigator, ViroARSceneNavigator } from "react-viro";

/*
 TODO: Insert your API key below
 */
var sharedProps = {
	apiKey: "API_KEY_HERE",
};

// Sets the default scene you want for AR and VR
var InitialARScene = require("./js/HelloWorldSceneAR");
var InitialVRScene = require("./js/HelloWorldScene");
var ThirdARScene = require("./js/ThirdScene");

var UNSET = AR_NAVIGATOR_TYPE;
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";
var AR1_NAVIGATOR_TYPE = "AR1";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
	constructor() {
		super();

		this.state = {
			navigatorType: defaultNavigatorType,
			sharedProps: sharedProps,
		};
		this._getExperienceSelector = this._getExperienceSelector.bind(this);
		this._getARNavigator = this._getARNavigator.bind(this);
		this._getVRNavigator = this._getVRNavigator.bind(this);
		this._getExperienceButtonOnPress =
			this._getExperienceButtonOnPress.bind(this);
		this._exitViro = this._exitViro.bind(this);
	}

	// Replace this function with the contents of _getVRNavigator() or _getARNavigator()
	// if you are building a specific type of experience.
	render() {
		if (this.state.navigatorType == UNSET) {
			return this._getExperienceSelector();
		} else if (this.state.navigatorType == VR_NAVIGATOR_TYPE) {
			return this._getVRNavigator();
		} else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
			return this._getARNavigator();
		} else if (this.state.navigatorType == AR1_NAVIGATOR_TYPE) {
			return this._getAR1Navigator();
		}
	}

	// Presents the user with a choice of an AR or VR experience
	_getExperienceSelector() {
		return (
			<Swiper style={styles.wrapper} showsButtons={true}>
				<View style={styles.slide1}>
					<ImageBackground
						source={{
							uri: "https://reactjs.org/logo-og.png",
						}}
						style={styles.image}
					>
						<TouchableOpacity
							style={styles.Button}
							onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
						>
							<Text style={styles.text}>БГ-БПМ-01</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
				<View style={styles.slide2}>
					<ImageBackground
						source={{
							uri: "https://reactjs.org/logo-og.png",
						}}
						style={styles.image}
					>
						<TouchableOpacity
							onPress={this._getExperienceButtonOnPress(VR_NAVIGATOR_TYPE)}
						>
							<Text style={styles.text}>abc</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
				<View style={styles.slide3}>
					<ImageBackground
						source={{
							uri: "https://reactjs.org/logo-og.png",
						}}
						style={styles.image}
					>
						<TouchableOpacity
							onPress={this._getExperienceButtonOnPress(AR1_NAVIGATOR_TYPE)}
						>
							<Text style={styles.text}>And Simple</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
			</Swiper>
		);
	}

	// Returns the ViroARSceneNavigator which will start the AR experience
	_getARNavigator() {
		return (
			<ViroARSceneNavigator
				{...this.state.sharedProps}
				initialScene={{ scene: InitialARScene }}
			/>
		);
	}

	_getAR1Navigator() {
		return (
			<ViroARSceneNavigator
				{...this.state.sharedProps}
				initialScene={{ scene: ThirdARScene }}
			/>
		);
	}

	// Returns the ViroSceneNavigator which will start the VR experience
	_getVRNavigator() {
		return (
			<ViroARSceneNavigator
				{...this.state.sharedProps}
				initialScene={{ scene: InitialVRScene }}
			/>
		);
	}

	// This function returns an anonymous/lambda function to be used
	// by the experience selector buttons
	_getExperienceButtonOnPress(navigatorType) {
		return () => {
			this.setState({
				navigatorType: navigatorType,
			});
		};
	}

	// This function "exits" Viro by setting the navigatorType to UNSET.
	_exitViro() {
		this.setState({
			navigatorType: UNSET,
		});
	}
}

const styles = StyleSheet.create({
	wrapper: {},
	slide1: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	slide2: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	slide3: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "#fff",
		fontSize: 30,
		fontWeight: "bold",
	},
	image: {
		flex: 1,
		width: "100%",
		resizeMode: "cover",
		justifyContent: "center",
	},
	button: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

var localStyles = StyleSheet.create({
	viroContainer: {
		flex: 1,
		backgroundColor: "black",
		flexDirection: "row",
	},
	outer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "black",
	},
	inner: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "black",
	},
	titleText: {
		paddingTop: 30,
		paddingBottom: 20,
		color: "#fff",
		textAlign: "center",
		fontSize: 25,
	},
	buttonText: {
		color: "#fff",
		textAlign: "center",
		fontSize: 20,
	},
	buttons: {
		flex: 1,
		height: "95%",
		width: "95%",
		backgroundColor: "#68a0cf",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#fffaaa",
	},
	exitButton: {
		height: 50,
		width: 100,
		paddingTop: 10,
		paddingBottom: 10,
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: "#68a0cf",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#fff",
	},
});

module.exports = ViroSample;
