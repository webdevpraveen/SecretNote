async function decryptMessage(encryptedText, password) {
  const enc = new TextEncoder();
  const dec = new TextDecoder();

  const parsed = JSON.parse(atob(encryptedText));
  const iv = new Uint8Array(parsed.iv);
  const data = new Uint8Array(parsed.data);

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  const key = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: enc.encode("secretnote-salt"),
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );

  return dec.decode(decrypted);
}

document.getElementById("decryptBtn").addEventListener("click", async () => {
  const encrypted = document.getElementById("encrypted").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!encrypted || !password) return;

  try {
    const result = await decryptMessage(encrypted, password);
    document.getElementById("output").value = result;
  } catch {
    alert("Invalid secret key or corrupted message.");
  }
});

/* 📋 Paste from clipboard */
document.getElementById("pasteBtn").addEventListener("click", async () => {
  const text = await navigator.clipboard.readText();
  document.getElementById("encrypted").value = text;
});
