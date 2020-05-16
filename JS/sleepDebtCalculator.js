const getSleepHours = day => {
    day = day.toLowerCase();
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 8;
    } else if (day === 'wednesday') {
      return 7;
    } else if (day === 'thursday') {
      return 4;
    } else if (day === 'friday') {
      return 9;
    } else if (day === 'saturday') {
      return 8.5;
    } else if (day === 'sunday') {
      return 9;
    } else {
      return 'invalid day entered';
    };
  };
  
  const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  };

  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      return 'You got enough sleep!';
    } else if (actualSleepHours > idealSleepHours) {
      const lessSleep = (actualSleepHours - idealSleepHours);
      return `You are oversleeping by ${lessSleep} hours a week.`;
    } else if (actualSleepHours < idealSleepHours) {
      const moreSleep = (idealSleepHours - actualSleepHours);
      return `You should have slept for ${moreSleep} more hours.`;
    } else {
      return 'An error has occurred. Please try again.';
    };
  };
  
  console.log(`You slept for ${getActualSleepHours()} hours.`);
  console.log(`You should have slept for ${getIdealSleepHours()} hours.`);
  console.log(calculateSleepDebt());