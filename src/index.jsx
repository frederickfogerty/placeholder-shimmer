import Radium from 'radium'
import React from 'react'
import { range, map, get  } from 'lodash-fp'

const loaderAnimation = Radium.keyframes({
  '0%': { backgroundPosition: '-700px 0' },
  '100%': { backgroundPosition: '800px 0' },
})

const bgColor = '#f4f3f3'
const styles = {
  container: {
    margin: '2rem auto',
    width: '100%',
    height: 600,
    content: '',
    backgroundColor: '#f4f3f3',
    backgroundImage: 'linear-gradient( \
      to right, \
      #f4f3f3 0%, \
      #edeef1 20%, \
      #f4f3f3 40%, \
      #f4f3f3 100% \
    )',
    animation: 'x 1s infinite linear',
    animationName: loaderAnimation,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1400px 600px',
    boxShadow: '0 0 12px 2px rgba(0, 0, 0, 0.04)',
    overflow: 'none',
    position: 'relative',
  },
  block: {
    backgroundColor: 'white',
    position: 'absolute',
  }
}

const blocks = [
  { top: 300, left: 0, right: 0, height: 28 },
  { top: 300, left: 0, width: 40, bottom: 0 }, // left border
  { top: 300, right: 0, width: 40, bottom: 0 }, // right border
  { top: 328, left: '30%', right: 40, height: 8 }, // author bar
  { top: 336, left: 40, right: 40, height: 18 }, // between author and title bar
  { top: 354, left: '80%', right: 40, height: 14 }, // title bar
  { top: 368, left: 40, right: 40, height: 27 }, // between title and body
  { top: 403, left: 40, right: 40, height: 28 }, // below line 1
  { top: 439, left: 40, right: 40, height: 28 }, // below line 2
  { top: 467, left: '40%', right: 40, height: 8 }, // line 3
  { top: 475, bottom: 0, left: 40, right: 40 }, // bottom
]

const renderLine = index => <div
  style={[styles.paragraphLoader, index === 2 && { width: '40%' }]}
  />

const renderBlock = block => <div style={[styles.block, block]} />

const InitialLoader = (props) => {
  const _styles = get('style', props) || {}
  return (
    <div style={[styles.container, _styles]} >
      {map(renderBlock, blocks)}
    </div>
  )
}

export default Radium(InitialLoader)
