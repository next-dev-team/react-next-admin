import { Workbox } from 'workbox-window'

// Check if the serviceWorker Object exists in the navigator object ( means if browser supports SW )
if ('serviceWorker' in navigator && false) {
  const wb = new Workbox('./service-worker.js')

  wb.addEventListener('installed', (event) => {
    /**
     * We have the condition - event.isUpdate because we don't want to show
     * this message on the very first service worker installation,
     * only on the updated
     */
    if (event.isUpdate) {
      if (confirm(`New app update is available!. Click OK to refresh`)) {
        window.location.reload()
      }
    }
  })
  wb.register()
}
