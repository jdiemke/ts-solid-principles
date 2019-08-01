import { GeometricPrimitive } from './GeometricPrimitive';

export class Rectangle implements GeometricPrimitive {

    public constructor(private width: number, private height: number) { }

    public computeArea(): number {
        return this.width * this.height;
    }

}
