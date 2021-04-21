import Rive from 'rive-canvas';

/* eslint-disable no-undef */
let RiveModule = null;
let isLoadingModule = false;
const callbacks = [];

function loadRiveModule(cb) {
  if (isLoadingModule) {
    callbacks.push(cb);
  } else if (RiveModule) {
    cb(RiveModule);
  } else {
    console.log('loading module');
    isLoadingModule = true;

    Rive({
      locateFile: (file) => `https://unpkg.com/rive-canvas@0.6.10/${file}`,
    }).then((module) => {
      isLoadingModule = false;
      RiveModule = module;
      cb(RiveModule);
      for (let cb of callbacks) {
        cb(RiveModule);
      }
    });
  }
}

export default function loadRive(url) {
  return new Promise((resolve, reject) => {
    loadRiveModule((rive) => {
      const { load } = rive;
      const assetRequest = new Request(url);
      fetch(assetRequest)
        .then((response) => {
          return response.arrayBuffer();
        })
        .then((buffer) => {
          // Load Rive file from buffer.
          const file = load(new Uint8Array(buffer));
          resolve({ rive, file });
        });
    });
  });
}