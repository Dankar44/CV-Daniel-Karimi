import fitz
import json

doc = fitz.open('Carta recomendación a Daniel Karimi.pdf')
page = doc[0]

# Extract images
images = page.get_images()
for i, img in enumerate(images):
    xref = img[0]
    base_image = doc.extract_image(xref)
    with open(f"public/extracted_img_{i}.{base_image['ext']}", "wb") as f:
        f.write(base_image['image'])

# Extract text block coordinates and formatting
text_blocks = page.get_text("dict")["blocks"]
data = []
for block in text_blocks:
    if block['type'] == 0:  # text
        for line in block['lines']:
            for span in line['spans']:
                data.append({
                    "text": span["text"],
                    "font": span["font"],
                    "size": span["size"],
                    "color": span["color"],
                    "bbox": span["bbox"]
                })

with open("pdf_layout.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Images and layout extracted")
doc.close()
