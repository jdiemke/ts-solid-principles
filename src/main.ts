import { Rectangle, Circle } from './geometric-primitives';
import { GeometricPrimitiveContainer } from './GeometricPrimitiveContainer';

const container: GeometricPrimitiveContainer = new GeometricPrimitiveContainer();

container.add(new Rectangle(2,5));
container.add(new Circle(1));

const area: number = container.computeArea();
console.log(area);
