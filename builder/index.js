class Car {
  constructor(brand, model, year, engine, color, gps) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
    this.gps = gps;
  } 

  showConfig() {
    console.log(`
    Carro selecionado:
    Marca: ${this.brand}
    Modelo: ${this.model}
    Ano: ${this.year}
    Motor: ${this.engine}
    Cor: ${this.color}
    GPS: ${this.gps}
    `);
  }
}

// Builder
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setColor(color){
    this.car.color = color;
    return this;
  }
  
  setGPS(gps){
    this.car.gps = gps;
    return this;
  }

  build() {
    return this.car;
  }
}

// Director → monta configurações pré-definidas
class CarDirector {
  static buildDreamCar() {
    return new CarBuilder()
      .setBrand("Ferrari")
      .setModel("SF90 Stradale")
      .setYear("2025")
      .setEngine("V8 Híbrido 1000cv")
      .setColor("Rosso Corsa")
      .setGPS("Ferrari Connect Pro")
      .build();
  }

  static buildFamilySUV() {
    return new CarBuilder()
      .setBrand("Porsche")
      .setModel("Cayenne Turbo GT")
      .setYear("2025")
      .setEngine("4.0 V8 Biturbo 640cv")
      .setColor("Chalk Grey")
      .setGPS("Porsche Communication Management")
      .build();
  }

  static buildRetroCar() {
    return new CarBuilder()
      .setBrand("Chevrolet")
      .setModel("Camaro SS 1969")
      .setYear("1969 Restomod")
      .setEngine("LS7 V8 7.0L")
      .setColor("Hugger Orange")
      .setGPS("RetroSound Touchscreen")
      .build();
  }

  static buildOffRoad() {
    return new CarBuilder()
      .setBrand("Land Rover")
      .setModel("Defender 110 V8")
      .setYear("2025")
      .setEngine("5.0 V8 Supercharged")
      .setColor("Santorini Black")
      .setGPS("Pivi Pro Terrain Response")
      .build();
  }
}

// Bulding the Dream Garage For a Millionary 
const dream = CarDirector.buildDreamCar();
const FamilySUV = CarDirector.buildFamilySUV();
const Retro = CarDirector.buildRetroCar();
const OffRoad = CarDirector.buildOffRoad();
const Hyper = new CarBuilder()
  .setBrand("Koenigsegg")
  .setModel("Jesko Absolut")
  .setYear("2025")
  .setEngine("V8 5.0 Biturbo 1600cv")
  .setColor("Pearl White")
  .setGPS("Koenigsegg SmartCluster")
  .build();

console.log("*********************************")
console.log("Montando sua garagem dos sonhos:")
console.log("*********************************")

dream.showConfig();
FamilySUV.showConfig();
Retro.showConfig();
OffRoad.showConfig();
Hyper.showConfig();
