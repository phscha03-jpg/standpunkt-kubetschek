# Planungsprompt für Claude Code: Standpunkt-Website Dr. Roman Kubetschek

## So nutzt du diesen Prompt
Diesen kompletten Text in Claude Code einfügen. Claude Code soll **zuerst nur einen Plan** liefern und auf deine Freigabe warten, bevor eine einzige Zeile Code entsteht. Erst nach deinem "ok, bau das" wird umgesetzt. So merkst du Denkfehler in der Planung, nicht erst im fertigen Build.

---

## Auftrag an dich (Claude Code)

Du baust eine **Standpunkt- und Aufklärungs-Website**, keine Werbe- oder Praxisseite. Auftraggeber ist Dr. Roman Kubetschek, Zahnarzt in Neubrandenburg. Thema: Ärztemangel, Versagen der Gesundheitspolitik, kaputte Rahmenbedingungen. Es geht ausdrücklich **nicht** um Eigenwerbung und **nicht** um Patientengewinnung. Die Praxis nimmt keine neuen Patienten auf, das soll deutlich kommuniziert werden.

### Pflicht: erst planen, dann bauen
Gib im ersten Schritt nur Folgendes aus und stoppe dann:
1. **Sitemap** mit kurzer Aufgabe je Seite
2. **Wireframe je Seite** als einfache Textstruktur (Reihenfolge der Abschnitte)
3. **Content-Outline je Seite** (welche Aussage steht wo, welche Originalzitate von Dr. K. werden verwendet)
4. **Design-Tokens** (konkrete Hex-Farben, Schriftpaarung, Abstände, Look)
5. **Komponentenliste**
6. **Bild-Manifest** (siehe unten, exakte Dateinamen und Seitenverteilung)
7. **Offene Punkte und Risiken**, die ich entscheiden muss (siehe Abschnitt unten)

Erst nach meiner Freigabe baust du. Wenn etwas unklar ist, frag nach, statt zu raten.

---

## Technische Vorgaben
- **Stack:** Astro, Deployment über Netlify (so arbeite ich bereits).
- **DSGVO:** Schriften selbst hosten, kein Google Fonts CDN. Keine externen Tracker, kein Google Analytics, keine eingebetteten Drittinhalte ohne Einwilligung. Keine Kartendienste, die Daten an Dritte senden, ohne Hinweis.
- **Bilder:** Astro Image-Optimierung, moderne Formate, definierte Seitenverhältnisse. Platzhalter erzeugen (siehe Bild-Manifest), damit echte Fotos später 1:1 ersetzt werden.
- **Qualität:** responsiv ab Smartphone, sauberer Tastatur-Fokus, `prefers-reduced-motion` respektieren, gute Lighthouse-Werte, semantisches HTML.
- **Scroll-Erlebnis:** Der Auftraggeber mag ruhiges, hochwertiges Scrollen mit ausschnittweisen Einblendungen. Dezent halten, kein verspieltes Animations-Feuerwerk. Ernst und seriös bleibt Vorrang.

---

## Tonalität und Haltung (wichtig)
- Tonfall: **sachlich und nüchtern**. Eindringlich über Inhalt und Gestaltung, nicht über laute Sprache. Keine Polemik, kein Ranten.
- **Keine Heroisierung** der Person. Dr. K. will nicht als Retter dastehen. Originalwunsch: "Keine selbstgefällige, heroisierende Darstellung meiner Person als Retter."
- **Keine Partei nennen, keine Parteiwerbung.** Kritik nur am System und an der Politik allgemein, nicht an namentlich genannten Personen oder Parteien.
- Trenne sauber zwischen **Tatsachenbehauptung und Meinung**. Belegbare Fakten mit Quelle, persönliche Wertungen klar als Einschätzung von Dr. Kubetschek kennzeichnen. Das schützt ihn rechtlich (Meinungsfreiheit vs. Tatsachenbehauptung) und passt zum nüchternen Ton.

### Originalzitate von Dr. Kubetschek, die verwendet werden sollen
Behutsam und prominent einsetzen, Wortlaut bewahren:
- Leit- und Merksatz fürs Hero: **"Wie groß muß der Schmerz noch werden, ehe die Heilung einsetzt und der Mensch ins Tun kommt?"**
- Haltung: **"Zahnarzt ist kein Beruf sondern Berufung."**
- Forderung: **"Kompetenz statt Proporz"** und: Entscheider in der Politik müssen das studiert haben, worüber sie entscheiden.
- Kernaussage: Der Zustand ist die Konsequenz einer verfehlten Gesundheitspolitik aller bisherigen Regierungen, trotz Warnungen der Bundeszahnärztekammer seit 2010.

---

## Inhalte je Seite (aus dem Fragebogen)

Der Auftraggeber will **mehrere Unterseiten**. Vorgeschlagene Sitemap:

