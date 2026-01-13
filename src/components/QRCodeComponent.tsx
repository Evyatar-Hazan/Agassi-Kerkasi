import React, { useRef } from 'react';
import QRCode from 'qrcode';
import Button from './Button';
import styles from './QRCodeComponent.module.css';

interface QRCodeComponentProps {
  value: string;
  label?: string;
  showDownload?: boolean;
}

/**
 * QRCodeComponent
 * Generates and displays QR codes
 * Supports downloading the QR code as an image
 */
const QRCodeComponent: React.FC<QRCodeComponentProps> = ({
  value,
  label = 'סרוק כדי ליצור קשר',
  showDownload = true,
}) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const [qrImage, setQrImage] = React.useState<string>('');

  React.useEffect(() => {
    QRCode.toDataURL(value, {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      width: 256,
      margin: 1,
      color: {
        dark: '#1a1a1a',
        light: '#ffffff',
      },
    })
      .then((url: string) => setQrImage(url))
      .catch(() => console.error('Error generating QR code'));
  }, [value]);

  const handleDownload = (): void => {
    const link = document.createElement('a');
    link.href = qrImage;
    link.download = 'agassi-kerkasi-qr.png';
    link.click();
  };

  return (
    <div className={styles.wrapper}>
      <div ref={qrRef} className={styles.container}>
        {qrImage && (
          <img src={qrImage} alt="QR Code" style={{ display: 'block' }} />
        )}
      </div>
      <p className={styles.label}>{label}</p>
      {showDownload && (
        <Button
          onClick={handleDownload}
          variant="outline"
          size="small"
          ariaLabel="הורדת קוד QR כתמונה"
        >
          הורדה
        </Button>
      )}
    </div>
  );
};

export default QRCodeComponent;
