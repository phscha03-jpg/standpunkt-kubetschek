# Abschluss-Audit – Website Dr. Roman Kubetschek

Stand: 29.06.2026
Projekt: Standpunkt-Website zum Zahnärztemangel (Astro), Zieldomain `loewen-zahn.de`
Charakter: **Standpunkt-Website, keine Praxiswerbung.** Die Praxis nimmt keine neuen Patienten auf.

## Ampel-Übersicht

| Bereich | Status |
|---|---|
| Technik & SEO | 🟢 vollständig (Domain loewen-zahn.de gesetzt) |
| Performance & Barrierefreiheit | 🟢 Skip-Link + Kontrast erledigt |
| Recht & Datenschutz | 🟡 Inhalte vollständig, nur Anwaltsprüfung offen |
| Inhalt & Haltung | 🟢 sauber |
| Bilder & offene Texte | 🟢 alle Bildplätze belegt |

---

## 1. Befundliste nach Schweregrad

### 🔴 Kritisch (blockt die Freigabe)

| # | Befund | Datei / Fundstelle | Zuständig |
|---|---|---|---|
| ~~K1~~ | ✅ **Erledigt.** Impressum-Pflichtangaben vollständig: Kammeradresse, Aufsichtsbehörde, gesetzliche Grundlage (Heilberufsgesetz M-V), Berufsordnungs-Link. Steuernummer entfällt (Freiberufler). | `src/pages/impressum.astro` | — |
| ~~K2~~ | ✅ **Erledigt.** Datenschutz: Stand „Juni 2026" gesetzt, Hosting auf 1blu AG (Berlin, Server in Deutschland) umgestellt, Platzhalter und Vorlage-Banner entfernt. | `src/pages/datenschutz.astro` | — |
| K3 | **Rechtliche Prüfung** von Impressum, Datenschutz und der Trennung zu projekt-nb.de (Berufsrecht, keine Parteiwerbung). | `impressum.astro:90-99`, `mitmachen.astro:128-145` | Anwalt / Kammer |

### 🟡 Wichtig (vor Live klären)

| # | Befund | Datei / Fundstelle | Zuständig |
|---|---|---|---|
| ~~W1~~ | ✅ **Erledigt.** Finale Domain **loewen-zahn.de** gesetzt: `site`, Canonical, OG/Twitter, JSON-LD-IDs, robots/Sitemap, Share-Links und OG-Bilder umgestellt. | `astro.config.mjs` u. a. | — |
| W2 | **E-Mail-Adressen** (allgemein `zahnmedizin@use.startmail.com`, Presse `pressearbeit@use.startmail.com`) und Telefonnummer final bestätigen. | `impressum.astro`, `kontakt.astro`, `datenschutz.astro`, `quellen.astro` | Kunde |
| ~~W3~~ | ✅ **Erledigt.** Praxis-Motive freigegeben. Nachtrag 30.06.2026: alle patientenbezogenen Stellen verpixelt. `start-leitbild`: Karteikarten, KZV-Kontaktliste (Namen/Telefon/E-Mail), zentrales Patienten-Formular (Mitglieds-Nr.). `alltag-kalender`: gelbes Patienten-Formular und KZV-Kontaktliste. Monitor-Terminplan zeigt nur Behandlungsarten (PZR, ZE-Rep …) und Raum-/Mitarbeiternamen (KUBE1/2, ANTJE, BIANCA), keine Patientennamen. | Bildmaterial | — |
| ~~W4~~ | ✅ **Erledigt.** Skip-Link „Zum Inhalt springen" ergänzt (sichtbar bei Tastaturfokus, Sprung zu `#main-content`). | `src/layouts/Layout.astro`, `global.css` | — |

### 🟢 Optional (Feinschliff)

