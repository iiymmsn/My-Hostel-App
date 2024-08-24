function onScanSuccess(decodedText, decodedResult) {
    // Display the decoded text in the result element
    document.getElementById('result').innerText = `Scan result: ${decodedText}`;

    // Show the button and set its action to redirect to the decoded URL
    const qrLinkButton = document.getElementById('qr-link-btn');
    qrLinkButton.style.display = 'block';
    qrLinkButton.onclick = () => {
        window.location.href = decodedText;
    };
}

function onScanFailure(error) {
    // Handle scan failure and log the error to the console
    console.warn(`QR Code scan error: ${error}`);
}

// Create an instance of the Html5QrcodeScanner
let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",  // ID of the element where the scanner should be rendered
    { 
        fps: 10,  // Frames per second for scanning
        qrbox: { width: 250, height: 250 },  // Size of the QR code scanning box
        experimentalFeatures: {
            useBarCodeDetectorIfSupported: true  // Use BarcodeDetector API if supported
        },
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]  // Scan type (camera)
    },
    false);  // verbose: false (no verbose logging)

// Start rendering the scanner and define callbacks for success and failure
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
