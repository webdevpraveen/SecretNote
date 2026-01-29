async function encryptMessage(message, password) {
  const enc = new TextEncoder();

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
    ["encrypt"]
  );

  const iv = crypto.getRandomValues(new Uint8Array(12));

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(message)
  );

  return btoa(JSON.stringify({
    iv: Array.from(iv),
    data: Array.from(new Uint8Array(encrypted))
  }));
}

document.getElementById("encryptBtn").addEventListener("click", async () => {
  const message = document.getElementById("message").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!message || !password) {
    alert("Message and secret key are required.");
    return;
  }

  const result = await encryptMessage(message, password);
  document.getElementById("output").value = result;
});
