# 🔐 SecretNote - Encrypt & Decrypt Message Web App  

A simple, secure, client-side web application that allows users to encrypt and decrypt text messages using a shared secret key.

The goal of this project is to demonstrate how modern browser-based cryptography works while keeping the user experience minimal, fast, and privacy-focused.

---

## ✨ Features

- Encrypt plain text into a secure alphanumeric string
- Decrypt encrypted messages back to their original form
- Uses a secret key (password-based encryption)
- Entirely client-side (no backend, no database)
- No data is stored or transmitted anywhere
- Clean and minimal UI
- Works on all modern browsers

---

## 🧠 How It Works

This project uses the **Web Crypto API** provided by modern browsers.

### Encryption
1. User enters a message and a secret key
2. The secret key is converted into a cryptographic key using PBKDF2
3. The message is encrypted using AES-GCM (256-bit)
4. The output is converted into a copyable alphanumeric string

### Decryption
1. User pastes the encrypted message
2. Enters the same secret key used during encryption
3. The encrypted data is decrypted back to the original message

> If the secret key is incorrect, decryption will fail.

---

## 🔐 Security Notes

- Encryption and decryption happen entirely in the browser
- No server is involved at any stage
- No messages or keys are logged, stored, or tracked
- AES-GCM is a modern and secure encryption standard
- This project is meant for educational and demonstration purposes

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- _Vanilla_ JavaScript
- Web Crypto API

No external libraries or frameworks are used.

---

## 📌 Future Improvements

- Password strength indicator
- Option to download encrypted message as a file
- Light/Dark mode toggle
- Optional QR code sharing for encrypted text

---

## 📜 Disclaimer

This project is intended for learning and personal use.  
Do not use it for encrypting highly sensitive or critical information without proper security audits.

---

## 🧑‍💻 Contributing
Contributions are welcome.  
Create an issue or submit a pull request to improve the project.

---

## ⭐ Support
If you find this helpful, consider giving the repo a ⭐.

---
