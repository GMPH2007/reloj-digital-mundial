import base64
import os

target_dir = r"c:\Users\Misael P\Downloads\reloc dijgital muhdial"
os.chdir(target_dir)

script_path = "script.js"
if os.path.exists(script_path):
    with open(script_path, "r", encoding="utf-8") as f:
        src = f.read()

    # XOR Encryption key for source code
    key = "CHRONOS_CODE_SHIELD_KEY_1234"
    
    # Encode source code to UTF-8 bytes
    src_bytes = src.encode('utf-8')
    
    # Perform XOR on bytes
    enc_bytes = bytearray()
    for i, b in enumerate(src_bytes):
        enc_bytes.append(b ^ ord(key[i % len(key)]))
    
    # Base64 encode the encrypted bytes
    enc_payload = base64.b64encode(enc_bytes).decode('utf-8')

    packed_js = f"""// CHRONOS SYSTEM - EXTREME CODE SHIELD - 100% OBFUSCATED & ENCRYPTED FRONTEND
(function(){{
    const K = "{key}";
    const P = "{enc_payload}";
    const raw = atob(P);
    const len = raw.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {{
        bytes[i] = raw.charCodeAt(i) ^ K.charCodeAt(i % K.length);
    }}
    const src = new TextDecoder().decode(bytes);
    (0, eval)(src);
}})();
"""
    with open(script_path, "w", encoding="utf-8") as f:
        f.write(packed_js)
    print("script.js encrypted and packed successfully with Unicode UTF-8 support!")
else:
    print("script.js not found for packing.")
