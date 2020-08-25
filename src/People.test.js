import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import People from './People';

describe('<People />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const root = document.createElement('root');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<People />, root);

        // Clean up
        ReactDOM.unmountComponentAtNode(root);
    });
});

describe('<People />', () => {
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<People />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});