# AuctionBay — Frontend (React + Vite + TypeScript)

Responsive full‑stack frontend for the AuctionBay application.  
Implements authentication, profile management, auctions listing/detail, bidding flow, and profile tabs (My / Bidding / Won).

---

## Table of Contents

- [Features](#features)
- [Architecture & Tech](#architecture--tech)
- [Prerequisites](#prerequisites)
- [Environment](#environment)
- [Install](#install)
- [Run](#run)
- [Build](#build)
- [Project Structure](#project-structure)
- [UI & Styling](#ui--styling)
- [API Integration](#api-integration)
- [Profile & Modals](#profile--modals)

---

## Features

- **Authentication**: register, login, forgot password, update password (JWT cookie-based).
- **Profile management**: update name/surname/email, change password, upload/change avatar.
- **Auctions**:
  - Create/edit/delete auctions with images and end date.
  - Auction detail view with bidding form & history.
  - Tabs: “My auctions”, “Bidding”, “Won” with empty states.
- **Bidding**: enforce minimal bid (≥ highest + 1), prevent bids after endTime, instant history updates.
- **Responsive UI**: styled-components + Figma design fidelity.
- **Notifications**: toast messages for errors/success.

---

## Architecture & Tech

- **React 18**
- **Vite** (dev/build tool)
- **TypeScript**
- **State**: MobX (auth store)
- **Forms**: react-hook-form + yup validation
- **Styling**: styled-components
- **UI Components**: custom, + shadcn/ui inspired patterns
- **Routing**: react-router-dom
- **Charts/Icons**: lucide-react for icons, recharts where needed
- **Build**: Vite optimized, supports `.env`

---

## Prerequisites

- Node.js **18+**
- npm **9+**

---

## Environment

Create `.env` in repo root:

```env
VITE_API_URL=http://localhost:3000
```

Where backend runs on port 3000.

---

## Install

```bash
npm install
```

---

## Run

```bash
# development
npm run dev
```

Frontend dev server: **http://localhost:5173** (default Vite).

---

## Build

```bash
# production build
npm run build

# preview production build locally
npm run preview
```

---

## Project Structure

```
auctionbay-frontend/
├─ public/                  # static assets
├─ src/
│  ├─ assets/               # images/icons
│  ├─ components/
│  │  ├─ AuctionCard.tsx
│  │  ├─ AuctionDetailView.tsx
│  │  ├─ Navbar/
│  │  ├─ Profile/
│  │  └─ User/              # login/register/forgot/change-password modals
│  ├─ hooks/                # e.g. useMyAuctions, useLogin, useRegister
│  ├─ services/             # axios wrappers for API (auction, user, auth)
│  ├─ stores/               # MobX stores (authStore)
│  ├─ types/                # TS types for Auction, User, Bid
│  ├─ utils/                # helpers (time formatting, etc.)
│  ├─ App.tsx
│  └─ main.tsx
├─ .env
├─ package.json
└─ README.md
```

---

## UI & Styling

- **styled-components** for scoped styles.
- **Design**: built against Figma mockups (consistent spacing, typography, responsive layouts).
- **Reusable components**: `InputField`, `FormLayout`, `Button`, `Card`.

---

## API Integration

- API base URL configured via `VITE_API_URL`.
- Uses Axios with `withCredentials` enabled (cookies for JWT).
- Services (`src/services/*.ts`) wrap endpoints for:
  - `auth` (login, register, refresh, logout, change password)
  - `user` (profile update, avatar upload)
  - `auction` (CRUD, bidding, fetch one/all)

---

## Profile & Modals

- **ProfileSettingsModal**: edit profile info.
- **ChangePasswordModal**: update password via `/me/update-password`.
- **ChangeAvatarModal**: upload new profile picture.
- **EditAuctionModal**: edit title/description/end date/image (startingBid locked once bids exist).

---

