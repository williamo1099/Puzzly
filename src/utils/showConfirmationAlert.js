import Swal from "sweetalert2";

import withClickSound from "./withClickSound";

/**
 * Show confirmation alert using SweetAlert2.
 *
 * @param {*} title
 * @param {*} text
 * @param {*} confirmButtonText
 * @param {*} cancelButtonText
 * @param {*} onConfirm
 * @param {*} onCancel
 */
function showConfirmationAlert(
  title,
  text,
  confirmButtonText,
  cancelButtonText,
  onConfirm = () => {},
  onCancel = () => {}
) {
  Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    customClass: {
      title: "alert-title",
      htmlContainer: "alert-text",
      actions: "alert-actions-container",
      confirmButton: "alert-confirm-button",
      cancelButton: "alert-cancel-button",
    },
    buttonsStyling: false,
  }).then((result) => {
    if (result.isConfirmed) {
      withClickSound(onConfirm)();
    } else {
      withClickSound(onCancel)();
    }
  });
}

export default showConfirmationAlert;
