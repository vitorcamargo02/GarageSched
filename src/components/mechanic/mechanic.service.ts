import Mechanic from './mechanic';

const mechanics: Mechanic[] = [];

const addMechanic = (mechanic: Mechanic) => {
  mechanics.push(mechanic);
};

const getMechanics = () => {
  return mechanics;
};

export { addMechanic, getMechanics };