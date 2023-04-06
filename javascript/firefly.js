const fireflyQuantity = 70
    // Default amount is 50

const fireflyContainer = document.createElement('div')
fireflyContainer.setAttribute('id', 'firefly-container')

for (let i = 1; i <= fireflyQuantity; i++) {
    const firefly = document.createElement('div')
    firefly.classList.add('firefly')
    fireflyContainer.appendChild(firefly)
}

document.body.appendChild(fireflyContainer)

const fireflyStyles = document.getElementById('firefly-styles')

let generatedStyles = ''

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for (let i = 1; i <= fireflyQuantity; i++) {
    const rotationSpeed = getRandom(10, 18)
    const flashDuration = getRandom(5000, 11000)
    const flashDelay = getRandom(500, 8500)

    generatedStyles += `
    .firefly:nth-child(${i}) {
      animation-name: move${i};
    }
    .firefly:nth-child(${i})::before {
      animation-duration: ${rotationSpeed}s;
    }
    .firefly:nth-child(${i})::after {
      animation-duration: ${rotationSpeed}s, ${flashDuration}ms;
      animation-delay: 0ms, ${flashDelay}ms;
    }
    @keyframes move${i} {
  `

    const steps = getRandom(16, 28)

    for (let step = 0; step <= steps; step++) {
        const x = getRandom(-50, 50)
        const y = getRandom(-50, 50)
        const scale = getRandom(25, 100) / 100

        generatedStyles += `
      ${step * (100 / steps)}% {
        transform: translateX(${x}vw) translateY(${y}vh) scale(${scale});
      }
    `
    }

    generatedStyles += `
    }
  `
}

fireflyStyles.textContent = generatedStyles