| # | Befund | Datei / Fundstelle | Zuständig |
|---|---|---|---|
| ~~O1~~ | ✅ **Erledigt.** OG-Bilder als JPG (~70 kB statt ~300 kB). Bewusst JPG statt WebP, da nicht alle Social-Scraper (z. B. Facebook/LinkedIn) WebP als OG-Bild rendern. | `public/og/*.jpg` | — |
| ~~O2~~ | ✅ **Erledigt.** Gold-Kleintext auf hellem Grund auf `--color-gold-ink` (#8C6E1A, ~4,8:1) umgestellt; helles Gold bleibt auf dunklem Grund. Betrifft Section-Labels und Fact-Tags. | `global.css`, `FactBlock.astro`, `PageHeader.astro` | — |
| O3 | Social-Texte für Standpunkt und Quellen final abnehmen. | jeweilige Seite | Kunde |

---

## 2. Detailprüfung nach Bereichen

### Technik & SEO 🟢
- ✅ Title, Description, **eine h1 je Seite** (Startseite-h1 ergänzt: `index.astro`), Canonical je Seite.
- ✅ **Open Graph + Twitter Cards** je Seite, getrennte Social-Titel/-Texte, OG-Bild 1200×630 pro Hauptseite, Default-Fallback (`public/og/`).
- ✅ **sitemap-index.xml** erzeugt, Impressum/Datenschutz ausgeschlossen; **robots.txt** mit Sitemap-Verweis; eigene **404-Seite**.
- ✅ **Strukturierte Daten**: WebSite + Person sitewide, Article auf Hintergrund/Bedarfsanalyse/Standpunkt. **Kein Dentist-/MedicalBusiness-Schema** (bewusst).
- ✅ Sprechende Slugs, interne Verlinkung über Footer, einsprachig Deutsch (`lang="de"`).
- ✅ Finale Domain **loewen-zahn.de** überall gesetzt (W1 erledigt).

### Performance & Barrierefreiheit 🟢
- ✅ Schriften selbst gehostet, **Preload** für Inter + Playfair, CSS inline (Astro), keine Render-Blocker.
- ✅ Bilder via Astro **WebP**, responsive Breiten; Hero `eager`, Inhaltsbild `lazy`. Größtes Asset Hero ~418 kB WebP, akzeptabel.
- ✅ `prefers-reduced-motion` berücksichtigt, aria-Labels an Navigation/Buttons, sichtbarer Fokus über Browser-Default.
- ✅ **Skip-Link** „Zum Inhalt springen" ergänzt (W4 erledigt).
- ✅ **Kontrast**: Gold-Kleintext auf hellem Grund auf ~4,8:1 angehoben (O2 erledigt).
- ℹ️ Core Web Vitals: statische Seite ohne Framework-JS → LCP/CLS/INP voraussichtlich gut. Empfehlung: nach Live mit echtem Lighthouse gegenmessen.

### Recht & Datenschutz 🔴
- ✅ **Kein Kontaktformular**, keine Tracker, **kein Google-Fonts-CDN**, keine externen SDKs. Teilen über einfache Share-Links + Kopierlink (`ShareActions.astro`).
- ✅ Telefon + Öffnungszeiten sichtbar; Hinweis **„keine E-Mail-Kommunikation für Patientenanliegen"** und **Aufnahmestopp** vorhanden (`kontakt.astro:66`, `StopNotice.astro:16`); Pressekontakt getrennt (`kontakt.astro:94`).
- 🔴 Impressum-Pflichtangaben (K1), Datenschutz-Stand/Hosting (K2), anwaltliche Prüfung (K3).

### Inhalt & Haltung 🟢
- ✅ **Keine Patientensuche-Optimierung** (kein „Termin/Prophylaxe"), Fokus auf Thema und Reichweite.
- ✅ **Keine Partei genannt**, keine einzelne Person namentlich angegriffen.
- ✅ Eigene **Quellen-Seite**; Tatsachen mit Quellenangaben, Meinungen als Einschätzung gekennzeichnet.
- ✅ Kernbotschaft und Aufnahmestopp klar; Link zu projekt-nb.de mit Trennungs-Hinweis (juristisch noch prüfen, K3).

### Bilder & offene Texte 🟢 / Recht offen
- ✅ Alle Kopfbilder belegt: Start (Leitmotiv), Hintergrund (Marienkirche), Bedarfsanalyse (Reitbahnsee), Neubrandenburg-Abschnitt.
- ✅ Alt-Texte sachlich; zwei vage Texte präzisiert (Start, Mitmachen).
- 🔴 Offene Rechtstexte siehe K1/K2.

---

## 3. To-do vor der Kundenfreigabe (zwingend)

1. ~~**K1** Impressum-Pflichtangaben~~ ✅ erledigt.
2. ~~**K2** Datenschutz: Stand-Datum, Hosting~~ ✅ erledigt.
3. **K3** Impressum + Datenschutz + projekt-nb-Trennung anwaltlich/kammerseitig prüfen.
4. ~~**W1** Finale Domain / `site`~~ ✅ erledigt (loewen-zahn.de).
5. **W2** Pressemail + Telefon bestätigen.
6. ~~**W3** Bild-Datenschutz~~ ✅ erledigt (vom Kunden freigegeben).

## 4. Freigabe-Checkliste

- [x] Impressum vollständig (K1) ✅
- [x] Datenschutz Stand + Hosting (K2) ✅
- [ ] Anwaltliche/kammerseitige Prüfung (K3)
- [x] Finale Domain bestätigt + `site` korrekt (W1) ✅
- [ ] Pressemail + Telefon bestätigt (W2)
- [x] Bild-Datenschutz freigegeben (W3) ✅
- [x] Skip-Link ergänzt (W4) ✅
- [x] OG-Bilder optimiert (O1) ✅ · [x] Kontrast-Check (O2) ✅ · [ ] Social-Texte abgenommen (O3)

## 5. Aufgabenteilung

**Ich korrigiere selbst (gefahrlos):**
- ✅ W4 Skip-Link, O1 OG-Bilder (JPG), O2 Kontrast — erledigt.

**Du / Kunde liefern:**
- W2 (Kontakte), O3 (Social-Texte).

**Anwalt / Kammer prüfen:**
- K3 (Impressum, Datenschutz, berufsrechtliche Trennung zu projekt-nb.de).

> Hinweis: Rechtstexte wurden bewusst **nicht erfunden oder umgeschrieben**. Offene Pflichtfelder sind als Platzhalter erhalten und oben als Befund gemeldet.
