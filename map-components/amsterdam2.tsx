import React from 'react';

const Amsterdam2Map = () => {
  const renderStadionplein = () => {
    return (
      <>
        <text transform="matrix(1 0 0 1 432 157)" style={styles.roomName}>Stadionplein</text>
              <path style={styles.roomAvailable} d="M464,127h-12c-1.1,0-2-0.9-2-2v-25
            c0-1.1,0.9-2,2-2h25c1.1,0,2,0.9,2,2v25c0,0.7-0.4,1.3-0.9,1.7"/>
        {/*
      <text transform="matrix(1 0 0 1 447 137)">
        <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
        <tspan x="0" y="8.4" style={styles.availabilityText}>10 minutes</tspan>
      </text>
      <circle style={styles.clockIcon} cx="438.4" cy="140.1" r="6"/>
      <polyline style={styles.clockIcon} points="438.4,136.3 438.4,140.9 442.4,140.9      "/>
        */}
      </>
    )
  }

  const renderBeukenplein = () => {
    return (
      <>
        <text transform="matrix(1 0 0 1 358 128)" style={styles.roomName} >Beukenplein</text>
        <path style={styles.roomAvailable} d="M397.2,111.1h-12c-1.1,0-2-0.9-2-2v-25c0-1.1,0.9-2,2-2h25c1.1,0,2,0.9,2,2v25c0,0.8-0.5,1.5-1.2,1.8" />
        {/*
        <text transform="matrix(1 0 0 1 354 134)">
        <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
        <tspan x="0" y="8.4" style={styles.availabilityText}>10 minutes</tspan>
      </text>
      <circle style={styles.clockIcon} cx="345.4" cy="137.1" r="6"/>
      <polyline style={styles.clockIcon} points="345.4,133.3 345.4,137.9 349.4,137.9      "/>
        */}
      </>
    )
  }


  const renderWaterlooplein = () => {
    return (
      <>
      <text transform="matrix(1 0 0 1 278 57)" style={styles.roomName}>Waterlooplein</text>
      <path style={styles.roomAvailable} d="M309.2,112.8c-0.7-0.3-1.2-1-1.2-1.8V66
            c0-1.1,0.9-2,2-2h25c1.1,0,2,0.9,2,2v45c0,1.1-0.9,2-2,2h-12"/>
        {/*
        <text transform="matrix(1 0 0 1 293 37)">
        <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
        <tspan x="0" y="8.4" style={styles.availabilityText}>10 minutes</tspan>
      </text>
      <circle style={styles.clockIcon} cx="284.4" cy="40.1" r="6"/>
      <polyline style={styles.clockIcon} points="284.4,36.3 284.4,40.9 288.4,40.9   "/>
        */}
      </>
    )
  }

  const renderMuseumplein = () => {
    return (
      <>
      <text transform="matrix(1 0 0 1 169 127)" style={styles.roomName}>Museumplein</text>
      <path style={styles.roomAvailable} d="M192.9,114.5h-24.4c-1.8,0-3.3-0.8-3.3-1.8
            V90.8c0-1,1.5-1.8,3.3-1.8h40.6c1.8,0,3.3,0.8,3.3,1.8v21.9c0,1-1.4,1.8-3.3,1.8"/>
          {/*
        <text transform="matrix(1 0 0 1 184 136)">
        <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
        <tspan x="0" y="8.4" style={styles.availabilityText}>10 minutes</tspan>
      </text>
      <circle style={styles.clockIcon} cx="175.4" cy="139.1" r="6"/>
      <polyline style={styles.clockIcon} points="175.4,135.3 175.4,139.9 179.4,139.9      "/>
        */}

      </>
    )
  }

  const renderWeesperplein = () => {
    return (
      <>
      <text transform="matrix(1 0 0 1 88 83)" style={styles.roomName}>Weesperplein</text>
      <path style={styles.roomAvailable} d="M138.3,114.5c-1.8,0-3.3-0.8-3.3-1.8V90.8
            c0-1,1.5-1.8,3.3-1.8H162c1.8,0,3.3,0.8,3.3,1.8v21.9c0,1-1.5,1.8-3.3,1.8h-7.4"/>
        {/*
      <text transform="matrix(1 0 0 1 103 63)">
        <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
        <tspan x="0" y="8.4" style={styles.availabilityText}>10 minutes</tspan>
      </text>
      <circle style={styles.clockIcon} cx="94.4" cy="66.1" r="6"/>
      <polyline style={styles.clockIcon} points="94.4,62.3 94.4,66.9 98.4,66.9      "/>
        */}
      </>
    )
  }

  const renderNieuwmarkt = () => {
    return (
      <>
      <text transform="matrix(1 0 0 1 7 150)" style={styles.roomName}>Nieuwmarkt</text>
      <path style={styles.roomAvailable} d="M55.1,110.3c0.5,0.4,0.9,1,0.9,1.7v25
            c0,1.1-0.9,2-2,2H29c-1.1,0-2-0.9-2-2v-25c0-1.1,0.9-2,2-2h12"/>
              <text transform="matrix(1 0 0 1 23 159)">
        <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
        <tspan x="0" y="8.4" style={styles.availabilityText}>10 minutes</tspan>
      </text>
      <circle style={styles.clockIcon} cx="14.4" cy="162.1" r="6"/>
      <polyline style={styles.clockIcon} points="14.4,158.3 14.4,162.9 18.4,162.9   "/>

      </>
    )
  }

  return (
    <svg viewBox="0 0 640 450" style={{ width: 1000 }}>
      { renderStadionplein()}
      { renderBeukenplein()}
      { renderWaterlooplein()}
      { renderMuseumplein()}
      { renderWeesperplein()}
      { renderNieuwmarkt()}
    </svg>
  )
}

const styles = {
  roomName: {
    fill: '#808080',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: "10px"
  },
  availabilityText: {
    fill: '#B3B3B3',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: '7px'
  },
  roomAvailable: {
    fill: '#54CC65',
    stroke: '#009245',
    strokeWidth: '2px',
  },
  roomUnAvailable: {
    fill: '#f1795f',
    stroke: '#ce4427',
    strokeWidth: '2px',
  },
  clockIcon: {
    fill: 'none',
    stroke: '#B3B3B3',
    strokeMiterlimit: 10
  }
}

export default Amsterdam2Map





