'use strict';

function checkVersion() {
    if (Number(process.version.slice(1).split('.')[0]) < 12) throw new Error('Node 12.0.0 or higher is required to run PixTools.');
}

checkVersion();