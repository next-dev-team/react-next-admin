/**
 * @description copy text to clipboard
 */
export const _copyToClipboard = (text: unknown = '', msgAsText = false) => {
  const copyText = typeof text !== 'string' ? JSON.stringify(text) : text

  return navigator.clipboard.writeText(copyText).then(
    function () {
      _message.success(msgAsText ? `Copies: ${copyText}` : 'Copies successful')
    },
    function (err) {
      console.error('Async: Could not copy text: ', err)
    },
  )
}
