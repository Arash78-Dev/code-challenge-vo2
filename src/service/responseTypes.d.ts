export interface EventResponse {
  id: number;
  personId: number;
  eventDate: string;
  name: string;
  eventType: string;
  description: null;
  comment: null;
  results: [
    {
      resultType: string;
      place: null;
      entrants: null;
    },
    {
      resultType: string;
      place: null;
      entrants: null;
    },
    {
      resultType: string;
      place: null;
      entrants: null;
    }
  ];
  legs: {
    legType: string;
    duration: null;
    distance: null;
    workoutId: null;
  }[];
  workouts: [];
  goals: {
    athleteEventId: number;
    athleteId: number;
    distance: null;
    time: null;
    place: null;
    finish: null;
    pr: null;
    written: [];
  };
  atpPriority: null;
  atpId: null;
  atpWeekId: null;
  raceTypeDuration: null;
  isHidden: boolean;
  isLocked: boolean;
  externalEventSource: null;
  externalEventId: null;
  ctlTarget: null;
  distance: null;
  distanceUnits: null;
}

export interface GetEventsResponse {
  status: string;
  message: string;
  data: EventResponse[];
}

export interface ChartDataResponse {
  workoutDay: string;
  tssActual: number;
  tssPlanned: number;
  ctl: number;
  atl: number;
  tsb: number;
  ifActual: number;
  ifPlanned: number;
}

export interface GetChartsDataResponse {
  status: string;
  message: string;
  data: ChartDataResponse[];
}
