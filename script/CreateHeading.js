export function CreateHeading(heading_text) {
  const heading = document.createElement("h1");
  heading.className = "heading";
  heading.textContent = heading_text;
  return heading;
}
