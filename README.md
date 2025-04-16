
# 🖼️ pixelart-cli

A command-line tool to convert images into pixel art using different retro color palettes like NES, GameBoy, CGA, and more.

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/devflorez/pixelart-cli.git
cd pixelart-cli
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the project

```bash
npm run build
```

### 4. Link the CLI globally

```bash
npm link
```

---

## 🚀 Usage

```bash
pixelate -i <input> -o <output> [options]
```

### 📷 Example: single image

```bash
pixelate -i ./input.jpg -o ./output.png -s 12 --style gameboy --preview
```

### 📁 Example: batch processing (folder)

```bash
pixelate -i ./images -o ./pixelated-images -s 10 --style pastel --preview
```

---

## 🛠️ Options

| Option           | Description                                          | Default  |
|------------------|------------------------------------------------------|----------|
| `-i, --input`    | Path to the input image or folder (required)        |          |
| `-o, --output`   | Path to the output image or folder (required)       |          |
| `-s, --size`     | Pixel size for downscaling                          | `10`     |
| `--style`        | Color palette to use (see below)                    | `normal` |
| `--preview`      | Automatically open the result after processing      | `false`  |

---

## 🎨 Supported Styles

- `normal` (full color)
- `nes`
- `gameboy`
- `grayscale`
- `cga`
- `amiga`
- `commodore64`
- `sepia`
- `solarized`
- `pastel`

> You can also extend the palette list in [`src/palettes.ts`](src/palettes.ts)

---

## 🧪 Development & Testing

Run tests using [Vitest](https://vitest.dev):

```bash
npm run test
```

To start development without building:

```bash
npm run start -- -i ./input.jpg -o ./out.png --style nes
```

---

## 🙋‍♂️ Contributing

Pull requests are welcome! Feel free to suggest features, palettes or bug fixes.

---

## 📄 License

MIT License