import { v4 as uuidv4 } from 'uuid';

function id() {
  return uuidv4()
}

const data = [
  {id: id(), name: 'Bill Branson', salary: 1000 },
  {id: id(), name: 'Ted Larson', salary: 1200 },
  {id: id(), name: 'Sam Jackson', salary: 1400 },
]

export default data
