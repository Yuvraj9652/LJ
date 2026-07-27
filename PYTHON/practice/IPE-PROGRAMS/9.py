import SimpleGUICS2Pygame.simpleguics2pygame as simplegui

WIDTH = 400
HEIGHT = 400

def draw(canvas):
    # Yellow background rectangle
    canvas.draw_polygon([(50, 50), (350, 50), (350, 350), (50, 350)],
                        2, "Black", "Yellow")

    # Top-left circle (Pink with Red border)
    canvas.draw_circle((130, 130), 35, 2, "Red", "Pink")

    # Top-right circle (Lime with Green border)
    canvas.draw_circle((270, 130), 35, 2, "Green", "Lime")

    # Bottom-left circle (Lime with Green border)
    canvas.draw_circle((130, 270), 35, 2, "Green", "Lime")

    # Bottom-right circle (Pink with Red border)
    canvas.draw_circle((270, 270), 35, 2, "Red", "Pink")

    # Center square (Aqua with Blue border)
    canvas.draw_polygon([(170,170), (230,170), (230,230), (170,230)],
                        2, "Blue", "Aqua")

# Create frame
frame = simplegui.create_frame("Drawing Example", WIDTH, HEIGHT)
frame.set_draw_handler(draw)

# Start frame
frame.start()