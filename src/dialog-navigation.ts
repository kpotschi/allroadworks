export function initializeDialogNavigation() {
  const pageDialogs = Array.from(document.querySelectorAll<HTMLDialogElement>('[data-page-dialog]'))

  function syncPageDialogs() {
    const requestedPage = window.location.hash.slice(1)

    for (const dialog of pageDialogs) {
      if (dialog.id === requestedPage && !dialog.open) {
        dialog.showModal()
      } else if (dialog.id !== requestedPage && dialog.open) {
        dialog.close()
      }
    }
  }

  function closePageDialog(dialog: HTMLDialogElement) {
    if (dialog.open) dialog.close()

    if (window.location.hash === `#${dialog.id}`) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    }
  }

  for (const dialog of pageDialogs) {
    dialog.addEventListener('cancel', (event) => {
      event.preventDefault()
      closePageDialog(dialog)
    })
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closePageDialog(dialog)
    })
  }

  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-close-page]')) {
    button.addEventListener('click', () => {
      const dialog = button.closest('dialog')
      if (dialog instanceof HTMLDialogElement) closePageDialog(dialog)
    })
  }

  window.addEventListener('hashchange', syncPageDialogs)
  syncPageDialogs()
}