import { v4 as uuidv4 } from 'uuid';

function id() {
  return uuidv4()
}

const data = [
  {id: id(), name: 'Bill Branson', salary: 1000, increase: false, rise: true },
  {id: id(), name: 'Ted Larson', salary: 1200, increase: false, rise: false  },
  {id: id(), name: 'Sam Jackson', salary: 1400, increase: false, rise: false  },
]

export { data, id }
