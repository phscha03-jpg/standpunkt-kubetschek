# Projektabschluss: Standpunkt-Website Dr. Roman Kubetschek

Stand: 30. Juni 2026
Charakter der Website: Standpunkt-Website zum Zahnärztemangel. Keine Praxiswerbung, die Praxis nimmt keine neuen Patienten auf.
Zieldomain: loewen-zahn.de

---

## 1. SEO-Optimierung (was und wie)

Die Seite wurde technisch für Auffindbarkeit, Teilbarkeit und Reichweite optimiert. Bewusst NICHT für Patientensuche (keine Begriffe wie „Termin" oder „Prophylaxe", kein Dentist- oder MedicalBusiness-Schema), weil es um das Thema geht, nicht um Patientengewinnung.

- Meta-Daten je Seite: eigener Seitentitel und eigene Beschreibung für jede Unterseite. Das ist der Text, der in Google-Treffern erscheint.
- Eine klare H1-Überschrift pro Seite (auf der Startseite ergänzt). Wichtig für Suchmaschinen-Struktur.
- Social-Sharing: Open Graph und Twitter Cards je Seite, mit eigenen Titeln und Texten fürs Teilen. So sieht ein geteilter Link in WhatsApp, Facebook, LinkedIn und X sauber aus.
- Vorschaubilder fürs Teilen (1200x630 Pixel) für jede Hauptseite plus ein Standardbild. Bewusst als JPG, weil nicht alle sozialen Netzwerke das modernere WebP-Format als Vorschaubild zuverlässig anzeigen.
- Strukturierte Daten (JSON-LD): WebSite und Person seitenweit, Article auf den Inhaltsseiten. Hilft Google, die Inhalte korrekt einzuordnen.
- Sitemap (sitemap-index.xml) automatisch erzeugt, Impressum und Datenschutz ausgeschlossen. Dazu robots.txt mit Verweis auf die Sitemap und eine eigene 404-Fehlerseite.
- Canonical-URLs je Seite gegen doppelte Inhalte.
- Sprechende, lesbare Seitenadressen und interne Verlinkung über die Fußzeile.

## 2. Performance und Barrierefreiheit

- Schriften selbst gehostet und vorgeladen (kein externes Google-Fonts-CDN). Schneller und datenschutzfreundlich.
- Bilder automatisch als WebP in passenden Größen, mit Sofort- bzw. Lazy-Laden.
- Skip-Link „Zum Inhalt springen" für Tastatur- und Screenreader-Nutzung ergänzt.
- Kontrast des goldenen Kleintexts auf hellem Grund auf WCAG-Niveau angehoben.

## 3. Recht und Datenschutz

- Impressum vollständig: Zahnärztekammer, Aufsichtsbehörde, gesetzliche Grundlage (Heilberufsgesetz M-V), Link zur Berufsordnung. Steuernummer entfällt, da Freiberufler.
- Datenschutzerklärung: Stand „Juni 2026", Hosting auf 1blu AG (Berlin, Server in Deutschland), Platzhalter und Vorlage-Banner entfernt.
- Keine Tracker, keine Cookies zu Marketingzwecken, kein Kontaktformular, keine eingebetteten Drittanbieter.

## 4. Bild-Datenschutz (DSGVO)

Auf zwei Praxisfotos waren Patientendaten lesbar. Diese wurden verpixelt:

- Startseiten-Header (start-leitbild): Karteikarten, KZV-Kontaktliste mit Namen und Telefon, zentrales Patienten-Formular mit Mitgliedsnummer.
- Hintergrund-Seite (alltag-kalender): gelbes Patienten-Formular und KZV-Kontaktliste.

Alle übrigen Praxisfotos wurden geprüft und enthalten keine lesbaren Patientendaten. Auf den Bildschirmen sind nur Behandlungsarten und interne Raum- bzw. Mitarbeiternamen zu sehen, keine Patientennamen.

## 5. Inhaltliche Korrekturen und Quellenarbeit

Mehrere Aussagen wurden präzisiert und durchgehend mit Quellen belegt:

- Rückgang der Zahnarztzahl in M-V: Die nicht belegte Angabe „60 bis 70 gehen jährlich in Rente" wurde ersetzt durch die aus der Quelle ableitbare Zahl. 985 auf 778 in fünf Jahren, also rund 41 pro Jahr (netto). Angepasst auf Startseite und Hintergrund-Seite.
- Versorgungsgrad Nordwestmecklenburg (55,3 Prozent): Quelllink ergänzt (ZWP online). Prognose korrigiert auf die belegte Aussage „bis 2030 auf 45 bis 48 Prozent" (Nordkurier).
- Nachwuchs (10 von 70 bleiben): Quelllink ergänzt.
- GOZ-Punktwert seit 1988: Satz zur zugesagten jährlichen Inflationsanpassung ergänzt (siehe offene Punkte, Beleg noch offen).
- Block „Überregulierung und Bürokratie": zwei Quelllinks ergänzt (KZBV/BZÄK, Ifo-Studie) und hochzählende Kennzahl „1/5" der Arbeitszeit aufgenommen.
- Quellenseite: Nordkurier-Artikel korrekt datiert (1. Januar 2024) und verlinkt, doppelter Eintrag entfernt.
- Diverse Textfeinheiten: „die Falsche" großgeschrieben, „aus eigener Praxistätigkeit" statt „aus eigenem Erleben", Formulierung „Beispielsweise ist der GOZ-Punktwert ...".
- Technisch: Die Faktenbaustein-Komponente kann jetzt mehrere Quellen mit eigenem Link je Block anzeigen.

## 6. Domain und Kontakt

- Finale Domain loewen-zahn.de überall gesetzt (Adresse, Canonical, Sharing, Sitemap, Vorschaubilder).
- E-Mail allgemein: zahnmedizin@use.startmail.com
- E-Mail Presse: pressearbeit@use.startmail.com
- Telefon: 0395 5442332

---

## Erledigt im Abschluss

- E-Mail-Adressen und Telefonnummer bestätigt.
- Aussage zur zugesagten jährlichen GOZ-Inflationsanpassung bleibt im Text (kundenseitig bestätigt).

## Noch offen vor dem finalen Livegang auf 1blu

- Anwaltliche bzw. kammerseitige Prüfung von Impressum, Datenschutz und der Trennung zu projekt-nb.de.
- Veröffentlichung: Die Seite läuft als Test auf Cloudflare Pages (loewen-zahn.pages.dev). Für die finale Auslieferung ist der Umzug auf 1blu vorgesehen.
