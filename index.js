function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
};

function driverNamesWithRevenueOver(drivers, revenue) {
  let filteredDrivers = [];
  let driverNames = [];

  filteredDrivers = driversWithRevenueOver(drivers, revenue); 

  driverNames = filteredDrivers.map(function (driver) {
    return driver.name;
  });

  return driverNames;
};

function exactMatch(drivers, object) {
  return drivers.filter(function (driver) {
    for (const key in object) {
      if (driver[key] === object[key]) {
        return driver;
      };
    };
  });
};

function exactMatchToList(drivers, object) {
  let matchedDrivers = exactMatch(drivers, object);
  let driverNames = matchedDrivers.map(function (driver) {
    return driver.name;
  });
  return driverNames;
};