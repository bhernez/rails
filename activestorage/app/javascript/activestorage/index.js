import { start } from "./ujs"
import { DirectUpload } from "./direct_upload"
import { FileChecksum } from "./file_checksum"
export { start, DirectUpload, FileChecksum }

function autostart() {
  if (window.ActiveStorage) {
    start()
  }
}

setTimeout(autostart, 1)
