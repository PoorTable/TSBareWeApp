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

var sharedProps = {
	apiKey: "API_KEY_HERE",
};

var InitialARScene = require("./js/HelloWorldSceneAR");
var InitialVRScene = require("./js/HelloWorldScene");
var ThirdARScene = require("./js/ThirdScene");

var UNSET = AR_NAVIGATOR_TYPE;
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";
var AR1_NAVIGATOR_TYPE = "AR1";

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
							uri: "https://i.imgur.com/G7gHLaX.jpg",
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

	_getVRNavigator() {
		return (
			<ViroARSceneNavigator
				{...this.state.sharedProps}
				initialScene={{ scene: InitialVRScene }}
			/>
		);
	}

	_getExperienceButtonOnPress(navigatorType) {
		return () => {
			this.setState({
				navigatorType: navigatorType,
			});
		};
	}

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
		alignItems: "center",
	},
	button: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

module.exports = ViroSample;
