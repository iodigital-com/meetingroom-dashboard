import React from 'react';
import styles from './styles'
import { findRoomAvailability, formatRoomData } from 'utils/helpers';
import { MapComponentProps } from 'utils/types';

const Amsterdam2Map: React.FC<MapComponentProps> = ({ data }) => {
  const roomsData = formatRoomData(data);

  const renderStadionplein = () => {
    const remainingTime = findRoomAvailability('stadionplein', roomsData);
    const isAvailable = !remainingTime;

    return (
      <>
        <text transform="matrix(1 0 0 1 432 137)" style={styles.roomName}>Stadionplein</text>
        <path style={isAvailable ? styles.roomAvailable : styles.roomUnAvailable} d="M464,127h-12c-1.1,0-2-0.9-2-2v-25c0-1.1,0.9-2,2-2h25c1.1,0,2,0.9,2,2v25c0,0.7-0.4,1.3-0.9,1.7" />
        {!isAvailable && <>
          <text transform="matrix(1 0 0 1 447 148)">
            <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
            <tspan x="0" y="8" style={styles.availabilityText}>{remainingTime}</tspan>
          </text>
          <circle style={styles.clockIcon} cx="438" cy="150" r="6" />
          <polyline style={styles.clockIcon} points="438,146 438,150 442,150" />
        </>}
      </>
    );
  };

  const renderBeukenplein = () => {
    const remainingTime = findRoomAvailability('beukenplein', roomsData)
    const isAvailable = !remainingTime;
    
    return (
      <>
        <text transform="matrix(1 0 0 1 340 125)" style={styles.roomName}>Beukenplein</text>
        <path style={isAvailable ? styles.roomAvailable : styles.roomUnAvailable} d="M352,113h-12c-1.1,0-2-0.9-2-2V86c0-1.1,0.9-2,2-2h25c1.1,0,2,0.9,2,2v25c0,0.8-0.5,1.5-1.2,1.8" />
        {!isAvailable && <>
          <text transform="matrix(1 0 0 1 354 134)">
            <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
            <tspan x="0" y="8" style={styles.availabilityText}>{remainingTime}</tspan>
          </text>
          <circle style={styles.clockIcon} cx="345" cy="137" r="6" />
          <polyline style={styles.clockIcon} points="345,133 345,137 349,137" />
        </>}
      </>
    );
  };

  const renderWaterlooplein = () => {
    const remainingTime = findRoomAvailability('waterlooplein', roomsData)
    const isAvailable = !remainingTime;
    
    return (
      <>
        <text transform="matrix(1 0 0 1 278 57)" style={styles.roomName}>Waterlooplein</text>
        <path style={isAvailable ? styles.roomAvailable : styles.roomUnAvailable} d="M309.2,112.8c-0.7-0.3-1.2-1-1.2-1.8V66c0-1.1,0.9-2,2-2h25c1.1,0,2,0.9,2,2v45c0,1.1-0.9,2-2,2h-12" />
        {!isAvailable && <>
          <text transform="matrix(1 0 0 1 293 37)">
            <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
            <tspan x="0" y="8" style={styles.availabilityText}>{remainingTime}</tspan>
          </text>
          <circle style={styles.clockIcon} cx="284" cy="40" r="6" />
          <polyline style={styles.clockIcon} points="284,36 284,40 288,40" />
        </>}
      </>
    );
  };

  const renderMuseumplein = () => {
    const remainingTime = findRoomAvailability('museumplein', roomsData)
    const isAvailable = !remainingTime;
    
    return (
      <>
        <text transform="matrix(1 0 0 1 169 127)" style={styles.roomName}>Museumplein</text>
        <path style={isAvailable ? styles.roomAvailable : styles.roomUnAvailable} d="M192.9,114.5h-24.4c-1.8,0-3.3-0.8-3.3-1.8V90.8c0-1,1.5-1.8,3.3-1.8h40.6c1.8,0,3.3,0.8,3.3,1.8v21.9c0,1-1.4,1.8-3.3,1.8" />
        {!isAvailable && <>
          <text transform="matrix(1 0 0 1 184 136)">
            <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
            <tspan x="0" y="8" style={styles.availabilityText}>{remainingTime}</tspan>
          </text>
          <circle style={styles.clockIcon} cx="175" cy="139" r="6" />
          <polyline style={styles.clockIcon} points="175,135 175,139 179,139" />
        </>}
      </>
    );
  };

  const renderWeesperplein = () => {
    const remainingTime = findRoomAvailability('weesperplein', roomsData)
    const isAvailable = !remainingTime;
    
    return (
      <>
        <text transform="matrix(1 0 0 1 88 83)" style={styles.roomName}>Weesperplein</text>
        <path style={isAvailable ? styles.roomAvailable : styles.roomUnAvailable} d="M138.3,114.5c-1.8,0-3.3-0.8-3.3-1.8V90.8c0-1,1.5-1.8,3.3-1.8H162c1.8,0,3.3,0.8,3.3,1.8v21.9c0,1-1.5,1.8-3.3,1.8h-7.4" />
        {!isAvailable && <>
          <text transform="matrix(1 0 0 1 103 63)">
            <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
            <tspan x="0" y="8" style={styles.availabilityText}>{remainingTime}</tspan>
          </text>
          <circle style={styles.clockIcon} cx="94" cy="66" r="6" />
          <polyline style={styles.clockIcon} points="94,62 94,66 98,66" />
        </>}
      </>
    );
  };

  const renderNieuwmarkt = () => {
    const remainingTime = findRoomAvailability('nieuwmarkt', roomsData)
    const isAvailable = !remainingTime;
    
    return (
      <>
        <text transform="matrix(1 0 0 1 7 150)" style={styles.roomName}>Nieuwmarkt</text>
        <path style={isAvailable ? styles.roomAvailable : styles.roomUnAvailable} d="M55.1,110.3c0.5,0.4,0.9,1,0.9,1.7v25c0,1.1-0.9,2-2,2H29c-1.1,0-2-0.9-2-2v-25c0-1.1,0.9-2,2-2h12" />
        {!isAvailable && <>
          <text transform="matrix(1 0 0 1 23 159)">
            <tspan x="0" y="0" style={styles.availabilityText}>Available in </tspan>
            <tspan x="0" y="8" style={styles.availabilityText}>{remainingTime}</tspan>
          </text>
          <circle style={styles.clockIcon} cx="14" cy="162" r="6" />
          <polyline style={styles.clockIcon} points="14,158 14,162 18,162" />
        </>}
      </>
    );
  };

  const renderDeDam = () => {
    const remainingTime = findRoomAvailability('dedam', roomsData)
    const isAvailable = !remainingTime;
    
    return (
      <>
        <text transform="matrix(1 0 0 1 524 89)" style={styles.roomName}>De Dam</text>
        <path style={isAvailable ? styles.roomAvailable : styles.roomUnAvailable} d="M610.5,73.5h13.4c1.1,0,2.1-0.9,2.1-2.1V27.6c0-1.1-0.9-2.1-2.1-2.1h-97.9c-1.1,0-2.1,0.9-2.1,2.1V57v12.5v2c0,1.1,0.9,2.1,2.1,2.1h70.4" />
        {!isAvailable && <>
          <text transform="matrix(1 0 0 1 539 99)">
            <tspan x="0" y="0" style={styles.availabilityText}>Available in</tspan>
            <tspan x="0" y="8" style={styles.availabilityText}>{remainingTime}</tspan>
          </text>
          <circle style={styles.clockIcon} cx="530" cy="101" r="6" />
          <polyline style={styles.clockIcon} points="530,97 530,102 534,102" />
        </>}
      </>
    );
  };

  return (
    <svg viewBox="0 0 640 450" style={{ width: '100%' }}>
      {renderStadionplein()}
      {renderBeukenplein()}
      {renderWaterlooplein()}
      {renderMuseumplein()}
      {renderWeesperplein()}
      {renderNieuwmarkt()}
      {renderDeDam()}
    </svg>
  );
};

export default Amsterdam2Map;