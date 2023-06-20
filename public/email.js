const replacePlaceholderEmail = (node) => {
  // Get email and text
  const email = atob(node.dataset.email)
  const text = node.dataset.text || email

  // Create a new element
  const newNode = document.createElement('a')

  // Preserve data attributes
  newNode.dataset.email = node.dataset.email
  if (node.dataset.text) {
    newNode.dataset.text = node.dataset.text
  }

  // Add ID and content
  newNode.setAttribute('href', 'mailto:'.concat(email))
  newNode.innerText = text

  node.replaceWith(newNode)
}

document.addEventListener('DOMContentLoaded', function () {
  // Loop through all elements with "email--swap" classname
  var nodes = document.getElementsByClassName('email--swap')
  while (nodes.length) {
    replacePlaceholderEmail(nodes[0])
  }
})
