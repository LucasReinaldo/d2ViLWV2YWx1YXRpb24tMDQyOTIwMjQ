/*
 * Numeric Input Component
 *   HTML (initial state): <input type="text" class="c-numeric-input" />
 *   Requirement:
 *   - should only accept numeric value only such as: 1, 1.2, -5, or 1000
 *   [x] - if user enters leading zero, or .  when user moves focus away from the input, it should
 *     change to correct format:
 *       .1 ==> 0.1 and 01 => 1
 *   [x] - if user enter invalid character/value, HTML should change to this
 *       <input type="text" class="c-numeric-input c-numeric-input--error" />
 *       <span class="c-numeric-input__error-msg">invalid input</span>
 *   [x] - if user enter valid value and move focus away from the input HTML should change to this:
 *       <input type="text" class="c-numeric-input c-numeric-input--valid" />
 *   [x] - if user focus on the input or user clear value from the input,
 *     HTML should return to initial stage
 *
 * Lastly, please add some css for c-numeric-input--error and c-numeric-input--valid to show
 * red or green border to the input
 * */

const NumericInput = {
  init: () => {
    document.querySelectorAll(".c-numeric-input").forEach((elem) => {
      const errorMsg = document.createElement("span");

      elem.addEventListener("input", () => {
        if(elem.value.startsWith(".")) {
          return;
        }
        
        if (isNaN(elem.value)) {
          elem.classList.add("c-numeric-input--error");
          elem.classList.remove("c-numeric-input--valid");

          errorMsg.classList.add("c-numeric-input__error-msg");
          errorMsg.textContent = "invalid input";
          elem.parentNode.appendChild(errorMsg);
          return;
        }

        elem.classList.remove("c-numeric-input--error");
        errorMsg.remove();
      });

      elem.addEventListener("focus", () => {
        elem.classList.remove("c-numeric-input--error");
        elem.classList.remove("c-numeric-input--valid");

        errorMsg.remove();

        elem.value = "";
      });

      elem.addEventListener("blur", () => {
        if (elem.value === "") {
          elem.classList.remove("c-numeric-input--error");
          elem.classList.remove("c-numeric-input--valid");
          return;
        }

        if (elem.value === "0") {
          elem.value = "0.0";
        }

        if (elem.value.startsWith("0") && !elem.value.startsWith("0.")) {
          elem.value = elem.value.replace("0", "");
        }

        if (elem.value.startsWith(".")) {
          elem.value = elem.value.replace(".", "0.");
        }

        if (elem.value.endsWith(".")) {
          elem.value = elem.value + "0";
        }

        if (isNaN(elem.value)) {
          elem.classList.add("c-numeric-input--error");
          elem.classList.remove("c-numeric-input--valid");

          errorMsg.classList.add("c-numeric-input__error-msg");
          errorMsg.textContent = "invalid input";
          elem.parentNode.appendChild(errorMsg);
          return;
        }

        elem.classList.add("c-numeric-input--valid");
        elem.classList.remove("c-numeric-input--error");
        if (errorMsg) {
          errorMsg.remove();
        }
      });
    });
  },
};
document.addEventListener("DOMContentLoaded", NumericInput.init);
