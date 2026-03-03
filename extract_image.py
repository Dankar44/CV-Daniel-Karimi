import fitz

doc = fitz.open('Carta recomendación a Daniel Karimi.pdf')
page = doc[0]
image_list = page.get_images()

if image_list:
    xref = image_list[0][0]
    base_image = doc.extract_image(xref)
    image_bytes = base_image["image"]
    image_ext = base_image["ext"]
    
    with open(f"public/logos-csic.{image_ext}", "wb") as f:
        f.write(image_bytes)
    print(f"Image extracted to public/logos-csic.{image_ext}")
else:
    print("No images found on page 1")

doc.close()
