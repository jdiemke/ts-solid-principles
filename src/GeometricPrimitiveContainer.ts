import { GeometricPrimitive } from './geometric-primitives';

export class GeometricPrimitiveContainer {

    private geometricPrimitives: Array<GeometricPrimitive> = new Array<GeometricPrimitive>();

    public add(primitive: GeometricPrimitive): void {
        this.geometricPrimitives.push(primitive);
    }

    public computeArea(): number {
        return this.geometricPrimitives.reduce((a, b) => a + b.computeArea(), 0);
    }

}
