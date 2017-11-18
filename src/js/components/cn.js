// cn.js

// A mapping from virtual class -> functional class
const virtualToFunctional = {
  '-text-style-emphasis': 'uppercase font-san-francisco letter-spacing-1'
  // ...
}

function convertVirtualClassnames (classNames) {
  return classNames.split(' ').map((className) => (
    // If mapping exists, use that. Else leave it as is
    virtualToFunctional[className] || className
  )).join(' ')
}

// This becomes "cn"
export default convertVirtualClassnames
