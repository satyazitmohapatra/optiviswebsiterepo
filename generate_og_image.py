from PIL import Image, ImageDraw, ImageFont
import os

# Create a 1200x630 image (standard OG image size)
width, height = 1200, 630
background_color = (10, 25, 47)  # Dark blue background
image = Image.new('RGB', (width, height), background_color)
draw = ImageDraw.Draw(image)

# Try to use a nice font, fall back to default if not available
try:
    title_font = ImageFont.truetype("arial.ttf", 120)
    subtitle_font = ImageFont.truetype("arial.ttf", 48)
    tagline_font = ImageFont.truetype("arial.ttf", 36)
except:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    tagline_font = ImageFont.load_default()

# Add a gradient-like effect with colored rectangles
accent_color = (0, 150, 255)  # Bright blue accent
draw.rectangle([(0, 0), (300, 630)], fill=accent_color)
draw.rectangle([(900, 0), (1200, 630)], fill=(30, 50, 80))

# Main title
title = "OPTIVIS"
title_bbox = draw.textbbox((0, 0), title, font=title_font)
title_width = title_bbox[2] - title_bbox[0]
title_x = (width - title_width) // 2
draw.text((title_x, 150), title, font=title_font, fill=(255, 255, 255))

# Subtitle
subtitle = "Digital Transformation & Web Development"
subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
subtitle_x = (width - subtitle_width) // 2
draw.text((subtitle_x, 320), subtitle, font=subtitle_font, fill=(200, 220, 255))

# Tagline
tagline = "Empowering Digital Enterprise"
tagline_bbox = draw.textbbox((0, 0), tagline, font=tagline_font)
tagline_width = tagline_bbox[2] - tagline_bbox[0]
tagline_x = (width - tagline_width) // 2
draw.text((tagline_x, 500), tagline, font=tagline_font, fill=accent_color)

# Save the image
output_path = os.path.join(os.path.dirname(__file__), 'public', 'og-image.png')
image.save(output_path)
print(f"✅ OG image generated successfully at: {output_path}")
