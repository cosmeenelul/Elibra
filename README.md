# Centrul Elibra Website – AWS Deployment👐💆‍♂️

[![AWS](https://img.shields.io/badge/AWS-S3%2FCloudFront%2FRoute53-orange)](https://aws.amazon.com/)  

Acesta este un **site static** pentru **Centrul Elibra de Masaj și Kinetoterapie**, realizat pentru a prezenta serviciile, programul și datele de contact ale centrului. Site-ul este găzduit pe **AWS S3**, cu **CloudFront** pentru performanță și **Route 53** pentru domeniu personalizat.

---

## 🌐 Live Demo

[Vezi site-ul live](https://centrul-elibra.ro)

---

## 🛠 Tehnologii și Servicii AWS ☁️

- **AWS S3** – stocare fișiere statice (HTML, CSS, JS, imagini).  
- **AWS CloudFront** – Content Delivery Network pentru livrare rapidă și securizată.  
- **AWS Route 53** – DNS pentru domeniu personalizat.  
- **HTML5 / CSS3 / JavaScript** – structură și interactivitate site.

---

## ⚙️ Configurare AWS

### S3 🪣
- Creează un **bucket S3** și activează **Static Website Hosting**.  
- Încarcă toate fișierele site-ului.  
- Setează permisiuni publice sau prin CloudFront.

### CloudFront 🌐
- Creează o **distribuție CloudFront** cu bucket-ul S3 ca origin.  
- Activează HTTPS folosind certificate ACM.  
- Activează caching pentru performanță.

### Route 53 🗺️
- Adaugă domeniul tău personalizat.  
- Creează un record **A** sau **CNAME** care indică către distribuția CloudFront.  

---



