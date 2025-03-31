import Swal from "sweetalert2";

import playSound from "./playSound";
import withClickSound from "./withClickSound";
import { SOUND_FILENAMES } from "../constants/soundFilenames";

/**
 * Show error alert using SweetAlert2.
 *
 * @param {*} title
 * @param {*} text
 * @param {*} confirmButtonText
 */
function showErrorAlert(title, text, confirmButtonText) {
  playSound(SOUND_FILENAMES.ERROR);

  Swal.fire({
    title,
    text,
    icon: "error",
    showCancelButton: false,
    confirmButtonText,
    customClass: {
      title: "alert-title",
      htmlContainer: "alert-text",
      actions: "alert-actions-container",
      confirmButton: "alert-confirm-button",
    },
    buttonsStyling: false,
  }).then(() => {
    withClickSound(() => {})();
  });
}

export default showErrorAlert;
