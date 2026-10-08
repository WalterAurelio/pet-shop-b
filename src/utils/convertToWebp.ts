import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const inputDirectory = path.join(projectRoot, "src", "assets", "img");
const outputDirectory = path.join(inputDirectory, "webp");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);

async function convertImagesToWebp() {
  await fs.mkdir(outputDirectory, { recursive: true });

  const files = await fs.readdir(inputDirectory, { withFileTypes: true });
  const imageFiles = files.filter((file) => file.isFile() && supportedExtensions.has(path.extname(file.name).toLowerCase()));

  if (imageFiles.length === 0) {
    console.log("No se encontraron imágenes JPG, JPEG o PNG para convertir.");
    return;
  }

  for (const file of imageFiles) {
    const inputPath = path.join(inputDirectory, file.name);
    const outputName = `${path.parse(file.name).name}.webp`;
    const outputPath = path.join(outputDirectory, outputName);

    await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
    console.log(`Convertida: ${file.name} -> webp/${outputName}`);
  }

  console.log(`Conversión completada: ${imageFiles.length} imagen(es).`);
}

await convertImagesToWebp();
