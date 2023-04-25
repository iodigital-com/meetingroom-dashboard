interface Campus { 
  [key: string]: string; 
}

interface CampusData {
	id: string;
	schedules: {
		start: string;
		end: string;
		location: string;
		subject?: string;
	}[];
};

export interface CampusComponentProps {
	campus: CampusData;
}

export interface CampusListProps {
	campuses: Campus[];
	data: CampusData[];
  component?: React.FunctionComponent;
}

export interface MapPageData {
	slug: string;
	campusData: any;
}

export interface MapPageProps {
	data: MapPageData;
}

export interface CampusNameHash {
  [key: string]: number;
}

interface Tab {
	label: string;
	content: string;
}

export interface TabViewProps {
	tabs: Tab[];
	data: any;
}

export type CampusDataType =  { 
  [key: string]: { 
    [key: string]: { 
      [key: string]: string; 
    }[];
  }; 
}

export type CampusDataArrayType =  { 
  [key: string]: { 
    [key: string]: string; 
  }[];
}

export type ComponetHashType = {
  [key: string]: React.ReactElement;
}

export interface NavItem {
  id: string;
  label: string;
  path?: string;
  subItems?: NavItem[];
}

export interface NavProps {
  navItems: NavItem[];
}

export type AccordionProps = {
  children?: React.ReactNode;
  label: string;
  onSelect?: (value: string) => void;
};

export type TooltipProps = {
  content?: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
};