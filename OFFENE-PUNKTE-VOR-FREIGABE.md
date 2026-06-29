# Offene Punkte vor Freigabe – Website Dr. Roman Kubetschek

Stand: 29.06.2026
Projekt: Standpunkt-Website zum Ärztemangel (Astro), Zieldomain `loewen-zahn.de`

Diese Übersicht trennt zwei Dinge:
**A. Was ich vom Kunden brauche** (blockt die Freigabe).
**B. Was ich technisch noch selbst erledige** (kein Input nötig).

---

## A. Vom Kunden benötigt (vor Live-Gang)

### A1. Rechtstexte vervollständigen (Impressum)
Im Impressum stehen noch Platzhalter, die nur der Kunde bzw. die Kammer liefern kann:
- [ ] Vollständige Adresse der **Zahnärztekammer M-V**
- [ ] **Aufsichtsbehörde** benennen (i.d.R. Sozialministerium M-V)
- [ ] **Link zur aktuellen Berufsordnung** der ZÄK M-V
- [ ] **Steuernummer / USt-IdNr.** eintragen oder Zeile streichen
- [ ] Telefon `03955 442332` und Pressemail `zahnarzt@startmail.com` final bestätigen

### A2. Rechtstexte vervollständigen (Datenschutz)
- [ ] **Stand-Datum** der Datenschutzerklärung festlegen
- [ ] **Hosting-Anbieter final bestätigen.** Im Text steht aktuell Netlify. Wenn ein anderer Anbieter genutzt wird, muss der Abschnitt angepasst werden.

### A3. Rechtliche Prüfung (wichtig)
- [ ] Impressum und Datenschutz **anwaltlich oder kammerseitig prüfen** lassen.
- [ ] Saubere **Trennung zur Wählergemeinschaft projekt-nb.de** bestätigen, damit es berufsrechtlich nicht als Parteiwerbung/Vermischung wirkt. Im Impressum ist diese Trennung bereits formuliert und sollte mitgeprüft werden.

### A4. Fotos
Alle Kopfbilder sind jetzt belegt:
- [x] **`region-neubrandenburg.jpg`** (Kopfbild „Hintergrund") mit dem Marienkirche-Foto belegt.
- [x] **`bedarfsanalyse-leitbild.jpg`** (Kopfbild „Bedarfsanalyse") mit dem Reitbahnsee-Foto belegt.
- [x] Neubrandenburg-Foto im Abschnitt „Beispiel Neubrandenburg" der Bedarfsanalyse eingebunden.

Offen bleibt nur die finale Bildfreigabe unter A5 (Datenschutz auf den Praxis-Motiven).

### A5. Datenschutz-Freigabe der Motive
Vor dem Live-Gang prüfen bzw. bei Bedarf unkenntlich machen:
- [x] Praxis-Motive vom Kunden datenschutzrechtlich freigegeben (29.06.2026). Punkte unten damit erledigt:
  - [x] Notizzettel in `start-leitbild` / `alltag-telefon`
  - [x] Brieftext in `mitmachen-akzent`
  - [x] Mitarbeiter-Vornamen am Kalender-Screen
  - [x] Terminkalender ohne Patientennamen

### A6. Inhaltliche Freigaben
- [ ] **Politiker-Anschreiben:** Adressaten und Forderung im Entwurf final freigeben
- [ ] **Faktencheck/Quellen:** bestätigen, welche Bezüge (Nordkurier-Artikel, Analyse 2025) online verlinkbar sind und was als Referenz ohne Link bleibt
- [ ] **Domain** `loewen-zahn.de` final bestätigen

---

## B. Technisch noch offen (erledige ich, kein Kundeninput nötig)

- [ ] **`site:`-URL** in `astro.config.mjs` setzen (für korrekte Canonical-Links und Sitemap)
- [ ] **Social-Preview-Bild (og:image)** erstellen und einbinden (aktuell kein Vorschaubild beim Teilen)
- [ ] **`sitemap.xml` und `robots.txt`** ergänzen
- [ ] Platzhalterbilder ersetzen, sobald die fehlenden Fotos (A4) vorliegen
- [ ] Optionaler Feinschliff: Hintergrund-Header mit Neubrandenburg-Foto belegen (nach Entscheidung A4)
- [ ] Abschluss-Check: Responsivität, Barrierefreiheit, Performance vor Deploy

---

## Kurz-Fazit

**Echte Blocker für die Freigabe** sind jetzt A1 bis A3: die Rechtstext-Platzhalter und die anwaltliche/kammerseitige Prüfung. Die Kopfbilder (A4) sind gesetzt. Sobald die Rechtstexte vorliegen, kann ich Punkt B abschließen und die Seite ist startklar.
