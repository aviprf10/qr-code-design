import React from 'react';
import QRCode from 'qrcode.react';
import '../src/App.css';

const QRCodeComponent = () => {
  return (
    <div style={styles.container}>
        <div style={styles.qrCodeSection}>
            <div style={styles.qrCodeContainer}>
                <QRCode value="https://www.frontendmentor.io" size={getQRCodeSize()} fgColor="#ffffff"  bgColor="transparent" />
            </div>
            <h2 style={styles.title}>Improve your front-end<br/> skills by building projects</h2>
            <p style={styles.pera}>Scan the QR code to visit Frontend<br/> Mentor and take your coding skills to<br/> the next level</p>
        </div>    
    </div>
  );
};

const getQRCodeSize = () => {
  const smallScreenSize = 150;
  const mediumScreenSize = 256;
  const largeScreenSize = 150;
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth <= 600) {
    return smallScreenSize;
  } else if (screenWidth <= 1024) {
    return mediumScreenSize;
  } else {
    return largeScreenSize;
  }
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#d5e0ef',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Grey background for desktop
  },
  qrCodeContainer: {
    backgroundColor: '#4285f4', // Blue background for QR code container
    padding: '50px',
    borderRadius: '10px',
  },
  qrCodeSection:{
    backgroundColor: '#fff', // Blue background for QR code container
    padding: '20px',
    borderRadius: '10px',
  },
  title:{
    fontSize:'20px',
    textAlign:'center',
  },
  pera:{
    textAlign:'center',
  }
};

export default QRCodeComponent;
