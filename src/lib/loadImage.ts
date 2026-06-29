// Lädt lokale Bilder aus src/assets/images per Dateiname.
// Gibt undefined zurück, wenn die Datei (noch) fehlt, dann fällt
// die jeweilige Komponente auf ihren Platzhalter zurück.
const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/*.{jpg,jpeg,JPG,png,webp,avif}",
  { eager: true },
);

export function loadImage(filename: string): ImageMetadata | undefined {
  return images[`/src/assets/images/${filename}`]?.default;
}
