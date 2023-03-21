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
  overflow-x: scroll;

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
	scrollbar-width: auto;
	scrollbar-color: #dcdbdc #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
	width: 12px;
  }

  *::-webkit-scrollbar-track {
	background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
	background-color: #dcdbdc;
	border-radius: 7px;
	border: 4px solid #ffffff;
  }
`;

const CampusListSubItem = styled.div`
	padding: .2rem;
	display: flex;
	align-items: center;
	overflow: hidden;
`;

const CampusListItemName = styled.span`
  font-weight: bold;
  margin-right: 1rem;
	width: 150px;
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
  const formatTime = (time: string) => moment(time).format("h:mm a");

  return (
    <CampusListItem>
      <CampusListItemName>{capitalizeFirstLetter(campus.id)}</CampusListItemName>
      <CampusListSubItem>
        {
          campus.schedules.length > 0 && campus.schedules.map((schedule, idx) => (
            <>
              <CampusListItemEvent className={idx === 0 ? '__first' : ''}>
                <CampusListItemEventHeader className={ /* TODO: find an approriate condition to show the classes */true ? 'busy' : 'available'}>Busy</CampusListItemEventHeader>
                {formatTime(schedule.start)} - {formatTime(schedule.end)}
              </CampusListItemEvent>
            </>
          ))
        }
      </CampusListSubItem>
    </CampusListItem>
  );
};

export default CampusComponent;