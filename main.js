const getCssBackgroundColor = (color) => {
  return `linear-gradient(45deg,var(--${color}),var(--light-${color}))`;
};

const updateElementsColor = () => {
  const colorSelected = document.querySelector(".colors__item--selected");
  const currentColor = colorSelected.dataset.color;
  const currentImage = document.querySelector(".shoes.active");
  const newImage = document.querySelector(`.shoes[data-color=${currentColor}`);

  currentImage.classList.remove("active");
  newImage.classList.add("active");

  const elementsWithColor = document.querySelectorAll(".selected-color");
  const sizes = document.querySelectorAll(".sizes__item");
  const lightColors = ["blue", "black", "green"];
  const banner = document.querySelector(".banner");
  const belowBanner = document.querySelector(".below-banner");
  const shareIcon = document.querySelector(".share__icon");
  const cssColor = lightColors.includes(currentColor)
    ? `var(--light-${currentColor})`
    : `var(--${currentColor})`;

  sizes.forEach((element) =>
    element.style.setProperty("background-color", "var(--alto)")
  );
  elementsWithColor.forEach((element) =>
    element.style.setProperty("background-color", cssColor)
  );

  banner.style.setProperty(
    "background-image",
    getCssBackgroundColor(currentColor)
  );

  if (!banner.classList.contains(currentColor)) {
    banner.classList.add("change-color-animation");
    banner.style.animation = "none";
    banner.offsetHeight;
    banner.style.animation = null;
  }

  belowBanner.style.setProperty(
    "background-image",
    getCssBackgroundColor(currentColor)
  );

  shareIcon.style.setProperty("fill", cssColor);
};

const selectColor = (element) => {
  const selectedString = "colors__item--selected";
  const colorSelected = document.querySelector(`.${selectedString}`);

  colorSelected.classList.remove(selectedString);

  element.classList.add(selectedString);

  updateElementsColor();
};

const selectSize = (element) => {
  const itemSelected = "sizes__item--selected";
  const controlClass = "selected-color";
  const item = document.querySelector(`.${itemSelected}`);

  item.classList.remove(itemSelected, controlClass);
  element.classList.add(itemSelected, controlClass);

  updateElementsColor();
};
