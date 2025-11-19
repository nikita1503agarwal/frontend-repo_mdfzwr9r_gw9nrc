import { Download } from 'lucide-react'

function DownloadPPT() {
  const backend = import.meta.env.VITE_BACKEND_URL || window.location.origin.replace(/:\\d+$/, ':8000')
  const url = `${backend}/api/export/pptx`

  return (
    <div className="flex justify-center">
      <a
        href={url}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors border border-blue-400/30"
      >
        <Download className="w-4 h-4" />
        Download PPTX
      </a>
    </div>
  )
}

export default DownloadPPT