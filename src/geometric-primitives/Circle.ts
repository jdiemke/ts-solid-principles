import { GeometricPrimitive } from './GeometricPrimitive';

export class Circle implements GeometricPrimitive {

    public constructor(private radius: number) { }

    public computeArea(): number {
        return Math.PI * this.radius * this.radius;
    }

}
