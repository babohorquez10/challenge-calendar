export function sortReminders(reminders) {
  
  const cloneReminders = [...reminders];

  const sortedReminders = cloneReminders.sort((rem1, rem2) => {

    const rem1Time = rem1.time.split(':');
    const rem1Hour = parseInt(rem1Time[0], 10);
    const rem1Min = parseInt(rem1Time[1], 10);

    const rem2Time = rem2.time.split(':');
    const rem2Hour = parseInt(rem2Time[0], 10);
    const rem2Min = parseInt(rem2Time[1], 10);

    if(rem1Hour < rem2Hour || (rem1Hour === rem2Hour && rem1Min < rem2Min) ) {
      return -1;
    }

    else if(rem1Hour > rem2Hour || (rem1Hour === rem2Hour && rem1Min > rem2Min) ) {
      return 1;
    }

    else {
      return 0;
    }
  });
  
  return sortedReminders;
}