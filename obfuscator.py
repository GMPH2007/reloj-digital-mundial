import json
import base64
import os

# Plain database entries matching the latest script.js updates
CITIES_DB = [
    { "name": "Londres", "country": "Reino Unido", "timezone": "Europe/London", "abbr": "LON", "x": 395, "y": 125, "x_detail": 408, "y_detail": 376 },
    { "name": "París", "country": "Francia", "timezone": "Europe/Paris", "abbr": "PAR", "x": 405, "y": 132, "x_detail": 418, "y_detail": 388 },
    { "name": "Madrid", "country": "España", "timezone": "Europe/Madrid", "abbr": "MAD", "x": 393, "y": 145, "x_detail": 405, "y_detail": 405 },
    { "name": "Berlín", "country": "Alemania", "timezone": "Europe/Berlin", "abbr": "BER", "x": 415, "y": 125, "x_detail": 428, "y_detail": 380 },
    { "name": "Moscú", "country": "Rusia", "timezone": "Europe/Moscow", "abbr": "MOW", "x": 465, "y": 110, "x_detail": 472, "y_detail": 358 },
    { "name": "Dubái", "country": "Emiratos Árabes", "timezone": "Asia/Dubai", "abbr": "DXB", "x": 495, "y": 185, "x_detail": 520, "y_detail": 458 },
    { "name": "Nueva Delhi", "country": "India", "timezone": "Asia/Kolkata", "abbr": "DEL", "x": 535, "y": 175, "x_detail": 575, "y_detail": 462 },
    { "name": "Singapur", "country": "Singapur", "timezone": "Asia/Singapore", "abbr": "SIN", "x": 575, "y": 235, "x_detail": 622, "y_detail": 545 },
    { "name": "Tokio", "country": "Japón", "timezone": "Asia/Tokyo", "abbr": "TYO", "x": 635, "y": 140, "x_detail": 692, "y_detail": 378 },
    { "name": "Sídney", "country": "Australia", "timezone": "Australia/Sydney", "abbr": "SYD", "x": 665, "y": 325, "x_detail": 752, "y_detail": 648 },
    { "name": "Auckland", "country": "Nueva Zelanda", "timezone": "Pacific/Auckland", "abbr": "AKL", "x": 715, "y": 355, "x_detail": 792, "y_detail": 678 },
    { "name": "El Cairo", "country": "Egipto", "timezone": "Africa/Cairo", "abbr": "CAI", "x": 445, "y": 175, "x_detail": 472, "y_detail": 442 },
    { "name": "Nairobi", "country": "Kenia", "timezone": "Africa/Nairobi", "abbr": "NBO", "x": 460, "y": 220, "x_detail": 498, "y_detail": 518 },
    { "name": "Ciudad del Cabo", "country": "Sudáfrica", "timezone": "Africa/Johannesburg", "abbr": "CPT", "x": 445, "y": 295, "x_detail": 468, "y_detail": 624 },
    { "name": "Nueva York", "country": "Estados Unidos", "timezone": "America/New_York", "abbr": "NYC", "x": 230, "y": 145, "x_detail": 218, "y_detail": 398 },
    { "name": "Los Ángeles", "country": "Estados Unidos", "timezone": "America/Los_Angeles", "abbr": "LAX", "x": 155, "y": 155, "x_detail": 135, "y_detail": 422 },
    { "name": "Ciudad de México", "country": "México", "timezone": "America/Mexico_City", "abbr": "MEX", "x": 175, "y": 185, "x_detail": 155, "y_detail": 478 },
    { "name": "Lima", "country": "Perú", "timezone": "America/Lima", "abbr": "LIM", "x": 225, "y": 235, "x_detail": 220, "y_detail": 558 },
    { "name": "São Paulo", "country": "Brasil", "timezone": "America/Sao_Paulo", "abbr": "SAO", "x": 285, "y": 265, "x_detail": 295, "y_detail": 588 },
    { "name": "Buenos Aires", "country": "Argentina", "timezone": "America/Argentina/Buenos_Aires", "abbr": "BUE", "x": 265, "y": 305, "x_detail": 270, "y_detail": 648 },
    { "name": "Honolulu", "country": "Hawái", "timezone": "Pacific/Honolulu", "abbr": "HNL", "x": 80, "y": 170, "x_detail": 45, "y_detail": 442 },
    { "name": "Ottawa", "country": "Canadá", "timezone": "America/Toronto", "abbr": "OTT", "x": 205, "y": 110, "x_detail": 205, "y_detail": 340 },
    { "name": "Bogotá", "country": "Colombia", "timezone": "America/Bogota", "abbr": "BOG", "x": 205, "y": 230, "x_detail": 205, "y_detail": 508 },
    { "name": "Pekín", "country": "China", "timezone": "Asia/Shanghai", "abbr": "PEK", "x": 575, "y": 160, "x_detail": 620, "y_detail": 432 },
    { "name": "Roma", "country": "Italia", "timezone": "Europe/Rome", "abbr": "ROM", "x": 410, "y": 145, "x_detail": 422, "y_detail": 405 },
    { "name": "Estambul", "country": "Turquía", "timezone": "Europe/Istanbul", "abbr": "IST", "x": 445, "y": 145, "x_detail": 462, "y_detail": 408 },
    { "name": "Riad", "country": "Arabia Saudita", "timezone": "Asia/Riyadh", "abbr": "RUH", "x": 465, "y": 185, "x_detail": 492, "y_detail": 465 },
    { "name": "Santiago", "country": "Chile", "timezone": "America/Santiago", "abbr": "SCL", "x": 210, "y": 300, "x_detail": 215, "y_detail": 624 },
    { "name": "Caracas", "country": "Venezuela", "timezone": "America/Caracas", "abbr": "CCS", "x": 220, "y": 215, "x_detail": 228, "y_detail": 498 },
    { "name": "Estocolmo", "country": "Suecia", "timezone": "Europe/Stockholm", "abbr": "STO", "x": 415, "y": 110, "x_detail": 432, "y_detail": 320 },
    { "name": "Yakarta", "country": "Indonesia", "timezone": "Asia/Jakarta", "abbr": "JKT", "x": 585, "y": 245, "x_detail": 610, "y_detail": 545 }
]

