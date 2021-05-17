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
						visible={true}
						scale={[0.4, 0.4, 0.4]}
						position={[0, 0, -5]}
						rotation={[0, 90, 0]}
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

				<ViroAmbientLight color="#FFFFFF" />
			</ViroARScene>
		);
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
	secondTarget: {
		source: {
			uri: "https://i.imgur.com/9SxlZmm.jpg",
		},
		orientation: "Up",
		physicalWidth: 0.165, // real world width in meters
	},
});

module.exports = ARCarDemo;
