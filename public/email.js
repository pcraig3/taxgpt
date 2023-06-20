const obfuscateEmail = (node) => {
  // Create a new element
  const newNode = document.createElement('a')

  if (node.dataset.email) {
    // Preserve data attributes
    newNode.dataset.email = node.dataset.email
    if (node.dataset.text) {
      newNode.dataset.text = node.dataset.text
    }

    // Get email and text
    const email = atob(node.dataset.email)
    const text = node.dataset.text || email.split('?')[0]

    // Add dummy href and obfuscated email
    newNode.setAttribute('href', '#')
    // idea comes from https://mauriciorobayo.github.io/react-obfuscate-email/?path=/docs/react-obfuscate-email--mail
    newNode.innerHTML = text.replaceAll('@', '<span class="roe"></span>')

    newNode.addEventListener('mouseover', unobfuscateEmail, false)
    newNode.addEventListener('focus', unobfuscateEmail, false)

    node.replaceWith(newNode)
  }
}

function unobfuscateEmail(event) {
  const node = event.target
  if (node.dataset.email) {
    // Get email and text
    const email = atob(node.dataset.email)
    const text = node.dataset.text || email.split('?')[0]

    // Set real mailto attribute and content
    node.setAttribute('href', 'mailto:'.concat(email))
    node.innerText = text
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Loop through all elements with "email--swap" classname
  var nodes = document.getElementsByClassName('email--swap')
  while (nodes.length) {
    obfuscateEmail(nodes[0])
  }
})

// https://stackoverflow.com/a/68014751
// Detect when the URL changes, since Next imagines we do this all through useEffect or something
window.addEventListener(
  'load',
  function () {
    let oldHref = document.location.href,
      bodyDOM = document.querySelector('body')
    function checkModifiedBody() {
      let tmp = document.querySelector('body')
      if (tmp != bodyDOM) {
        bodyDOM = tmp
        observer.observe(bodyDOM, config)
      }
    }
    const observer = new MutationObserver(function (mutations) {
      if (oldHref != document.location.href) {
        oldHref = document.location.href

        /* START: MY CODE */
        // Loop through all elements with "email--swap" classname
        var nodes = document.getElementsByClassName('email--swap')
        while (nodes.length) {
          obfuscateEmail(nodes[0])
        }
        /* END: MY CODE */

        window.requestAnimationFrame(checkModifiedBody)
      }
    })
    const config = {
      childList: true,
      subtree: true,
    }
    observer.observe(bodyDOM, config)
  },
  false,
)
