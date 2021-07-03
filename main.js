const Colors = Object.freeze({
  BLUE: "blue",
  RED: "red",
  GREEN: "green",
  ORANGE: "orange",
  BLACK: "black",
});

const getCurrentColor = () => {
  const colorSelected = document.querySelector(".colors__item--selected");

  for (const key in Colors) {
    if (colorSelected.classList.contains(Colors[key])) {
      return key;
    }
  }
};

const getCssBackgroundColor = (key) =>
  `linear-gradient(45deg,var(--${Colors[key]}),var(--light-${Colors[key]}))`;

const updateElementsColor = (currentColor) => {
  const elementsWithColor = document.querySelectorAll(".selected-color");
  const colorSelected = document.querySelector(".colors__item--selected");

  // Updates below banner color allowing the effect
  // of sliding the new selected color
  const belowBanner = document.querySelector(".below-banner");
  belowBanner.style.setProperty(
    "background-image",
    getCssBackgroundColor(currentColor)
  );

  for (const key in Colors) {
    if (colorSelected.classList.contains(Colors[key])) {
      // Updates the image based on Color
      const img = document.querySelector(".shoes");
      img.src = `assets/img/${Colors[key]}.png`;

      //updates the color of each element in `elementsWithColor`
      for (const element of elementsWithColor) {
        if (
          Colors[key] === "blue" ||
          Colors[key] == "black" ||
          Colors[key] == "green"
        ) {
          element.style.setProperty(
            "background-color",
            `var(--light-${Colors[key]})`
          );
        } else {
          element.style.setProperty(
            "background-color",
            `var(--${Colors[key]})`
          );
        }
      }

      // Updates the banner color
      const banner = document.querySelector(".banner");
      banner.style.setProperty("background-image", getCssBackgroundColor(key));

      // restart the animation
      if (currentColor !== key) {
        banner.classList.add("change-color-animation");
        banner.style.animation = "none";
        banner.offsetHeight;
        banner.style.animation = null;
      }

      break;
    }
  }
};

const selectColor = (element) => {
  removeScaleButton();
  const currentColor = getCurrentColor();

  const items = document.querySelectorAll(".colors__item");
  const selectedStr = "colors__item--selected";

  for (const item of items) {
    if (item.classList.contains(selectedStr)) {
      item.classList.remove(selectedStr);
    }
  }

  element.classList.add(selectedStr);

  updateElementsColor(currentColor);
};

const selectSize = (element) => {
  removeScaleButton();

  const items = document.querySelectorAll(".sizes__item");
  const selectedStr = "sizes__item--selected";

  for (const item of items) {
    if (item.classList.contains(selectedStr)) {
      item.classList.remove(selectedStr, "selected-color");
      item.style.setProperty("background-color", "var(--alto");
    }
  }

  element.classList.add(selectedStr, "selected-color");

  const currentColor = getCurrentColor();
  updateElementsColor(currentColor);
};

const scaleButton = (element) => {
  element.style.setProperty("transform", "scale(1.15)");
};

const removeScaleButton = () => {
  const button = document.querySelector(".add-cart");
  button.style.removeProperty("transform");
};
