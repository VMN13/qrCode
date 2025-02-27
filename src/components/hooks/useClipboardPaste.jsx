import { useCallback, useState } from "react";

const UseClipboardPaste = () => {
  const [pastedText, setPastedText] = useState('');
  const pasteFromClipboard = useCallback(async () => {
    if (navigator.clipboard) {
      const text = await navigator.clipboard.readText()
      setPastedText(text)
    } else {
      console.log('Clipboard not available');
    }
  }, [])

  return [pastedText, pasteFromClipboard]
}



export default UseClipboardPaste