### 1. Start (Leitbild)
- Starke Startaussage mit dem Merksatz oben.
- Kurz und deutlich: Diese Praxis nimmt **keine neuen Patienten** auf, weil sie an der Belastungsgrenze arbeitet. Gewonnene Mikrozeitfenster gehen ausnahmslos an akute Schmerzfälle.
- Worum es geht: massiver Ärztemangel, versagende Gesundheitspolitik, überlastete Praxen, fehlender Nachwuchs.
- Einstieg ins Scrollen, das die Argumentation aufbaut.

### 2. Hintergrund & Fakten
Diese Missstände benennen (alle aus dem Fragebogen):
- Zu wenige Studienplätze, Numerus Clausus
- Bürokratie und Überregulierung
- Schlechte Honorare, Budgetierung
- Ärztemangel auf dem Land
- Alternde Ärzteschaft, fehlende Nachfolger
- Alternde Bevölkerung, steigender Bedarf
- Politische Untätigkeit
- Fehlende Kompetenz in der Verwaltung, fehlender Mut zu neuen Wegen
- Festhalten am Ideal der einen "großen" Verwaltungslösung, statt regionale, individuelle Lösungen der Zahnärzte an der Basis zuzulassen. Ergebnis: seit über 16 Jahren spitzt sich alles zu.
- Hauptverantwortung sieht Dr. K. in realitätsferner Gesetzgebung, starren Verwaltungsvorschriften, mutloser Verwaltung ("Ja, aber..." / "Das geht nicht, weil...") und im Versagen der beruflichen Körperschaften auf Landes- und Bundesebene.

Fakten mit Quelle belegen. **Recherchiere selbst nach geprüften, seriösen Quellen** und baue sie mit Quellenangabe ein. Prüfe insbesondere und zitiere primär, wo möglich:
- Warnungen der Bundeszahnärztekammer zum Nachwuchs- und Landärztemangel ab 2010
- GOZ-Punktwert seit 1988 nicht angepasst
- Berufszufriedenheitsstudie der Universität Rostock
- Aussagen von Prof. Dr. Dietmar Österreich (ehem. Präsident ZÄK M-V, ehem. Vizepräsident BZÄK)

Wo sich etwas nicht sauber belegen lässt, als Einschätzung von Dr. Kubetschek formulieren, nicht als feststehende Tatsache.

### 3. Mein Standpunkt / Erfahrungsbericht
- Persönlich, in der Ich-Form, Praxisalltag soll vorkommen.
- Warum Patienten abgewiesen werden müssen, ohne Pathos.
- Die Haltung "Berufung statt Beruf", Verpflichtung gegenüber Patienten- und Gemeinwohl. Begeisterung für den Beruf soll spürbar sein, ohne sich selbst zu erhöhen.

### 4. Quellen & Belege
- Saubere Quellenliste mit den oben recherchierten Belegen.
- Genannte Bezüge des Auftraggebers: Artikel von Dr. Roman Kubetschek im Nordkurier, "Analyse Zahnärztemangel Neubrandenburg 2025". Diese als Quellen aufnehmen, soweit verlinkbar, sonst als Referenz nennen.

### 5. Mitmachen & Teilen
Was Besucher tun können (aus dem Fragebogen): den Beitrag teilen, eigene Erfahrung teilen, sich informieren, sich an Medien wenden, Politiker anschreiben.
- **Datensparsam umsetzen.** Teilen über Sharing-Intents der sozialen Netzwerke und über einen Kopier-Link. "Politiker anschreiben" als vorbereiteter Brief- oder E-Mail-Entwurf zum Selbstversenden, nicht über ein Formular, das hier Daten sammelt. "Eigene Erfahrung teilen" als Hinweis auf externe Kanäle, nicht als datensammelndes Formular, passend zum Wunsch, keine E-Mail-Kommunikation mit Patienten zu führen.
- Link zu **https://www.projekt-nb.de** einbauen (Wunsch des Auftraggebers).

### 6. Kontakt & Impressum
- **Öffnungszeiten und Telefonnummer anzeigen.** Telefon: 03955 442332.
- Deutlicher Hinweis: **keine E-Mail-Kommunikation, nur analoge Patientenkontakte erwünscht.** Also keine Patienten-Kontaktformulare, keine Einladung zur Mailanfrage für Behandlungen.
- Presse- und Rückfragenkontakt darf separat stehen: projekt-nb@use.startmail.com (nur für Presse und Rückfragen, klar getrennt vom Patientenkontakt).
- **Impressum und Datenschutz fehlen noch.** Beide Seiten als strukturierte Vorlage mit Platzhaltern und einer To-do-Checkliste anlegen. Bei den Pflichtangaben für Heilberufe an Berufsbezeichnung, verleihenden Staat, zuständige Zahnärztekammer Mecklenburg-Vorpommern, zuständige Aufsicht und berufsrechtliche Regelungen denken. Keinen fertigen Rechtstext erfinden, sondern Felder vorbereiten und auf anwaltliche bzw. kammerseitige Prüfung hinweisen.

---

