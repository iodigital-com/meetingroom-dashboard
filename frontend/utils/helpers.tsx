import moment from "moment";
import { CampusData, RoomData } from "./types";
import Amsterdam1Map from '@/components/map-components/amsterdam1';
import Amsterdam2Map from '@/components/map-components/amsterdam2';

export const formatRoomData = (data: CampusData[]) => {
	return data?.reduce((accumulator, campus) => {
		return {
			...accumulator,
			[campus.id]: { schedules: campus.schedules },
		};
	}, {})
}

export const findRoomAvailability = (room: string, roomsData: RoomData) => {
	const currentTime = moment();
	const singleRoomData = roomsData && roomsData[room];
	const currentSchedule = singleRoomData?.schedules.find(
		(item) =>
			moment(item.start).isSameOrBefore(currentTime) && currentTime.isSameOrBefore(moment(item.end))
	);

	if (currentSchedule) {
		const remainingTime = moment(currentSchedule.end).diff(currentTime);
		const duration = moment.duration(remainingTime);
		const hours = duration.hours();
		const minutes = duration.minutes();
		const formattedHours = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : '';
		const formattedMinutes = minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : '';

		if (minutes === 0) return formattedHours;

		const formattedRemainingTime = `${formattedHours}${formattedHours && formattedMinutes ? ' ' : ''}${formattedMinutes}`;
		return formattedRemainingTime;
	} else {
		return false;
	}
}

export const Components: { [key: string]: React.FC<any> } = {
	amsterdam1: Amsterdam1Map,
	amsterdam2: Amsterdam2Map,
};