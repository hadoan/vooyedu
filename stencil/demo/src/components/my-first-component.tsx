import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'my-first-component',
})
export class MyComponent {
    @Prop() name: string;

    render() {
        return (
            <p>
                My name is {this.name}
            </p>
        )
    }
}