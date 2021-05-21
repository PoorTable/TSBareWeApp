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
						scale={[2, 2, 2]}
						position={[0, 0, -5]}
						rotation={[0, 90, 0]}
						source={require("./res/Сборка стенда.obj")}
						resources={[require("./res/untitled.mtl")]}
						type="OBJ"
						materials="white"
					/>
				</ViroARPlaneSelector>

				<ViroAmbientLight color="#FFFFFF" />
			</ViroARScene>
		);
	},
});

ViroMaterials.createMaterials({
	white: {
		lightingModel: "PBR",
		diffuseTexture: require("./res/stand.png"),
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