## Design-Richtung
- **Farben:** Grün, Weiß, Schwarz, Gold (Wunsch des Auftraggebers). Ein vorhandenes Logo existiert, Palette daran ausrichten. Vorschlag als Startpunkt, im Plan bestätigen oder anpassen:
  - Tiefes, ernstes Grün als Leitfarbe
  - Nahezu Schwarz für Text
  - Warmes Gold sehr sparsam als Akzent, nur für Hervorhebungen
  - Weiß bzw. gebrochenes Weiß als Fläche
- **Wirkung:** ernst und eindringlich, sachlich und seriös, dokumentarisch wie ein Bericht. Nicht reißerisch.
- **Typografie:** kräftige, seriöse Display-Serife für Überschriften (Gravitas, Eindringlichkeit), klare Sans für Fließtext. Schriften selbst hosten. Im Plan zwei konkrete Schriften vorschlagen.
- **Negativ-Referenz:** Der Auftraggeber lehnt die Anmutung von afd.de ab und will keinerlei parteipolitische Nähe. Gestaltung bewusst davon fernhalten.
- **Positiv-Referenz:** Er schätzt ein hochwertiges, ruhiges Scroll-Erlebnis mit gutem Design. Das in seriöser, nicht verkäuferischer Form übersetzen.

---

## Bild-Manifest und Platzhalter
Lege Platzhalter unter `src/assets/images/` mit **exakt diesen Dateinamen** an, jeweils als lokale SVG- oder Farbflächen-Platzhalter mit sichtbarem Dateinamen und Seitenverhältnis. So tausche ich später nur die Dateien. Keine externen Platzhalterdienste (DSGVO).

| Datei | Seite | Zweck | Format | Ausrichtung |
|---|---|---|---|---|
| `portrait-kubetschek-hoch.jpg` | Start, Standpunkt | Ernstes Umgebungsportrait, direkter Blick | 4:5 | hoch |
| `portrait-kubetschek-quer.jpg` | Standpunkt | Kopf der Seite | 3:2 | quer |
| `start-leitbild.jpg` | Start | Starkes dokumentarisches Leitmotiv (z. B. voller Terminkalender, Wartezimmer, Uhr), ohne Heldenpathos | 16:9 | quer |
| `alltag-kalender.jpg` | Standpunkt, Fakten | Voller Terminplan, Überlastung sichtbar | 3:2 | quer |
| `alltag-telefon.jpg` | Standpunkt | Klingelndes Telefon, Empfang | 3:2 | quer |
| `alltag-team.jpg` | Standpunkt | Team bei der Arbeit, keine erkennbaren Patienten | 3:2 | quer |
| `alltag-detail.jpg` | Standpunkt, Fakten | Hände, Instrumente, anonym | 1:1 | quadratisch |
| `alltag-aufnahmestopp.jpg` | Start, Kontakt | Aushang oder Schild "Keine Aufnahme neuer Patienten" | 4:5 | hoch |
| `region-neubrandenburg.jpg` | Fakten | Kontext Stadt und Region, Thema Landflucht | 16:9 | quer |
| `mitmachen-akzent.jpg` | Mitmachen | Ruhiges, neutrales Akzentbild | 3:2 | quer |

Optional, nur falls sinnvoll: ein zusätzliches ruhiges Symbolbild für die Fakten-Seite (`fakten-akzent.jpg`, 3:2).

---

## Offene Punkte, die ich vor dem Bauen entscheiden muss
Liste diese im Plan auf und hol meine Entscheidung ein:
1. **Logo und exakte Farbwerte:** Soll ich Hex-Werte aus dem vorhandenen Logo ableiten? Logo liegt vor.
2. **Faktencheck:** Welche der genannten Bezüge (Nordkurier-Artikel, Analyse 2025) sind online verlinkbar? Was bleibt als Referenz ohne Link?
3. **"Politiker anschreiben":** Briefvorlage oder mailto-Vorlage, an wen adressiert, welche Forderung im Entwurf?
4. **projekt-nb.de und Berufsrecht:** Die Verknüpfung der beruflichen Person mit einer kommunalpolitischen Wählergemeinschaft sauber trennen. Im Impressum und in der Darstellung klar halten, damit es nicht als Parteiwerbung oder Vermischung wirkt. Hier bewusst konservativ planen und auf rechtliche Prüfung hinweisen.
5. **Sprachstand:** Originalzitate enthalten alte Rechtschreibung ("muß"). Wortlaut so belassen oder behutsam modernisieren? Standardvorschlag: Zitate im Original belassen, restlicher Text in heutiger Rechtschreibung.

---

## Reihenfolge der Umsetzung nach Freigabe
1. Projektgerüst (Astro, Netlify-fähig), Design-Tokens, Schriften lokal
2. Layout und Komponenten
3. Seiten mit echten Inhalten und Platzhalterbildern
4. Impressum- und Datenschutz-Vorlagen mit To-do-Liste
5. Faktenseite mit recherchierten, zitierten Quellen
6. Feinschliff, Responsivität, Barrierefreiheit, Performance
7. Übergabe mit Liste der noch zu liefernden Fotos und der noch einzusetzenden Rechtstexte
