let input = prompt("Soruyu Yazınız. UYARI!!! ⚠️⚠️⚠️⚠️ Pqq-Ai yeni olduğundan çoğu soruları hatalı verir yada Hiç vermez: ");

let veri = { 
    "Merhaba": "merhaba iyim sen"
}
while (true) {
    if (!input) break;
    input = input.toLowerCase();
    
   if (veri[input.toLowerCase()]) {
    alert(veri[input.toLowerCase()]);
} else {
    alert("Üzgünüm, O Konuda Bilgim Yok.");

}
 
}

if (veri[input.toLowerCase()]) {
    alert(veri[input.toLowerCase()]);
} else {
    alert("Üzgünüm, O Konuda Bilgim Yok.");

}
