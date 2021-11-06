'use strict';

const path = require('path');
const isLocal = typeof process.pkg === 'undefined';
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, 'src/blendMode.js'));
const description = 'BioPunks';
const baseUri = 'ipfs://NewUriToReplace';

const layerConfigurations = [
	{
		growEditionSizeTo: 20,
		layersOrder: [
			{ name: 'background_green' },
			{ name: 'face' },
			{ name: 'eyes' },
			{ name: 'hair' },
			{ name: 'mouth' },
			{ name: 'nose' }
		]
	},
	{
		growEditionSizeTo: 30,
		layersOrder: [
			{ name: 'background_rainbow' },
			{ name: 'face' },
			{ name: 'eyes' },
			{ name: 'hair' },
			{ name: 'mouth' },
			{ name: 'nose' }
		]
	}
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
	width: 25,
	height: 25
};

const background = {
	generate: true,
	brightness: '80%'
};

const extraMetadata = {};

const rarityDelimiter = '#';

const uniqueDnaTorrance = 10000;

const preview = {
	thumbPerRow: 5,
	thumbWidth: 50,
	imageRatio: format.width / format.height,
	imageName: 'preview.png'
};

module.exports = {
	format,
	baseUri,
	description,
	background,
	uniqueDnaTorrance,
	layerConfigurations,
	rarityDelimiter,
	preview,
	shuffleLayerConfigurations,
	debugLogs,
	extraMetadata
};
