import fitz
import json

doc = fitz.open('Carta recomendación a Daniel Karimi.pdf')
page = doc[0]

img_data = []
for item in page.get_image_info():
    img_data.append({
        "bbox": item["bbox"],
        "width": item["width"],
        "height": item["height"]
    })

with open("img_layout.json", "w") as f:
    json.dump(img_data, f, indent=2)

print("Image bounding boxes extracted")
