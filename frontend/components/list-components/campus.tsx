import { NextPage } from 'next';
import styled from 'styled-components';
import moment from 'moment';
import { CampusComponentProps } from 'utils/types';

const CampusListItem = styled.div`
  padding: 1rem;
  display: grid;
  min-width: 0;
  grid-template-columns: 150px 1fr;
  width: 100%;
`;

const CampusListSubItem = styled.div`
  padding: .2rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const CampusListItemName = styled.span`
  font-weight: bold;
  margin-right: 1rem;
	width: 150px;
  margin-top: 3rem;
`;

const CampusListItemEvent = styled.span`
	border-right: 1px solid #ccc;
	padding: .5rem;
	// width: 200px;
	height: 90px;
	display: flex;
	flex-direction: column;

	&.__first {
		border-left: 1px solid #ccc;
	}
`;

const CampusListItemEventHeader = styled.span`
	padding: .5rem;
	width: 160px;
	height: 90px;

	&.available {
		color: green;
	}

	&.busy {
		color: red;
	}
`;

const CampusComponent: NextPage<CampusComponentProps> = ({ campus }) => {
  const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);
  const formatTime = (time: Date | string) => moment(time).format("h:mm a");

  const workEnd = moment().hour(24).minute(0); // Work end time: 6pm
  const currentTime = moment().startOf('hour'); // Current time rounded down to the nearest hour

  // Find the busy time slots
  const busySlots: { start: moment.Moment, end: moment.Moment }[] = campus.schedules.map(schedule => {
    const start = moment(schedule.start);
    const end = moment(schedule.end);
    return { start, end };
  });

  const sorttedBusySlots = busySlots
    .filter(slot => slot.end.isAfter(currentTime)) // Filter out slots that end before the current time
    .sort((a, b) => a.start.valueOf() - b.start.valueOf());

  // Calculate the available time slots
  const availableSlots: { start: moment.Moment, end: moment.Moment }[] = [];

  if (sorttedBusySlots.length === 0) {
    // If there are no busy slots, the remaining work day is available
    availableSlots.push({ start: currentTime, end: workEnd });
  } else {
    // Check if there's a gap between the current time and first busy slot, and add it as an available slot
    if (currentTime.isBefore(sorttedBusySlots[0].start)) {
      availableSlots.push({ start: currentTime, end: sorttedBusySlots[0].start });
    }

    // Find the gaps between the busy slots
    for (let i = 0; i < sorttedBusySlots.length - 1; i++) {
      const gapStart = sorttedBusySlots[i].end;
      const gapEnd = sorttedBusySlots[i + 1].start;
      if (gapEnd.isAfter(gapStart)) {
        availableSlots.push({ start: gapStart, end: gapEnd });
      }
    }

    // Check if there's a gap between the last busy slot and work end, and add it as an available slot
    if (workEnd.isAfter(sorttedBusySlots[sorttedBusySlots.length - 1].end)) {
      availableSlots.push({ start: sorttedBusySlots[sorttedBusySlots.length - 1].end, end: workEnd });
    }
  }

  // Merge the busy and available slots
  const allSlots = [];
  let busyIdx = 0, availableIdx = 0;
  while (busyIdx < sorttedBusySlots.length && availableIdx < availableSlots.length) {
    const busySlot = sorttedBusySlots[busyIdx];
    const availableSlot = availableSlots[availableIdx];
    if (availableSlot.start.isBefore(busySlot.start)) {
      allSlots.push({ type: "available", start: availableSlot.start, end: availableSlot.end });
      availableIdx++;
    } else {
      allSlots.push({ type: "busy", start: busySlot.start, end: busySlot.end });
      busyIdx++;
    }
  }
  while (busyIdx < sorttedBusySlots.length) {
    const busySlot = sorttedBusySlots[busyIdx];
    allSlots.push({ type: "busy", start: busySlot.start, end: busySlot.end });
    busyIdx++;
  }
  while (availableIdx < availableSlots.length) {
    const availableSlot = availableSlots[availableIdx];
    allSlots.push({ type: "available", start: availableSlot.start, end: availableSlot.end });
    availableIdx++;
  }

  return (
    <CampusListItem>
      <CampusListItemName>{capitalizeFirstLetter(campus.id)}</CampusListItemName>
      <CampusListSubItem>
        {allSlots.map((slot, idx) => (
          <CampusListItemEvent key={idx} className={idx === 0 ? '__first' : ''}>
            <CampusListItemEventHeader className={slot.type === "busy" ? 'busy' : 'available'}>{slot.type === "busy" ? 'Busy' : 'Available'}</CampusListItemEventHeader>
            {formatTime(slot.start.toDate())} - {formatTime(slot.end.toDate())}
          </CampusListItemEvent>
        ))}
      </CampusListSubItem>
    </CampusListItem>
  );
};

export default CampusComponent;