# De-duplicate entries
CITIES_DB = [c for i, c in enumerate(CITIES_DB) if c not in CITIES_DB[:i]]

ISO_TO_TZ = {
    "us": "America/New_York",
    "pe": "America/Lima",
    "gb": "Europe/London",
    "fr": "Europe/Paris",
    "es": "Europe/Madrid",
    "de": "Europe/Berlin",
    "ru": "Europe/Moscow",
    "ae": "Asia/Dubai",
    "in": "Asia/Kolkata",
    "sg": "Asia/Singapore",
    "jp": "Asia/Tokyo",
    "au": "Australia/Sydney",
    "nz": "Pacific/Auckland",
    "eg": "Africa/Cairo",
    "ke": "Africa/Nairobi",
    "za": "Africa/Johannesburg",
    "mx": "America/Mexico_City",
    "br": "America/Sao_Paulo",
    "ar": "America/Argentina/Buenos_Aires",
    "ca": "America/Toronto",
    "co": "America/Bogota",
    "cn": "Asia/Shanghai",
    "it": "Europe/Rome",
    "tr": "Europe/Istanbul",
    "sa": "Asia/Riyadh",
    "cl": "America/Santiago",
    "ve": "America/Caracas",
    "se": "Europe/Stockholm",
    "id": "Asia/Jakarta"
}

# XOR Encryption routine
KEY = "CHRONOS_SHIELD_KEY_9988"
def xor_encrypt(data, key):
    return "".join(chr(ord(c) ^ ord(key[i % len(key)])) for i, c in enumerate(data))

# Encode to Base64
cities_str = json.dumps(CITIES_DB)
iso_str = json.dumps(ISO_TO_TZ)

cities_enc = base64.b64encode(xor_encrypt(cities_str, KEY).encode('latin1')).decode('utf-8')
iso_enc = base64.b64encode(xor_encrypt(iso_str, KEY).encode('latin1')).decode('utf-8')

# Load script.js and obfuscate database section
script_path = "script.js"
with open(script_path, "r", encoding="utf-8") as f:
    code = f.read()

lines = code.split("\n")

# Locate CITIES_DB block
db_start_idx = -1
for i, line in enumerate(lines):
    if "const CITIES_DB = [" in line:
        db_start_idx = i
        break

# Locate SVG_MAP_PATH definition start
svg_start_idx = -1
for i, line in enumerate(lines):
    if "const SVG_MAP_PATH =" in line:
        svg_start_idx = i
        break

if db_start_idx != -1 and svg_start_idx != -1:
    obfuscated_lines = [
        "const SECURE_DB_KEY = \"CHRONOS_SHIELD_KEY_9988\";",
        "function decryptPayload(e){const r=atob(e);let t=\"\";for(let o=0;o<r.length;o++)t+=String.fromCharCode(r.charCodeAt(o)^SECURE_DB_KEY.charCodeAt(o%SECURE_DB_KEY.length));return JSON.parse(t)}",
        f"const CITIES_DB = decryptPayload(\"{cities_enc}\");",
        f"const ISO_TO_TZ = decryptPayload(\"{iso_enc}\");",
        ""
    ]
    
    new_lines = lines[:db_start_idx] + obfuscated_lines + lines[svg_start_idx:]
    new_code = "\n".join(new_lines)
    
    with open(script_path, "w", encoding="utf-8") as f:
        f.write(new_code)
    print("Database obfuscated successfully inside script.js!")
else:
    print("Error: Could not locate database declaration blocks in script.js")
