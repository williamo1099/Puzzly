import Swal from "sweetalert2";

function showErrorAlert(title, text, confirmButtonText) {
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
  });
}

export default showErrorAlert;
