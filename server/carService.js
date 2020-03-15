const Car  = require('../car');

function getCars(data) {
  const cars = Car.findAll();
  return cars;
}

function createCar(args) {
  console.log(args)
  const result = Car.create(args.carInput)
  console.log('result', result.dataValues);
  return result.dataValues;
}

function updateCar(args) {
  console.log(args);
  const {id, ...data} = args;
  const car = Car.update(data, {where: { id: id }});
  console.log('result', car.dataValues);
  return car.dataValues;
}

function deleteCar({id}) {
  const car = await Car.destroy({where: {id: id}});
  console.log(car)
  return {id : car.id};
}

module.exports = {
  getCars,
  createCar,
  updateCar,
  deleteCar
};
