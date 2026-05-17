# Lucie Sophro — Application de réservation

Application web fullstack développée pour une sophrologue indépendante, permettant à ses clients de réserver des séances en ligne et à la praticienne de gérer son planning via un back-office dédié.

> Projet personnel réel, développé de A à Z — de la conception de la base de données à l'intégration front-end, en passant par l'authentification et les emails transactionnels.

---

## ✨ Fonctionnalités

### Côté client (public)
- 📅 Calendrier interactif avec créneaux disponibles en temps réel
- 🔒 Réservation sécurisée avec gestion des conflits
- 📧 Email de confirmation automatique à la réservation
- 📱 Interface responsive, pensée mobile-first

### Côté praticienne (back-office privé)
- 🔐 Authentification sécurisée (Laravel Sanctum)
- 📋 Vue d'ensemble des réservations et dashboard résumé
- ❌ Annulation de créneaux // en cours de développement
- 🗓️ Gestion des disponibilités : blocage de jours (congés, urgences) et ouverture de jours exceptionnels (ex: samedi) // en cours de développement

---

## 🛠️ Stack technique

### Front-end
| Technologie | Usage |
|---|---|
| React 18 + TypeScript | Framework principal |
| Ant Design | UI components (Calendar, Form, DatePicker…) |
| React Router v6 | Navigation / routes protégées |
| Axios | Appels API REST |
| Dayjs | Manipulation des dates |

### Back-end
| Technologie | Usage |
|---|---|
| Laravel 11 | Framework PHP / API REST |
| Laravel Sanctum | Authentification par token |
| Laravel Mailables | Emails transactionnels |
| MySQL | Base de données relationnelle |
| Eloquent ORM | Modélisation et requêtes |

---

## 🏗️ Architecture

```
lucie-sophro/
├── frontend/              # React + TypeScript
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Reservations.tsx   # Calendrier public + booking
│   │   │   ├── Admin/
│   │   │   │   ├── Dashboard.tsx  # Back-office
│   │   │   │   └── Slots.tsx      # Gestion des disponibilités
│   │   ├── components/
│   │   ├── services/
│   │   │   └── axiosInstance.ts   # Client HTTP configuré
│   │   └── router/
│
└── backend/               # Laravel API
    ├── app/
    │   ├── Http/Controllers/
    │   │   ├── BookingController.php
    │   │   ├── TimeSlotController.php
    │   │   └── AuthController.php
    │   ├── Models/
    │   │   ├── Booking.php
    │   │   └── TimeSlot.php
    │   └── Mail/
    │       └── BookingConfirmation.php
    └── database/
        ├── migrations/
        └── seeders/
            └── TimeSlotSeeder.php
```

---

## 🔑 Points techniques notables

- **Gestion des race conditions** : les réservations utilisent `DB::transaction()` avec `lockForUpdate()` pour éviter les doubles bookings simultanés
- **Localisation FR** : le composant Calendar d'Ant Design est configuré en français (locale `fr_FR` + `dayjs`)
- **Emails** : Laravel Mailables avec configuration Mailtrap en développement
- **Routes protégées** : le back-office est inaccessible sans token Sanctum valide
- **Séparation claire front/back** : API REST stateless, aucune logique métier côté React

---

## 🚀 Lancer le projet en local

### Prérequis
- PHP 8.2+, Composer
- Node.js 18+, npm
- MySQL

### Back-end

```bash
cd backend
composer install
php artisan serve
```

### Front-end

```bash
cd frontend
npm install
npm run dev
```

L'application est disponible sur `http://localhost:5173`

---

## 📌 Statut du projet

🟡 **En développement actif** — fonctionnalités core en place, back-office en cours d'enrichissement (gestion des disponibilités, paramètres des créneaux).

Déploiement prévu prochainement pour une utilisation en production réelle.

---

## 👤 Auteur

**Arnaud Lahaual** — Développeur web fullstack  
[GitHub](https://github.com/ArnaudLahaual)
