"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
	ViroARScene,
	ViroMaterials,
	ViroNode,
	ViroAnimations,
	Viro3DObject,
	ViroLightingEnvironment,
	ViroARImageMarker,
	ViroARTrackingTargets,
	ViroSphere,
	ViroSpotLight,
	ViroQuad,
	ViroAmbientLight,
	ViroARPlane,
	ViroARPlaneSelector,
} from "react-viro";

var createReactClass = require("create-react-class");

var ARCarDemo = createReactClass({
	getInitialState() {
		return {
			texture: "white",
			playAnim: false,
			animateCar: false,
			tapWhite: false,
			tapBlue: false,
			tapGrey: false,
			tapRed: false,
			tapYellow: false,
		};
	},

	render: function () {
		return (
			<ViroARScene>
				<ViroARPlaneSelector>
					<Viro3DObject
						scale={[-85, -85, -85]}
						source={require("./res/Crate.obj")}
						resources={[
							require("./res/5.png"),
							require("./res/6.png"),
							require("./res/7.png"),
							require("./res/8.png"),
							require("./res/9.png"),
							require("./res/10.png"),
							require("./res/11.png"),
							require("./res/12.png"),
						]}
						type="OBJ"
					/>
				</ViroARPlaneSelector>
			</ViroARScene>
		);
	},
	_onAnchorFound() {
		this.setState({
			animateCar: true,
		});
	},
	_toggleButtons() {
		this.setState({
			animName: this.state.animName == "scaleUp" ? "scaleDown" : "scaleUp",
			playAnim: true,
		});
	},
	_selectWhite() {
		this.setState({
			texture: "white",
			tapWhite: true,
		});
	},
	_selectBlue() {
		this.setState({
			texture: "blue",
			tapBlue: true,
		});
	},
	_selectGrey() {
		this.setState({
			texture: "grey",
			tapGrey: true,
		});
	},
	_selectRed() {
		this.setState({
			texture: "red",
			tapRed: true,
		});
	},
	_selectYellow() {
		this.setState({
			texture: "yellow",
			tapYellow: true,
		});
	},
	_animateFinished() {
		this.setState({
			tapWhite: false,
			tapBlue: false,
			tapGrey: false,
			tapRed: false,
			tapYellow: false,
		});
	},
});

ViroARTrackingTargets.createTargets({
	logo: {
		source: {
			uri: "https://i.imgur.com/G7gHLaX.jpg",
		},
		orientation: "Up",
		physicalWidth: 0.165, // real world width in meters
	},
});

ViroAnimations.registerAnimations({
	scaleUp: {
		properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
		duration: 500,
		easing: "bounce",
	},
	scaleDown: { properties: { scaleX: 0, scaleY: 0, scaleZ: 0 }, duration: 200 },
	scaleCar: {
		properties: { scaleX: 0.09, scaleY: 0.09, scaleZ: 0.09 },
		duration: 500,
		easing: "bounce",
	},
	scaleSphereUp: {
		properties: { scaleX: 0.8, scaleY: 0.8, scaleZ: 0.8 },
		duration: 50,
		easing: "easeineaseout",
	},
	scaleSphereDown: {
		properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
		duration: 50,
		easing: "easeineaseout",
	},
	tapAnimation: [["scaleSphereUp", "scaleSphereDown"]],
});

module.exports = ARCarDemo;
