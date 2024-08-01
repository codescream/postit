const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomFloat = (min, max, decimals) => parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

const notesArray = [
  'Handle with care', 'Fragile', 'Keep upright', 'Do not stack', 'Deliver before 5 PM',
  'Leave at front door', 'Ring bell on arrival', 'Signature required', 'Keep refrigerated', 'High priority',
  'Heavy', 'Do not drop', 'Contains liquids', 'Contains glass', 'Contains electronics',
  'Express delivery', 'Standard delivery', 'Free shipping', 'Requires ID check', 'Do not bend'
];

const senderNames = ['Alice', 'Charlie', 'Eve', 'Grace', 'Ivan', 'Mallory', 'Peggy', 'Sybil', 'Trudy', 'Victor'];

const recipientNames = ['Bob', 'Dave', 'Frank', 'Heidi', 'Judy', 'Oscar', 'Trent', 'Victor', 'Wendy', 'Yvonne'];

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco', 'Seattle', 'Miami', 'Boston', 'Denver', 'Phoenix', 'Dallas', 'Philadelphia', 'Atlanta', 'San Diego', 'Orlando', 'Las Vegas', 'Austin', 'San Jose', 'Salt Lake City', 'Portland'];

const generateEmail = name => `${name.toLowerCase().replace(' ', '')}@example.com`;

export const rows = Array.from({ length: 30 }, (_, id) => {
  const senderName = senderNames[getRandomInt(0, senderNames.length - 1)];
  const recipientName = recipientNames[getRandomInt(0, recipientNames.length - 1)];
  
  return {
  id: id + 1,
  senderName,
  senderEmail: generateEmail(senderName),
  recipientName,
  recipientEmail: generateEmail(recipientName),
  from: cities[getRandomInt(0, cities.length - 1)],
  to: cities[getRandomInt(0, cities.length - 1)],
  weight: getRandomFloat(1, 10, 1),
  cost: getRandomInt(10, 100),
  notes: notesArray[getRandomInt(0, notesArray.length - 1)]
}});