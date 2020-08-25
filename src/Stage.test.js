import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Stage from './Stage';

describe('<Stage />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const root = document.createElement('root');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<Stage />, root);

        // Clean up
        ReactDOM.unmountComponentAtNode(root);
    });
});

describe('<Stage />', () => {
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Stage />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__ Stage.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});