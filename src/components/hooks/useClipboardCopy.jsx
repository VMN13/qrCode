import { useCallback } from "react"

const UseClipboardCopy = () => {
  const copyToClipboard = useCallback((text) => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          console.log('Text copied to clipboard');
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        })
      } else {
        console.log('Clipboard not available');
      }
  }, []);

  return  copyToClipboard 
}

export default UseClipboardCopy