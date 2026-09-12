# Hover! Maze
A 3D Three.js application inspired by the original Hover! Windows 95 game.

NOTE: Needs a local server (such as the Web Server for Chrome extension) to run properly from source code. A hosted version can be found on my portfolio website: http://isaacmadsen.com/hover_maze.html

### Deploying:
The game is plain static files with no build step. Copy the contents of
`Hover_Maze/` (`index.html`, `js/`, `data/`) to any folder on a web server. All
asset paths are relative, so it works from the site root or from any sub-path,
e.g. `https://www.example.com/hover/` — including when opened without the
trailing slash (`/hover`).

### Goal:
Each ward is a walled compound of courtyards, buildings and rooftop terraces.
Flags are hidden across all of it — on the ground, inside rooms, and up on the
roofs — and you have to collect every one before the clock runs out. Look for
the beams of light rising off the uncollected ones, and take a ramp to get up
to them. Clipping a wall costs points and spins you out; whatever time is left
on the clock is worth three points a second, and each flag is worth 150.

### Controls:

Desktop
- W - Hold to increase velocity
- S - Hold to slow down/reverse
- A/D - Hold to rotate hovercraft
- Esc / P - Pause

Touch
- Drag anywhere - a thumbstick appears under your thumb; left and right steer,
  up and down drive and reverse
- The button in the bottom corner pauses

### Getting around:
There is more than one way to anywhere, and picking well is most of the game.

- **Ramps** take you up. A ramp is a solid wedge, so you have to line up and
  take it head on from the bottom; you can drive back down the same way.
- **Deck edges** are only kerbed, not walled. Drive over the lip and you drop
  to whatever is below — usually the quickest way down, and often the quickest
  way across.
- **Tunnels** run right through most buildings, under the terrace above. Cutting
  through the middle of a ward beats driving around the outside of it.
- **Sunken passages** dive under the plaza itself. A trench cut in the paving
  ramps down at each end, and the passage between them runs beneath the ward —
  the straightest line across, if you can find the mouth.
- **Bridges** link terraces, so the rooftops are a road network of their own,
  with the ground still open underneath them.

Every ward is laid out so that nearly every flag has a second viable approach,
typically only 10–40% longer than the best one — close enough that the choice is
worth thinking about. No two ramps are ever allowed to touch, and a ramp always
delivers onto flat deck, so a climb never dumps you back where you started.

The mirror shows what is behind you; the map is drawn heading-up and slices
whichever storey you are on, with a gold pip for every flag still out there.

### Levels:
Six wards, unlocked in order and remembered between visits.

Storeys count the sunken passage level as well as the plaza and everything
above it.

| # | Ward | Size | Storeys | Flags | Tunnels | Sunken | Drones | Clock |
|---|------|------|---------|-------|---------|--------|--------|-------|
| 1 | Training Yard | 11 x 11 | 3 | 3 | 1 | 1 | – | 2:00 |
| 2 | Old Courtyard | 14 x 14 | 3 | 4 | 3 | 1 | – | 2:40 |
| 3 | The Cloisters | 16 x 16 | 4 | 5 | 4 | 2 | – | 3:50 |
| 4 | Gauntlet Ward | 18 x 18 | 4 | 6 | 4 | 2 | 2 | 5:10 |
| 5 | High Citadel | 20 x 20 | 4 | 7 | 6 | 3 | 3 | 5:50 |
| 6 | The Keep | 22 x 22 | 4 | 8 | 8 | 3 | 4 | 6:40 |

Every ward hides one flag on its top storey and one down in the passages, so a
clean run uses the whole height of the place.

Levels are data, not code — see the ASCII plans in `js/levels.js` and the
builder in `js/worldmap.js` if you want to lay out your own. Each storey is one
plan, ground floor first, with `ground` naming which of them sits at y = 0 —
anything before it is underground. The wall lines carry the walls and the cell
contents say what is there: deck, open air, ramp, flag or the start.

### Drones:
The last three wards are patrolled. Drones sweep the plaza cell by cell and will
run you down if they spot you, costing 100 points and a spin-out. They keep to
the ground, though — a ramp or a trench mouth breaks the chase, which is a large
part of what those routes are for. They show as red pips on the map.

### Best runs:
Every finished attempt is filed on a leader board held in local storage, best
first, ten deep per ward — tag, flags found, time taken and score. Clearing the
last ward also files the unbroken chain of wards behind it as a campaign run.
Reach it from **Best runs** on the menu or from the panel at the end of a run,
where the row you just set is highlighted. The tag on your runs is editable
there and remembered. Nothing leaves the machine.

### Detail levels:
The game picks high, medium or low detail from what the browser reports about the
device, and the menu has an override. The tier controls skybox resolution, wall
mesh density, how many point lights the world gets, particle counts, and how often
the mirror and map refresh.
