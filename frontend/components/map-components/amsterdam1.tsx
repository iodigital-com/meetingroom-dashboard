import React from 'react';
import styles from './styles';

const Amsterdam1Map = () => {
  const renderEuropaplein = () => {
    return (
      <>
        <text transform="matrix(1 0 0 1 364 29)" style={styles.roomName} >Europaplein</text>
        <path style={styles.roomAvailable} d="M411.3,35.4c0.5,0.4,0.9,1,0.9,1.7v25c0,1.1-0.9,2-2,2h-25c-1.1,0-2-0.9-2-2v-25c0-1.1,0.9-2,2-2h12" />
        {/* <text transform="matrix(1 0 0 1 378 8)">
          <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
          <tspan x="0" y="8" style={styles.availabilityText}>10 minutes</tspan>
        </text>
        <circle style={styles.clockIcon} cx="369" cy="11" r="6" />
        <polyline style={styles.clockIcon} points="369,7 369,11 373,11 " /> */}
      </>
    )
  }

  const renderMercatorplein = () => {
    return (
      <>
        <text transform="matrix(1 0 0 1 358 128)" style={styles.roomName} >Mercatorplein</text>
        <path style={styles.roomAvailable} d="M397.2,111.1h-12c-1.1,0-2-0.9-2-2v-25c0-1.1,0.9-2,2-2h25c1.1,0,2,0.9,2,2v25c0,0.8-0.5,1.5-1.2,1.8" />
        {/* <text transform="matrix(1 0 0 1 374 138)">
          <tspan x="0" y="0" style={styles.availabilityText} >Available in </tspan>
          <tspan x="0" y="8" style={styles.availabilityText} >10 minutes</tspan>
        </text>
        <circle style={styles.clockIcon} cx="364" cy="141" r="6" />
        <polyline style={styles.clockIcon} points="364,137 364,141 368,141s " /> */}
      </>
    )
  }


  const renderLeidsplein = () => {
    return (
      <>
        <text transform="matrix(1 0 0 1 108 37)" style={styles.roomName} >Leidsplein</text>
        <path style={styles.roomAvailable} d="M158,40.1v38.4c0,1.3-1.1,2.4-2.4,2.4h-38.3c-1.3,0-2.4-1.1-2.4-2.4V40.1" />
        {/* <text transform="matrix(1 0 0 1 122 16)">
          <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
          <tspan x="0" y="8" style={styles.availabilityText}>10 minutes</tspan>
        </text>
        <circle style={styles.clockIcon} cx="113" cy="19" r="6" />
        <polyline style={styles.clockIcon} points="113,15 113,19 117,19 " /> */}
      </>
    )
  }

  const renderSurinameplein = () => {
    return (
      <>
        <text transform="matrix(1 0 0 1 189 85)" style={styles.roomName} >Surinameplein</text>
        <path style={styles.roomAvailable} d="M248.6,53.1h20.1c1.5,0,2.7,0.7,2.7,1.5v18.1c0,0.8-1.2,1.5-2.7,1.5h-33.6c-1.5,0-2.7-0.7-2.7-1.5V54.5c0-0.8,1.2-1.5,2.7-1.5"/>
        {/* <text transform="matrix(1 0 0 1 206 96)">
          <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
          <tspan x="0" y="8" style={styles.availabilityText}>10 minutes</tspan>
        </text>
        <circle style={styles.clockIcon} cx="196" cy="98" r="6" />
        <polyline style={styles.clockIcon} points="196,93 196,98 200,98  " /> */}
      </>
    )
  }

  const renderRembrandtplein = () => {
    return (
      <>
        <text transform="matrix(1 0 0 1 496 130)" style={styles.roomName} >Rembrandtplein</text>
        <path style={styles.roomAvailable} d="M519.4,108.1h62c1.1,0,2-0.9,2-2v-31c0-1.1-0.9-2-2-2h-78c-1.1,0-2,0.9-2,2v31c0,0.8,0.4,1.5,1.1,1.8" />
        {/* <text transform="matrix(1 0 0 1 511 142)">
          <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
          <tspan x="0" y="8" style={styles.availabilityText}>10 minutes</tspan>  
        </text>
        <circle style={styles.clockIcon} cx="502.4" cy="145.1" r="6" />
        <polyline style={styles.clockIcon} points="502,141 502,145 506,145 " /> */}
      </>
    )
  }

  const renderAlexanderplein = () => {
    return (
      <>
        <text transform="matrix(1 0 0 1 556 40)" style={styles.roomName} >Alexanderplein</text>
        <path style={styles.roomUnAvailable} d="M595.4,45.1h14c1.1,0,2,0.9,2,2v25c0,1.1-0.9,2-2,2h-25c-1.1,0-2-0.9-2-2v-25c0-0.6,0.2-1.1,0.6-1.4" />
        <text transform="matrix(1 0 0 1 571 18)">
          <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
          <tspan x="0" y="8" style={styles.availabilityText}>10 minutes</tspan>
        </text>
        <circle style={styles.clockIcon} cx="562" cy="21" r="6" />
        <polyline style={styles.clockIcon} points="562,17 562,21 566,21 " />
      </>
    )
  }

  const renderRaamplein = () => {
    return (
      <>
        <text transform="matrix(1 0 0 1 456 40)" style={styles.roomName} >Raamplein</text>
        <path style={styles.roomAvailable} d="M502.9,45.7c0.3,0.4,0.5,0.8,0.5,1.4v25 c0,1.1-0.9,2-2,2h-25c-1.1,0-2-0.9-2-2v-25c0-1.1,0.9-2,2-2h13" />
        {/* <text transform="matrix(1 0 0 1 470.9077 20.8788)">
          <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
          <tspan x="0" y="8" style={styles.availabilityText}>10 minutes</tspan>
        </text>
        <circle style={styles.clockIcon} cx="461" cy="23" r="6" />
        <polyline style={styles.clockIcon} points="461,19 461,23 465,23 " /> */}
      </>
    )
  }

  const renderMuntplein = () => {
    return (
      <>
        <text transform="matrix(1 0 0 1 86 162)" style={styles.roomName}>Muntplein</text>
        <path style={styles.roomAvailable} d="M118.4,135.2v13.9c0,1-1,1.9-2.3,1.9H87.7c-1.3,0-2.3-0.8-2.3-1.9v-23.2c0-1,1-1.9,2.3-1.9h28.4c1.1,0,2,0.6,2.2,1.4"/>
        {/* <text transform="matrix(1 0 0 1 102 172)">
          <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
          <tspan x="0" y="8" style={styles.availabilityText}>10 minutes</tspan>
        </text>
        <circle style={styles.clockIcon} cx="93" cy="175" r="6" />
        <polyline style={styles.clockIcon} points="93,171 93,175 97,175 " /> */}
      </>
    )
  }


  const renderVictorieplein = () => {
    return (
      <>
        <text transform="matrix(1 0 0 1 271 49)" style={styles.roomName} >Victorieplein</text>
        <path style={styles.roomUnAvailable} d="M311.4,62.5v10.1c0,0.8-1.2,1.5-2.8,1.5h-34.4c-1.5,0-2.8-0.7-2.8-1.5V54.5c0-0.8,1.2-1.5,2.8-1.5h34.4c1.5,0,2.8,0.7,2.8,1.5v2.2"/>
        <text transform="matrix(1 0 0 1 286 28)">
          <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
          <tspan x="0" y="8" style={styles.availabilityText}>10 minutes</tspan>
        </text>
        <circle style={styles.clockIcon} cx="277" cy="31" r="6" />
        <polyline style={styles.clockIcon} points="277,27 277,31 281,31" />
      </>
    )
  }


  const renderNoordermarkt = () => {
    return (
      <>
        <text transform="matrix(1 0 0 1 2 119)" style={styles.roomName} >Noordermarkt</text>
        <path style={styles.roomUnAvailable} d="M56.6,125.2c0.3-0.7,1-1.1,1.8-1.1h25c1.1,0,2,0.8,2,1.9v23.2c0,1-0.9,1.9-2,1.9h-25c-1.1,0-2-0.8-2-1.9v-14.9"/>
        <text transform="matrix(1 0 0 1 18 98)">
          <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
          <tspan x="0" y="8" style={styles.availabilityText}>10 minutes</tspan>
        </text>
        <circle style={styles.clockIcon} cx="9" cy="101" r="6" />
        <polyline style={styles.clockIcon} points="9,97 9,101 13,101" />
      </>
    )
  }

  return (
    <svg viewBox="0 0 640 450" style={{ width: '100%' }}>
      { renderEuropaplein()}
      { renderMercatorplein()}
      { renderLeidsplein()}
      { renderSurinameplein()}
      { renderRembrandtplein()}
      { renderAlexanderplein()}
      { renderRaamplein()}
      { renderMuntplein()}
      { renderVictorieplein()}
      { renderNoordermarkt()}
    </svg>
  )
}

export default Amsterdam1Map




