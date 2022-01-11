import express, { Request, Response, NextFunction } from 'express';
const app = express();
const port = 3000;
const config = require('./config.json');

interface LocationWithTimezone {
  location: string;
  timezoneName: string;
  timezoneAbbr: string;
  utcOffset: number;
};

const showLocations = config.showLocations;

let locations: LocationWithTimezone[] = [
  {
    location: 'Germany',
    timezoneName: 'Central European Time',
    timezoneAbbr: 'CET',
    utcOffset: 1
  },
  {
    location: 'China',
    timezoneName: 'China Standard Time',
    timezoneAbbr: 'CST',
    utcOffset: 8
  },
  {
    location: 'Argentina',
    timezoneName: 'Argentina Time',
    timezoneAbbr: 'ART',
    utcOffset: -3
  },
  {
    location: 'Japan',
    timezoneName: 'Japan Standard Time',
    timezoneAbbr: 'JST',
    utcOffset: 9
  },
  {
    location: 'New York',
    timezoneName: 'Eastern Standard Time',
    timezoneAbbr: 'EST',
    utcOffset: -5
  }
];



const getLocationsWithTimezones = (request: Request, response: Response, next: NextFunction) => {

  if (showLocations) {
    response.status(200).json(locations);
  } else {
    response.status(500).json([{message: 'A different message'}])
  }

};

app.get('/timezones', getLocationsWithTimezones);

app.listen(port, () => {
  console.log(`ts-node server running on port ${port}`)
})