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
				<ViroLightingEnvironment source={require("./res/garage_1k.hdr")} />
				<ViroARPlaneSelector>
					<Viro3DObject
						visible={true}
						scale={[0.4, 0.4, 0.4]}
						position={[0, 0, -5]}
						rotation={[0, 90, 0]}
						source={require("./res/Intergalactic_Spaceship-(Wavefront).obj")}
						type="OBJ"
					/>
				</ViroARPlaneSelector>

				<ViroQuad
					rotation={[-90, 0, 0]}
					position={[0, -0.001, 0]}
					width={2.5}
					height={2.5}
					arShadowReceiver={true}
				/>
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
