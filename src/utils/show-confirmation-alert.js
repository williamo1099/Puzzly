import Swal from "sweetalert2";

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
      onConfirm();
    } else {
      onCancel();
    }
  });
}

export default showConfirmationAlert;
