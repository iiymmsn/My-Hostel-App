function onScanSuccess(decodedText, decodedResult) {
    document.getElementById('result').innerText = `Scan result: ${decodedText}`;
}

function onScanFailure(error) {
    // handle scan failure
    console.warn(`QR Code scan error: ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", 
    { 
        fps: 10, 
        qrbox: 250,
        experimentalFeatures: {
            useBarCodeDetectorIfSupported: true
        },
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
    },
    false);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);
