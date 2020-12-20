/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable new-cap */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable wrap-iife */
/* eslint-disable no-unused-vars */
(function () {
  let AudioContext;
  const extend = function (child, parent) {
    for (const key in parent) {
      if (hasProp.call(parent, key)) {
        child[key] = parent[key];
      }
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  };
  var hasProp = {}.hasOwnProperty;

  AudioContext = (function () {
    function AudioContext() {
      this.destination = new AudioDestinationNode();
      this.listener = new AudioListener();
    }

    AudioContext.prototype.activeSourceCount = 0;

    AudioContext.prototype.sampleRate = 44100;

    AudioContext.prototype.currentTime = 0;

    AudioContext.prototype.createBuffer = function (channels, length, rate) {
      return new AudioBuffer(channels, length, rate);
    };

    AudioContext.prototype.decodeAudioData = function () {};

    AudioContext.prototype.createBufferSource = function () {
      return new AudioBufferSourceNode();
    };

    AudioContext.prototype.createMediaElementSource = function (mediaElement) {
      return new MediaElementAudioSourceNode(mediaElement);
    };

    AudioContext.prototype.createMediaStreamSource = function () {
      return new MediaStreamAudioSourceNode();
    };

    AudioContext.prototype.createOscillator = function () {
      return new OscillatorNode();
    };

    AudioContext.prototype.createScriptProcessor = function (bufferSize) {
      return new ScriptProcessorNode(bufferSize);
    };

    AudioContext.prototype.createAnalyser = function () {
      return new AnalyserNode();
    };

    AudioContext.prototype.createGain = function () {
      return new GainNode();
    };

    AudioContext.prototype.createDelay = function () {
      return new DelayNode();
    };

    AudioContext.prototype.createBiquadFilter = function () {
      return new BiquadFilterNode();
    };

    AudioContext.prototype.createWaveShaper = function () {
      return new WaveShaperNode();
    };

    AudioContext.prototype.createPanner = function () {
      return new PannerNode();
    };

    AudioContext.prototype.createConvolver = function () {
      return new ConvolverNode();
    };

    AudioContext.prototype.createChannelSplitter = function () {
      return new ChannelSplitterNode();
    };

    AudioContext.prototype.createChannelMerger = function () {
      return new ChannelMergerNode();
    };

    AudioContext.prototype.createDynamicsCompressor = function () {
      return new DynamicsCompressorNode();
    };

    AudioContext.prototype.createWaveTable = function () {
      throw new Error(
        "createWaveTable is obsolete. Use createPeriodicWave instead."
      );
    };

    AudioContext.prototype.createPeriodicWave = function () {
      return new PeriodicWave();
    };

    AudioContext.prototype.createJavaScriptNode = function (bufferSize) {
      return new JavaScriptNode(bufferSize);
    };

    AudioContext.prototype.createGainNode = function () {
      return this.createGain();
    };

    AudioContext.prototype.createDelayNode = function () {
      return this.createDelay();
    };

    return AudioContext;
  })();

  window.AudioContext = AudioContext;
})();
