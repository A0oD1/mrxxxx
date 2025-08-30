// إعدادات HTML التي سيتم إنشاؤها عبر JavaScript
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.background = 'url("https://i.pinimg.com/originals/51/ae/a3/51aea3393b8234a1e69d8713a0a58bc3.gif") no-repeat center center fixed';
document.body.style.backgroundSize = 'cover';
document.body.style.fontFamily = "'Courier New', Courier, monospace";
document.body.style.color = '#ff0000';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.flexDirection = 'column';
document.body.style.textAlign = 'center';

// إنشاء الـ div container للصورة
let imageContainer = document.createElement('div');
imageContainer.className = 'image-container';
let img = document.createElement('img');
img.src = 'https://media1.tenor.com/m/kMKu9-I99k8AAAAC/alucard-hellsing.gif';
img.alt = 'Sorry i know its painful';
img.style.width = '750px';
img.style.height = 'auto';
img.style.border = '2px solid #ff0000';
img.style.borderRadius = '15px';
img.style.boxShadow = '0 0 15px rgba(0, 0, 255, 0.7)';
imageContainer.appendChild(img);
document.body.appendChild(imageContainer);

// إضافة الصوت
let audio = document.createElement('audio');
audio.autoplay = true;
audio.loop = true;
let source = document.createElement('source');
source.src = 'aa.mp3';
source.type = 'audio/mpeg';
audio.appendChild(source);
document.body.appendChild(audio);

// إضافة النص
let text = document.createElement('div');
text.className = 'text';
text.textContent = "Tonight's the night";
text.style.marginTop = '20px';
text.style.fontSize = '3em';
text.style.color = '#ff1d1d';
text.style.textShadow = '0px 0px 8px #ff1212, 0px 0px 15px #fb1111, 0px 0px 25px #ff1111';
text.style.letterSpacing = '4.5px';
document.body.appendChild(text);

// إنشاء الـ div لعرض معلومات IP
let infoDiv = document.createElement('div');
infoDiv.className = 'info';
infoDiv.id = 'ip-info';
infoDiv.style.marginTop = '20px';
infoDiv.style.fontSize = '1.5em';
infoDiv.style.color = '#ff0000';
infoDiv.style.textShadow = '0px 0px 8px #ff0000, 0px 0px 15px #ff0000, 0px 0px 25px #ff0000';
infoDiv.style.letterSpacing = '4.5px';
infoDiv.style.whiteSpace = 'pre-wrap';

// إضافة تفاصيل معلومات IP
infoDiv.innerHTML = `
    <strong>IP: <span id="ip"></span></strong><br>
    <span><strong>City:</strong> <span id="city"></span></span><br>
    <span><strong>Region:</strong> <span id="region"></span></span><br>
    <span><strong>Country:</strong> <span id="country"></span></span><br>
    <span><strong>Location:</strong> <span id="loc"></span></span><br>
    <span><strong>Organization:</strong> <span id="org"></span></span><br>
    <span><strong>Timezone:</strong> <span id="timezone"></span></span>
`;
document.body.appendChild(infoDiv);

// إضافة النص الأخير
let footerText = document.createElement('div');
footerText.className = 'text';
footerText.textContent = 'By : Dexter & harrison xD';
footerText.style.marginTop = '20px';
footerText.style.fontSize = '3em';
footerText.style.color = '#ff1d1d';
footerText.style.textShadow = '0px 0px 8px #ff1212, 0px 0px 15px #fb1111, 0px 0px 25px #ff1111';
footerText.style.letterSpacing = '4.5px';
document.body.appendChild(footerText);

// جلب بيانات IP عبر API وعرضها
fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip').textContent = data.ip;
        document.getElementById('city').textContent = data.city;
        document.getElementById('region').textContent = data.region;
        document.getElementById('country').textContent = data.country;
        document.getElementById('loc').textContent = data.loc;
        document.getElementById('org').textContent = data.org;
        document.getElementById('timezone').textContent = data.timezone;
    })
    .catch(error => {
        console.error('Error fetching IP data:', error);
    });
