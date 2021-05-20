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
			playAnim: false,
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
						source={require("./res/Handgun_obj.obj")}
						resources={[require("./res/handgun_S.jpg")]}
						type="OBJ"
						materials="white"
					/>
				</ViroARPlaneSelector>
			</ViroARScene>
		);
	},
});

ViroMaterials.createMaterials({
	white: {
		lightingModel: "PBR",
		diffuseTexture: require("./res/handgun_S.jpg"),
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
